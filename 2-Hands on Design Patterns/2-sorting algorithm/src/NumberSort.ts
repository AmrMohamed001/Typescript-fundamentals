import { Sortable, Sorter } from './Sorter'
export class NumberSort extends Sorter {
	constructor(public data: number[]) {
		super()
	}

	public get length(): number {
		return this.data.length
	}

	compare(leftIndex: number): boolean {
		return this.data[leftIndex] > this.data[leftIndex + 1]
	}
	swap(leftIndex: number): void {
		let temp = this.data[leftIndex]
		this.data[leftIndex] = this.data[leftIndex + 1]
		this.data[leftIndex + 1] = temp
	}
}
