import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID ?? "";
const SALT_KEY    = process.env.PHONEPE_SALT_KEY    ?? "";
const SALT_INDEX  = process.env.PHONEPE_SALT_INDEX  ?? "1";
const IS_PROD     = process.env.PHONEPE_ENV         === "PROD";

const PHONEPE_BASE = IS_PROD
  ? "https://api.phonepe.com/apis/hermes"
  : "https://api-preprod.phonepe.com/apis/pg-sandbox";

export async function GET(req: NextRequest, { params }: { params: Promise<{ txnId: string }> }) {
  const { txnId } = await params;
  const endpoint  = `/pg/v1/status/${MERCHANT_ID}/${txnId}`;
  const checksum  = crypto.createHash("sha256").update(endpoint + SALT_KEY).digest("hex") + "###" + SALT_INDEX;

  const res  = await fetch(`${PHONEPE_BASE}${endpoint}`, {
    headers: { "X-VERIFY": checksum, "X-MERCHANT-ID": MERCHANT_ID },
  });
  const data = await res.json();

  return NextResponse.json({
    success: data.success,
    status:  data.code,
    amount:  data.data?.amount ? data.data.amount / 100 : 0,
    txnId,
  });
}
