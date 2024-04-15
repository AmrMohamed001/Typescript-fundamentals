export interface Sortable {
	length: number
	compare(leftIndex: number): boolean
	swap(leftIndex: number): void
}
export abstract class Sorter {
	abstract length: number
	abstract compare(leftIndex: number): boolean
	abstract swap(leftIndex: number): void
	sort(): void {
		for (let i = 0; i < this.length; i++) {
			for (let j = 0; j < this.length - i - 1; j++) {
				if (this.compare(j)) {
					this.swap(j)
				}
			}
		}
	}
}
