/**
  * Array.prototype.reduce((a, b, c, d) =>{}, default)
  * 按属性对object分类
  * 数组去重
 */

 /**
  * 数组里所有的和， 
  */
let arraySum = (arr) => {
  return arr.reduce((a, b) => {
    return a + b
  }, 0)
}

console.log(arraySum([1, 2, 3, 4]))

 /**
  * 累加对象数组里面的值，
  */
let objSum = (arr) => {
  return arr.reduce((a, b) => {
    return a + b.x
  }, 0)
}

console.log(objSum([{x: 1}, {x: 2}, {x: 3}, {x: 4}]))

/**
 * 
 * @param {将二维数组转化为一维数组，} 
 */
let changeArray = (arr) => {
  return arr.reduce((a, b) => a.concat(b), [])
}

console.log(changeArray([[1, 2], [5, 6], [3, 4]]))

/**
 * 
 * @param {计算数组中每个元素出现的次数} arr 
 */
let count = (arr) => {
  return arr.reduce((a, b) => {
    if (a[b]) { // b in a
      a[b] ++
    } else {
      a[b] = 1
    }
    return a
  }, {}) 
}

console.log(count([1, 1, 2, 1, 4]))

/**
 * 按属性对object分类
 */
let classify = (arr, prop) => {
  return arr.reduce((a, b) => {
    let name = b[prop]
    if (!a[name]) {
      a[name] = []
    }
    a[name].push(b)
    return a
  }, {})
}

console.log(classify([{name: 'tom', age: 20}, {name: 'jack', age: 21}, {name: 'jerry', age: 20}], 'age'))

/**
 * * 数组去重
 */
function removeRepeat(arr) {
  return arr.reduce((a, b) => {
    if (a.indexOf(b) === -1) { //Array.prototype.includes
      a.push(b)
    }
    return a.sort()
  }, [])
}

console.log(removeRepeat([1,2,1,2,3,5,4,5,3,4,4,4,4]))