// 每次调用函数，返回数加一,写成函数表达式＋括号,一定要是var，不能是块级作用域
var count=(function (){
  var sum=0
  return function(){
    console.log(++sum)
  }
})()