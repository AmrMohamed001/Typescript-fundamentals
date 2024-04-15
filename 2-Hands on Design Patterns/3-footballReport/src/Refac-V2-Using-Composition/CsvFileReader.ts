import fs from 'fs';
import { DataReader } from './MatchReader';

export class CsvReader implements DataReader {
	data: string[][] = [];

	constructor(public fileName: string) {}

	read(): void {
		this.data = fs
			.readFileSync(this.fileName, { encoding: 'utf-8' })
			.split('\n')
			.map((rec: string): string[] => {
				// convert to arr
				return rec.split(',');
			});
	}
}
