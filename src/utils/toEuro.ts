export function toEuro(price: number): string {
	return Number(Math.round(price * 100) / 10000).toFixed(2) + ' €'
}
