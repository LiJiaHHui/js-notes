Function.prototype.myCall=function(context){
  context=context||window
  context.fn=this
  let args=[]
  args=[...arguments].slice(1) //arguments是类数组对象，使用扩展运算符将其展开成独立的参数，[]放在数组里，
   let res=context.fn(args.join(','))//需要传入字符串
  delete context.fn
  return res
}

//apply传入数组，要考虑是否为空的情况
Function.prototype.myApply=function(context,arr){
  context = context||window
  context.fn=this
  let res
  if(!arr){//为空则直接运行
    res=context.fn()
  }else{
    res=context.fn(arr)//直接用传入的数组
  }
  delete context.fn
  return res
}

//使用call，apply模拟实现bind,返回一个函数
Function.prototype.myBind=function(context){
  let that=this
  return function(){
    return that.call(context,arguments)
  }
}