import { covertToDate } from '../utils';
import { matchResults } from '../MatchResults';

//defining tuple type
type matchDate = [Date, string, string, number, number, matchResults, string];

///////////////////////////////////////
export interface DataReader {
	data: string[][];

	read(): void;
}

///////////////////////////////////////
export class MatchReader {
	matches: matchDate[] = [];

	constructor(public reader: DataReader) {}

	load(): void {
		this.reader.read();
		this.matches = this.reader.data.map((raw: string[]): matchDate => {
			// change some types
			return [
				covertToDate(raw[0]),
				raw[1],
				raw[2],
				parseInt(raw[3]),
				parseInt(raw[4]),
				raw[5] as matchResults,
				raw[6],
			];
		});
	}
}
