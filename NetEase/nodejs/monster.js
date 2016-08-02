/**
 * Created by 46956 on 2016/8/1.
 */
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var monsterNum, originValue;
var index = 1;

rl.on('line', function (line) {
    var lineData = line.split(" ");

    if (index % 2 !== 0) {
        monsterNum = parseInt(lineData[0], 10);
        originValue = parseInt(lineData[1], 10);
    } else {
        for (var i = 0; i < monsterNum; i++) {
            var monsterValue = parseInt(lineData[i], 10);

            if (monsterValue > originValue) {
                originValue += gcd(monsterValue, originValue);
            } else {
                originValue += monsterValue;
            }
        }
        console.log(originValue);
    }
    index++;
});

function gcd(m, n) {
    if (n == 0) {
        return m;
    } else {
        return gcd(n, m % n);
    }
}