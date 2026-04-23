import { NextRequest, NextResponse } from "next/server";
import { validatePromo } from "@/lib/promoCodes";

export async function POST(req: NextRequest) {
  try {
    const { code, cartTotal } = await req.json() as { code: string; cartTotal: number };

    if (!code || typeof cartTotal !== "number") {
      return NextResponse.json({ valid: false, error: "Missing code or cartTotal" }, { status: 400 });
    }

    const result = validatePromo(code, cartTotal);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ valid: false, error: "Server error" }, { status: 500 });
  }
}
