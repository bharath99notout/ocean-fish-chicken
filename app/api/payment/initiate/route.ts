import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const MERCHANT_ID  = process.env.PHONEPE_MERCHANT_ID  ?? "";
const SALT_KEY     = process.env.PHONEPE_SALT_KEY     ?? "";
const SALT_INDEX   = process.env.PHONEPE_SALT_INDEX   ?? "1";
const IS_PROD      = process.env.PHONEPE_ENV          === "PROD";
const APP_URL      = process.env.NEXT_PUBLIC_APP_URL  ?? "http://localhost:3000";

const PHONEPE_BASE = IS_PROD
  ? "https://api.phonepe.com/apis/hermes"
  : "https://api-preprod.phonepe.com/apis/pg-sandbox";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, orderId, phone, items, address } = body as {
      amount:  number;
      orderId: string;
      phone:   string;
      items:   string;   // stringified summary for redirect params
      address: string;
    };

    if (!MERCHANT_ID || !SALT_KEY) {
      return NextResponse.json(
        { success: false, message: "PhonePe credentials not configured. Please set PHONEPE_MERCHANT_ID and PHONEPE_SALT_KEY in environment variables." },
        { status: 503 }
      );
    }

    const payload = {
      merchantId:            MERCHANT_ID,
      merchantTransactionId: orderId,
      merchantUserId:        `COASTAL_${phone}`,
      amount:                amount * 100, // paise
      redirectUrl:           `${APP_URL}/payment/success?orderId=${orderId}`,
      redirectMode:          "REDIRECT",
      callbackUrl:           `${APP_URL}/api/payment/callback`,
      mobileNumber:          phone.replace(/\D/g, "").slice(-10),
      paymentInstrument:     { type: "PAY_PAGE" },
    };

    const base64Payload = Buffer.from(JSON.stringify(payload)).toString("base64");
    const checksumRaw   = base64Payload + "/pg/v1/pay" + SALT_KEY;
    const checksum      = crypto.createHash("sha256").update(checksumRaw).digest("hex") + "###" + SALT_INDEX;

    const response = await fetch(`${PHONEPE_BASE}/pg/v1/pay`, {
      method:  "POST",
      headers: { "Content-Type": "application/json", "X-VERIFY": checksum },
      body:    JSON.stringify({ request: base64Payload }),
    });

    const data = await response.json();

    if (data.success && data.data?.instrumentResponse?.redirectInfo?.url) {
      return NextResponse.json({
        success:     true,
        redirectUrl: data.data.instrumentResponse.redirectInfo.url,
      });
    }

    return NextResponse.json(
      { success: false, message: data.message ?? "Payment initiation failed" },
      { status: 400 }
    );
  } catch (err) {
    console.error("[PhonePe initiate]", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
