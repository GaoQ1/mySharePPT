title: Functional Programming in Javascript
speaker: 高权
url:
transition: circle
theme: moon
usemathjax: yes

[slide]
# Functional Programming in Javascript
----
* 函数式编程(Functional Programming)是什么 {:&.moveIn}
* 为什么使用函数式编程
* 如何使用函数式编程

[slide]
## 函数式编程(Functional Programming)是什么
---
> Functional programming refers to the declarative evaluation of **pure functions** to create **immutable** programs by *avoiding externally observable side effects*.

[slide]
## 纯函数(Pure Function)
> Pure function意指**相同的输入**，永远会得到**相同的输出**，而且没有任何显著的副作用。

---
```Javascript
  //slice和splice

  var arr = [1,2,3,4,5];
  //pure
  arr.slice(0,3);   //=> [1,2,3]
  arr.slice(0,3);   //=> [1,2,3]
  arr.slice(0,3);   //=> [1,2,3]

  //impure
  arr.splice(0,3);   //=> [1,2,3]
  arr.splice(0,3);   //=> [4,5]
  arr.splice(0,3);   //=> []
```

[slide]
## 为什么使用函数式编程
---
* 降低复杂性
* 使

[slide]
---
| 特点 | 命令式 | 函数式 |
| :------: | :-------: | :------:|
| 编程风格 | 一步一步地执行，并且要管理状态的变化 | 描述问题和所需的数据变化以解决问题 |
| 状态变化 | 很重要 | 不存在 |
| 执行顺序 | 很重要 | 不太重要 |
| 主要的控制流 | 循环、条件、函数调用 | 函数调用和递归 |
| 主要的操作单元	| 结构体和类对象 | 函数作为一等公民的对象和数据集 {:.highlight}|
