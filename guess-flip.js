import minimist from 'minimist';
import { coinFlips, countFlips, flipACoin } from './modules/coin.mjs';

const argv = minimist(process.argv.slice(2));
if (argv.call == null || ((argv.call != "heads") && (argv.call != "tails"))){
    console.log('Error: no input');
    console.log('Usage: node guess-flip --call=[heads|tails]');
}
else{
    console.log(flipACoin(argv.call));
}