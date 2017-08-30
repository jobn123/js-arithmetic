/**
 * 统计一个字符串出现最多的字母
 */
let findMaxDuplicateChar = (str) => {

  if(str.length === 1) return str

  let obj = {}
  for(let i = 0; i < str.length; i++) {
    if (!obj[str.charAt(i)]) {
      obj[str.charAt(i)] = 1
    } else {
      obj[str.charAt(i)] +=  1
    }
  }

  let maxValue = 1
  let maxChar = ''
  for (let k in obj) {
    if(obj[k] >= maxValue) {
      maxChar = k;
      maxValue = obj[k];
    }
  }

  return maxChar;
}