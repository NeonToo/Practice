/**
 * Created by 46956 on 2016/8/1.
 */
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    var tokens = line.split(' ');
    console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
});
//process.stdin.resume();
//process.stdin.setEncoding('ascii');
//
//var input = "";
//var input_array = "";
//
//process.stdin.on('data', function (data) {
//    input += data;
//});
//
//process.stdin.on('end', function () {
//    input_array = input.split("\n");
//    console.log(input_array);
//    var nLine = 0;
//
//    while(nLine < input_array.length){
//        var line = input_array[nLine++].trim();
//        if(line === ''){
//            continue;
//        }
//        var input_arrays = line.split(' ');
//        var a = +input_arrays[0];
//        var b = +input_arrays[1];
//        console.log(a+b);
//    }
//});
//process.stdin.setEncoding('utf8');
//
//process.stdin.on('readable', function () {
//    var chunk = process.stdin.read();
//    if (chunk !== " ") {
//        input += chunk;
//    } else {
//        process.stdin.emit("end");
//    }
//
//    //input_array = input.split(" ");
//    //console.log(input_array.length);
//    //var nLine = 0;
//    //
//    //while (nLine < input_array.length) {
//    //    var line = input_array[nLine++].trim();
//    //    if (line === '') {
//    //        continue;
//    //    }
//    //    var input_arrays = line.split(' ');
//    //    var a = +input_arrays[0];
//    //    var b = +input_arrays[1];
//    //    //console.log(a + b);
//    //}
//});
//
//process.stdin.on('end', function () {
//    console.log(input);
//    input_array = input.split(" ");
//    console.log(input_array.length);
//});