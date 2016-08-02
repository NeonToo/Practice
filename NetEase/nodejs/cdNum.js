/**
 * Created by 46956 on 2016/8/1.
 */
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    var array = line.split(" ");
    var cdNum = 0;
    var n = array[0];
    var s = array[1];
    var l = array[2];
    var songNum = Math.floor((l + 1) / (s + 1)) > n ? n : Math.floor((l + 1) / (s + 1));

    if (songNum % 13 === 0) {
        songNum -= 1;
    }

    cdNum = Math.ceil(n / songNum);

    if (n % songNum !== 0 && (n % songNum) % 13 === 0 && (n % songNum) === songNum - 1) {
        cdNum += 1;
    }

    console.log(cdNum);
});