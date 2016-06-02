/**
 * Created by I326950 on 6/2/2016.
 */
function getNthFibonacci(count) {
    if (count === 0 || count === 1) {
        return 1;
    } else {
        var result;
        var aFibonacci = [1, 1];

        for (var i = 2; i < count; i++) {
            var first = aFibonacci[0];

            aFibonacci[0] = aFibonacci[1];
            aFibonacci[1] = first + aFibonacci[0];
        }

        result = aFibonacci.reduce(function (prev, next) {
            return prev + next;
        }, 0);

        //for(var i = 2; i < count; i++) {
        //    aFibonacci.push(getNthFibonacci(i - 2) + getNthFibonacci(i - 1));
        //}
        //
        //result = aFibonacci[count - 2] + aFibonacci[count - 1];
        //
        return result;
    }
}

console.log(getNthFibonacci(0));   // 1
console.log(getNthFibonacci(2));   // 2
console.log(getNthFibonacci(3));   // 3
console.log(getNthFibonacci(4));   // 5
console.log(getNthFibonacci(5));   // 8
console.log(getNthFibonacci(6));   // 13