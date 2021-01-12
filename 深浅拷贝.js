let obj = {
  name: 'Lee',
  age: 18,
  gf: {
    name: 'Yjj',
    age: 18
  }
}
// 浅拷贝 将属性值直接赋值给另一个对象，基本数据类型的值和引用数据类型的内存地址
// 1 
let newObj=Object.assign({},obj)
// 2 拓展运算符
let newObj1={...obj}
// 3自定义函数法  判断参数类型->新对象类型？数组：对象->循环属性
function shallowClone(obj){
  if(!obj||typeof obj !=='object') return
  let newObj=Array.isArray(obj)?[]:{}
  for(let key in obj){//循环属性
    if(obj.hasOwnProperty(key)){//确定属性存在与否
      newObj[key]=obj[key]
    }
  }
}

// 深拷贝
// 1
let newObj=JSON.parse(JSON.stringify(obj))
// 2 自定义函数
function deepClone(obj){
  if(!obj||typeof(obj)!=='object')return
  let newObj=Array.isArray(obj)?[]:{}
  for(key in obj){
    if(obj.hasOwnProperty(key)){
      newObj[key] = typeof(obj[key])==='object'?//是对象继续循环
      deepClone(obj[key]):obj[key]
    }
  }
}