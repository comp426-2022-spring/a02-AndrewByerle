import minimist from 'minimist';
import { coinFlips, countFlips, flipACoin } from './modules/coin.mjs';

const argv = minimist(process.argv.slice(2));
if (argv.call == null || (argv.call != "heads") && (argv.call != "tails")){
    throw new Error('no input. Usage: node guess-flip --call=[heads|tails]');
}
console.log(flipACoin(argv.call));