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
    var numA = array[0] + "";
    var dA = array[1] + "";
    var numB = array[2] + "";
    var dB = array[3] + "";
    var pA = "", pB = "";

    for (var i = 0, aLen = numA.length; i < aLen; i++) {
        if (numA[i] === dA) {
            pA += numA[i];
        }
    }

    for (var j = 0, bLen = numB.length; j < bLen; j++) {
        if (numB[j] === dB) {
            pB += numB[j];
        }
    }

    console.log(parseInt(pA, 10) + parseInt(pB, 10));
    // var numA = +array[0];
    // var dA = +array[1];
    // var numB = +array[2];
    // var dB = +array[3];
    // var tempNumA = 0;
    // var tempNumB = 0;
    //
    // while(numA != 0) {
    //     if(numA % 10 === dA) {
    //         tempNumA = tempNumA * 10 + dA;
    //     }
    //     numA /= 10;
    // }
    //
    // while(numB != 0) {
    //     if(numB % 10 === dB) {
    //         tempNumB = tempNumB * 10 + dB;
    //     }
    //     numB /= 10;
    // }
    //
    // console.log(tempNumA);
    // console.log(tempNumB);
});