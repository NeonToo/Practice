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
    var maxRadius = parseInt(array[0], 10);
    var x0 = parseInt(array[7], 10), y0 = parseInt(array[8], 10);
    var hurt = 0;

    for (var i = 1; i < 7; i += 2) {
        var x = parseInt(array[i], 10);
        var y = parseInt(array[i + 1], 10);

        if (Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)) <= maxRadius) {
            hurt++;
        }
    }

    console.log(hurt + "x");
});