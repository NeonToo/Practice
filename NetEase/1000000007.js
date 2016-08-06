var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    if (!line || line.length === 0) {
        console.log(-1);
        return;
    }

    var x0 = +line.split(" ")[0];

    if (x0 < 1 || x0 > 1000000006) {
        console.log(-1);
        return;
    }

    var currentPos = x0 % 7;
    var times = 0;

    while(currentPos % 7 !== 0 && times <= 100000) {
        var diff = 7 - currentPos % 7;
        if(diff > 3) {
            currentPos = diff * 8 + 7;
            // currentPos = (7 - currentPos % 7) * 4 + 3;
        } else {
            currentPos = diff * 4 + 3;
            // currentPos = currentPos * 8 + 7;
        }
        times++;
    }

    if(currentPos % 7 !== 0 || times > 100000) {
        times = -1;
    }

    console.log(times);
});