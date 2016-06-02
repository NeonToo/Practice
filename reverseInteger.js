/**
 * Reverse digits of an integer.

    Example1: x = 123, return 321
    Example2: x = -123, return -321
 */

/**
 * @param {number} x
 * @return {number}
 */
    // 注意负数和最大值
var reverse = function(x) {
    if(x < 0) {
        return -reverse(-x);
    }

    var result = 0;
    while(x > 0) {
        if(result >= 214748365) {
            return 0;
        }

        var rail = x % 10;
        result = result * 10 + rail;
        x = Math.floor(x / 10);
    }

    return result;
};

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var num = 0,
        sign = 1,
        str = str.trim(),
        len = str.length,
        i = 0;

    if(len == 0) {
        return 0;
    }

    if(str.charAt(i) == "+" || str.charAt(i) == "-") {
        sign = str.charAt(0) == "+" ? 1 : -1;
        i++;
    }

    while(i < len && str.charAt(i) != " " && !isNaN(str.charAt(i))) {
        num = num * 10 + parseInt(str.charAt(i++));

        if(num > 2147483647) {
            return sign > 0 ? 2147483647 * sign : 2147483648 * sign;
        }
    }

    return num * sign;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [];
    var exist = {};

    for(var i = 0, len = nums.length; i < len; i++) {
        var want = exist[target - nums[i]];
        if (typeof (want) !== 'undefined') {
            result.push(want);
            result.push(i);
        }
        exist[nums[i]] = i;
    }

    return result;
};
