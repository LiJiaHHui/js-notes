//节流：单位时间内只执行一次函数
function throttle(fn,delay){
  let preTime=Date.now()
  return function(){
    let context=this
    let curTime=Date.now()
    if(curTime-preTime>=delay){
        preTime=curTime
        fn.apply(context,arguments)
    }
  }
}

//防抖：事件在触发n秒后才执行（回调），n秒内重复触发重新计时
function debounce(fn,delay){
  let timer=null
  return function(){
    let context=this
    if(timer) {//重新计时
    clearTimeout(timer)
      timer=null
  }
    timer=setTimeout(function(){
      fn.apply(context,arguments)
    },delay)
  }
}
// 保存this的意义在于，当一个对象内存在一个函数方法，并且这个函数方法内还有一个函数时
// 内部函数的this也想指向对象时，就需要保存this