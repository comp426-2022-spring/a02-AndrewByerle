import minimist from 'minimist';
import { coinFlips, countFlips } from './modules/coin.mjs';
// Since we have "type": "module" in package.json, we need to import minimist since require doesn't work. 
// This doesn't work -> var argv = require('minimist')(process.argv.slice(2));

// Use Ex. node flips.js --number=10
const argv = minimist(process.argv.slice(2));
if (argv.number != null) {
    // console.log(argv.number > 0)
    var flips = coinFlips(argv.number)
    console.log(flips, countFlips(flips));
}
else {
    var flips = coinFlips(1)
    console.log(flips, countFlips(flips));
    // console.log(countFlips(flips));
}