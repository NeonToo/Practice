var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var monsterNum, originValue;
var index = 1;

rl.on('line', function (line) {
    var inputData = line.split(" ");

    if (index === 1) {
        monsterNum = parseInt(inputData[0], 10);
        originValue = parseInt(inputData[1], 10);
        index++;
    } else {
        for (var i = 0; i < monsterNum; i++) {
            var monsterValue = parseInt(inputData[i], 10);

            if (monsterValue > originValue) {
                originValue += gcd(monsterValue, originValue);
            } else {
                originValue += monsterValue;
            }
        }
        console.log(originValue);
    }
});

function gcd(a, b) {
    var tmp;

    while (b) {
        tmp = b;
        b = a % b;
        a = tmp;
    }

    return a;
}