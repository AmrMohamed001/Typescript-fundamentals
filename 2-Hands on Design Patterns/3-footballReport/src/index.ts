import {CsvReader} from './Refac-V2-Using-Composition/CsvFileReader';
import {MatchReader} from './Refac-V2-Using-Composition/MatchReader'
import {matchResults} from './MatchResults';
///////////////////////////////////////
const reader = new CsvReader('football.csv');
const matchesData = new MatchReader(reader)
matchesData.load()
///////////////////////////////////////
// calculate manUnitedWins
let manUnitedWins = 0;
for (let i of matchesData.matches) {
    if (i[1] === 'Man United' && i[5] == matchResults.homeWin) manUnitedWins++;
    else if (i[2] === 'Man United' && i[5] == matchResults.awayWin)
        manUnitedWins++;
}
console.log(`Man United this season wins ${manUnitedWins} matches`);
