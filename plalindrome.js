/**
 * 判断一个单词是否为回文 aba manam
 * 用法 node plalindrome.js -p "aba"
 */

let argv = require('optimist').string('v').argv;

let checkPlalindrome = (str) => {
  console.log(str == str.split("").reverse().join(""))
  return str == str.split("").reverse().join("")
}

//str.split("").reverse().toString().replace( /\,/g,"")
checkPlalindrome(argv.p)