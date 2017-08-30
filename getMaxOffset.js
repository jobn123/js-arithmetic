/**
 * 找出数组的最大差值
 */
var ary = [10,5,11,7,8,9];
Math.max.apply(null, ary) - Math.min.apply(null, ary);

// es6
Math.max(...ary) - Math.min(...ary);