/**
 * 随机生成指定长度字符串
 */

let randomString = (len) => {
  let str = 'abcdefghijklmnopqrstuvwxyz1234567890'
  let tmp = ''
  let strLen = str.length
  
  for (let i = 0; i < len; i ++) {
    tmp += str.charAt(Math.floor(Math.random() * strLen)) 
  }
  
  return tmp;
}