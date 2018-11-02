/**
 * 冒泡排序
 * 冒泡排序算法就是依次比较大小，小的的大的进行位置上的交换
 */

let bubbleSort = (arr) => {

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {

      let val = arr[i]
      let nextVal = arr[j]
      
      if (nextVal < val) {
        arr[i] = nextVal
        arr[j] = val
      }
    }
  }

  return arr  
} 