import fs from 'fs'
import { covertToDate } from './utils'
import { matchResults } from './MatchResults'
//defining tuple type
type matchDate = [Date, string, string, number, number, matchResults, string]
export class CsvReader {
	data: matchDate[] = []
	constructor(public fileName: string) {}
	read(): void {
		this.data = fs
			.readFileSync(this.fileName, { encoding: 'utf-8' })
			.split('\n')
			.map((rec: string): string[] => {
				// convert to arr
				return rec.split(',')
			})
			.map((raw: string[]): matchDate => {
				// change some types
				return [
					covertToDate(raw[0]),
					raw[1],
					raw[2],
					parseInt(raw[3]),
					parseInt(raw[4]),
					raw[5] as matchResults,
					raw[6],
				]
			})
	}
}
