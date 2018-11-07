/**
 * 冒泡排序
 * 冒泡排序算法就是依次比较大小，小的的大的进行位置上的交换
 */

let bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    // console.log('i'+i)
    for (let j = i + 1; j < arr.length; j++) {
      // console.log('j'+j)
      let val = arr[i]
      let nextVal = arr[j]
      
      if (nextVal < val) {
        // arr[i] = nextVal
        // arr[j] = val
        swap(arr, i , j)
      }
    }
  }

  return arr  
} 

function swap(arr, left, right) {
  let rightValue = arr[right]
  arr[right] = arr[left]
  arr[left] = rightValue
}

bubbleSort([1,3,5,2,4,7])