var varlist = document.getElementById("varlist");
var iifelist = document.getElementById("iifelist");
var letlist = document.getElementById("letlist");

//var
for (var i = 1; i <= 5; i++) {
  var item = document.createElement("li");
  item.appendChild(document.createTextNode("Item " + i));

  var j = i; //注意这里使用的是var

  item.onclick = function (ev) {
     console.log("Item " + j + " is clicked.");
   };
  varlist.appendChild(item);
}

//iife
for (var i = 1; i <= 5; i++) {
  var item = document.createElement("li");
  item.appendChild(document.createTextNode("Item " + i));

  (function(i){
    var j = i;
    item.onclick = function (ev) {
       console.log("Item " + j + " is clicked.");
     };
  })(i)

  iifelist.appendChild(item);
}

// let
for (var i = 1; i <= 5; i++) {
  var item = document.createElement("li");
  item.appendChild(document.createTextNode("Item " + i));

  let j = i; //这里直接使用let

  item.onclick = function (ev) {
     console.log("Item " + j + " is clicked.");
   };
  letlist.appendChild(item);
}


//var和let的作用域
function varTest(){
  var x = 31;
  if(true){
    var x = 71;
    console.log(x);
  }
  console.log(x);
}

function letTest(){
  let x = 31;
  if(true){
    let x = 71;
    console.log(x);
  }
  console.log(x);
}

// varTest();
// letTest();

//暂存死区
function do_something(){
  console.log(foo);
  let foo = 2;
}
// do_something();
