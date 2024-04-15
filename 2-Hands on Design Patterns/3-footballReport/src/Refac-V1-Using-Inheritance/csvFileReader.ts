import fs from 'fs';

export abstract class CsvReader<T> {
	data: T[] = [];
	constructor(public fileName: string) {}
	abstract mapRow(row: string[]): T;
	read(): void {
		this.data = fs
			.readFileSync(this.fileName, { encoding: 'utf-8' })
			.split('\n')
			.map((rec: string): string[] => {
				// convert to arr
				return rec.split(',');
			}) // convert types inside arr to correct types
			.map(this.mapRow);
	}
}
