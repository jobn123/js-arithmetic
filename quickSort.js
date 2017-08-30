/**
 * 快速排序
 * 算法参考某个元素值，将小于它的值，放到左数组中，大于它的值的元素就放到右数组中，
 * 然后递归进行上一次左右数组的操作，返回合并的数组就是已经排好顺序的数组了。
 */

let quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  var left = [],
    right = [],
    pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort7(left).concat(pivot, quickSort(right));
}