export function calculatePrice(basePrice, quantity) {
  let total = basePrice * quantity;

  if (quantity >= 100) {
    total = total * 0.9;
  } else if (quantity >= 50) {
    total = total * 0.95;
  }

  return Math.round(total);
}