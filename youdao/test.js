var line;
var n, l, arr = [];
var maxDis = -1, len = 0;

function entrance(line) {
    line = line.split(' ');
    len = line.length;

    for (var i = 0; i < len; i++) {
        arr[i] = +line[i];
    }

    arr.sort(compare);

    for (var j = 1; j < len; j++) {
        maxDis = Math.max(maxDis, arr[j] - arr[j - 1]);
    }

    maxDis /= 2.0;

    if (arr[0] != 0) {
        maxDis = Math.max(maxDis, arr[0]);
    }
    if (arr[n - 1] != l) {
        maxDis = Math.max(maxDis, l - arr[n - 1]);
    }

    console.log(maxDis.toFixed(2));
}


function compare(a, b) {
    return a - b;
}

entrance("15 5 3 7 9 14 0");