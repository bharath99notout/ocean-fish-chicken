// Server-side only — never import this in client components

export interface PromoCode {
  type:       "percent" | "flat";
  value:      number;
  label:      string;
  minOrder?:  number;   // minimum cart total to apply
  maxUses?:   number;   // optional cap (not enforced without a DB)
  active:     boolean;
}

const PROMO_CODES: Record<string, PromoCode> = {
  COASTAL10: { type: "percent", value: 10, label: "10% off",      active: true },
  FRESH50:   { type: "flat",    value: 50, label: "₹50 off",      minOrder: 300, active: true },
  WELCOME20: { type: "percent", value: 20, label: "20% off",      minOrder: 500, active: true },
  FISH100:   { type: "flat",    value: 100,label: "₹100 off",     minOrder: 800, active: true },
};

export function validatePromo(
  code: string,
  cartTotal: number
): { valid: true; discount: number; label: string } | { valid: false; error: string } {
  const promo = PROMO_CODES[code.toUpperCase()];

  if (!promo || !promo.active) {
    return { valid: false, error: "Invalid promo code" };
  }

  if (promo.minOrder && cartTotal < promo.minOrder) {
    return { valid: false, error: `Minimum order ₹${promo.minOrder} required` };
  }

  const discount =
    promo.type === "percent"
      ? Math.round(cartTotal * promo.value / 100)
      : Math.min(promo.value, cartTotal);

  return { valid: true, discount, label: promo.label };
}
