var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    if (!line) {
        console.log(-1);
        return;
    }

    if (line.length === 0) {
        console.log(-1);
        return;
    }

    var n = +line.split(" ")[0];

    if (n < 1 || n > 10e6) {
        console.log(-1);
        return;
    }

    var nStep = -1;
    var nLeft = 0, nRight = 0;
    for(var i = 1; fibonacci(i) <= n; i++) {
        if(fibonacci(i + 1) >= n) {
            nLeft = n - fibonacci(i);
            nRight = fibonacci(i + 1) - n;
            nStep = nLeft > nRight ? nRight : nLeft;
            break;
        }
    }

    console.log(nStep);
});

function fibonacci(n) {
    if(n === 1 || n === 2) {
        return 1;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}