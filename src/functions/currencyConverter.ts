export function CurrencyConverter(price: number) {
  return price?.toLocaleString('pt-br', { minimumFractionDigits: 2 })
}
