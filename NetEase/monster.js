//process.stdin.resume();
//process.stdin.setEncoding('utf8');

//var input = "";
//var input_array = "";

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var monsterNum, originValue;
var index = 1;

rl.on('line', function (line) {
    var lineData = line.split(" ");

    if (index === 1) {
        monsterNum = parseInt(lineData[0], 10);
        originValue = parseInt(lineData[1], 10);
    } else {
        var monsterValue;
        //for(var i = 0; i < monsterNum; i++) {
        if (lineData.length > 1) {
            for (var i = 0; i < lineData.length; i++) {
                monsterValue = parseInt(lineData[i], 10);
                if (monsterValue > originValue) {
                    originValue += gcd(monsterValue, originValue);
                } else {
                    originValue += monsterValue;
                }
            }
        } else {
            monsterValue = +lineData;

            if (monsterValue > originValue) {
                originValue += gcd(monsterValue, originValue);
            } else {
                originValue += monsterValue;
            }

            if (index - 1 === monsterNum) {
                console.log(originValue);
            }
        }
        //var monsterValue = parseInt(lineData[i], 10);
        //
        //if(monsterValue > originValue) {
        //    originValue += gcd(monsterValue, originValue);
        //} else {
        //    originValue += monsterValue;
        //}
        //}
    }
    index++;
});

//process.stdin.on('data', function (data) {
//    input += data;
//});

//process.stdin.setEncoding('utf8');
//
//process.stdin.on('readable', function() {
//    var chunk = process.stdin.read();
//    if (chunk !== null) {
//        input += chunk;
//    }
//});
//
//process.stdin.on('end', function() {
//    //process.stdout.write('end');
//    input_array = input.split("\n");
//    var index = 0;
//    var monsterNum = 0, originValue = 0;
//
//    while (index < input_array.length) {
//        var line = input_array[index++].trim();
//        if (line === '') {
//            continue;
//        }
//        var input_arrays = line.split(' ');
//
//        if (index % 2 !== 0) {
//            monsterNum = +input_arrays[0];
//            originValue = +input_arrays[1];
//        } else {
//            for (var i = 0; i < monsterNum; i++) {
//                var monsterValue = +input_arrays[i];
//
//                if (monsterValue > originValue) {
//                    originValue += gcd(monsterValue, originValue);
//                } else {
//                    originValue += monsterValue;
//                }
//            }
//            console.log(originValue);
//        }
//    }
//});

function gcd(m, n) {
    if (n == 0) {
        return m;
    } else {
        return gcd(n, m % n);
    }
}