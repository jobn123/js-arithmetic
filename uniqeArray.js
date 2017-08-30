/**
 * 去掉一组整型数组重复的值
 */

let uniquArray = (arr) => {
  let newArr = []
  for (let i = 0; i< arr.length; i++ )  {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}