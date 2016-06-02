/**
 * Created by I326950 on 6/2/2016.
 */
var data = {a: 1, b: 2, c: 3, d: 4};

var array = Object.keys(data).filter(function (x) {
    return data[x] > 2;
});

console.log(array);