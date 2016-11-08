// 默认值
function add(x,y){
  return x + y;
}
let res = add(1,5);
console.log(res);

function addDefault(x = 0, y = 0){
  return x + y;
}
let res2 = addDefault(1);
console.log(res2);

/*//扩展运算符
function add(...arg){
  let res = 0;
  arg.forEach(function(val,item){
    res += val;
  });
  return res;
}

let result = add(1,2,3,4,5,6);
console.log(result);

function spread(a, ...arg){
  console.log('fitst: ',a);
  console.log('others: ',arg);
}
spread(2,3,4,5,6,7);

//求最大值
let arr = [1,2,3,4,5];
let m = Math.max(...arr);
console.log(m);

//concat
var a1 = [10,['a','b']];
var r = [1,2,3,4].concat(...a1);
console.log(r);
*/

/*//箭头函数
//ES5
let func1 = function(a){
  return a + 1;
}

//ES6
let func2 = (a) => {
  return a + 1;
}

console.log(func1(100));
console.log(func1(100));*/

/*//箭头函数this
function func(){
  setTimeout(function(){
    console.log(this);
    console.log(this.id);
  })
}

function func1(){
  setTimeout(function(){
    console.log(this);
    console.log(this.id);
  }.bind(this))
}

function func2(){
  setTimeout( () => {
    console.log(this);
    console.log(this.id);
  })
}

let obj = {
  id: 123
}

func.call(obj);
// func2.call(obj);*/
