import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const SALT_KEY   = process.env.PHONEPE_SALT_KEY   ?? "";
const SALT_INDEX = process.env.PHONEPE_SALT_INDEX ?? "1";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { response: encodedResponse } = body as { response: string };

    // Verify checksum from X-VERIFY header
    const xVerify   = req.headers.get("x-verify") ?? "";
    const [hash]    = xVerify.split("###");
    const computed  = crypto.createHash("sha256").update(encodedResponse + SALT_KEY).digest("hex");

    if (computed !== hash) {
      console.error("[PhonePe callback] Checksum mismatch");
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const decoded = JSON.parse(Buffer.from(encodedResponse, "base64").toString("utf-8"));
    const { code, data } = decoded;

    console.log("[PhonePe callback]", { code, txnId: data?.merchantTransactionId });

    // PAYMENT_SUCCESS = paid, PAYMENT_PENDING = pending, PAYMENT_DECLINED = failed
    return NextResponse.json({ success: true, code });
  } catch (err) {
    console.error("[PhonePe callback error]", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

// PhonePe also sends a redirect GET after payment
export async function GET() {
  return NextResponse.json({ success: true });
}
