import { Sortable, Sorter } from './Sorter'
export class StringSort extends Sorter {
	constructor(public data: string) {
		super()
	}
	get length(): number {
		return this.data.length
	}
	compare(leftIndex: number): boolean {
		return (
			this.data[leftIndex].toLowerCase() >
			this.data[leftIndex + 1].toLowerCase()
		)
	}
	swap(leftIndex: number): void {
		let characters = this.data.split('')
		let temp = characters[leftIndex]
		characters[leftIndex] = characters[leftIndex + 1]
		characters[leftIndex + 1] = temp
		this.data = characters.join('')
	}
}
