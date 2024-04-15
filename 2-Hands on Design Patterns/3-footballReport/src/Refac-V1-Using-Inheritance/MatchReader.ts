import { CsvReader } from './csvFileReader';
import { covertToDate } from './utils';
import { matchResults } from './MatchResults'; // enum
//defining tuple type
type matchData = [Date, string, string, number, number, matchResults, string];

export class MatchReader extends CsvReader<matchData> {
	mapRow(row: string[]): matchData {
		return [
			covertToDate(row[0]),
			row[1],
			row[2],
			parseInt(row[3]),
			parseInt(row[4]),
			row[5] as matchResults,
			row[6],
		];
	}
}
