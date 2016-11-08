//在Javascript中，每个对象都有一个原型对象。所有的Javascript对象都从它们的原型对象里继承方法和属性
//ES5
var Animal = (function(){
  function MyConstructor(name){
    this.name = name;
  }
  MyConstructor.prototype.speak = function(){
    console.log(this.name + ' is a animal!');
  }
  return MyConstructor;
})();
var animal = new Animal('dog');
animal.speak();

//ES6
class Animals {
  constructor(name) {
    this.name = name;
  }
  speak(){
    console.log(this.name + ' is a animal!');
  }
}
var animal = new Animals('cat');
animal.speak();

//ES6中继承有了extends和super关键词
class Cat extends Animals{
  speak(){
    super.speak();
    console.log(this.name + ' miaomiao!');
  }
}

var Tom = new Cat('Tom');
Tom.speak();
