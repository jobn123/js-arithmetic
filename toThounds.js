/**
 * 
 * @param {*} num 
 */
function formart(num) {
  let arr = num.toString().split("")
 arr.reduce(function(a, b, c, e){
   let d = (c % 3 === 2 && c !== e.length -1)? a + b + "," : a + b
   return d
 },"")
}

console.log(formart(1000000))