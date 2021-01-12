// 单例模式
// 一个类仅有一个实例，并提供全局访问的方法
// static 静态方法，不能通过实例继承，只能通过调用类的方法

class Single{
  constructor(name){
    this.name=name,
    this.instance=null
  }
  static getInstance(name){
    if(!this.instance){
      this.instance=new Single(name)
    }
    return this.instance
  }
}
// test
var obj1=Single.getInstance('Dofu')
var obj2=Single.getInstance('food')
console.log(obj1===obj2)

// 观察者模式
// 一个对象，维护订阅列表，当状态有变化时通知订阅列表
var events=(function(){
  var topics={}
  return {
    // 注册
    subscript:function(topic,handler){
      if(!topics.hasOwnProperty(topic)){
        topics[topic]=[]//设置为空数组
      }
      topics[topic].push(handler)
    },
    // 发布事件，触发回调
    publish:function(topic){
      if(topics.hasOwnProperty(topic)){
        topics[topic].forEach(handler=>{
          handler()
        });
      }
    },
    // 移除观察者的一个回调函数
    remove:function(topic,handler){
      if(topics.hasOwnProperty(topic)){
        var handlerIndex=-1 //获取函数对应的索引
        topics[topic].forEach((item,index)=>{
          if(item===handler){
            handlerIndex=index
          }
        })
        if(handlerIndex>=0){
          topics[topic].splice(handlerIndex,1)
        }
      }
    },
    // 移出观察者所有的回调函数
    removeAll:function(topic){
      if(topics.hasOwnProperty(topic)){
        topics[topic]=[]
      }
    }
  }
})()
// es6写法
class Events{
  constructor(){
    this.topics={}
  }
  // 添加订阅
  subscript(topic,handler){
    if(this.topics[topic]){
      this.topics[topic].push(handler)
    }else{
      this.topics[topic]=[handler]
    }
  }
  // 执行回调
  publish(topic){
    if(this.topics[topic]){
      this.topics[topic].forEach(handler=>{
        handler()
      })
    }
  }
  // 移除某个回调函数
  remove(topic,handler){
    if(this.topics[topic]){
      this.topics[topic].filter((fn)=>{
        fn!==handler
      })
    }
  }
  // 移除所有回调函数
  removeAll(topic){
    if(this.topics[topic]){
      this.topics[topic]=[]
    }
  }
}

// 发布订阅
// 与观察者的区别在于有一个消息代理
class EventsEmitter{
  constructor(){
    this.topics={}
  }
  // 添加订阅
  subscript(topic,handler){
    if(this.topics[topic]){
      this.topics[topic].push(handler)
    }else{
      this.topics[topic]=[handler]
    }
  }
  // 执行回调
  publish(topic){
    if(this.topics[topic]){
      this.topics[topic].forEach(handler=>{
        handler()
      })
    }
  }
  // 移除某个回调函数
  remove(topic,handler){
    if(this.topics[topic]){
      this.topics[topic].filter((fn)=>{
        fn!==handler
      })
    }
  }
  // 只执行一次
  once(topic,handler){
    let fn=()=>{
      handler()
      this.remove(topic,handler)
    }
    this.subscript(topic,fn)
  }
}