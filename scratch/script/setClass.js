
console.log('this is the first line!');
function greet(name) {
  console.log('hello , '+ name);
}


function setClass( className){
  console.log('setClass is running ');

  let el= document.getElementById("mypara").className=className;
  //el.className=className; //by chaining i moved in above line
}
console.log("this is the after setClass is defined")


document.addEventListener('DOMContentLoaded', function(event){
  console.log("dom content has fired");

  let makeWarning=document.getElementById("make-warning");
  makeWarning.addEventListener('click', function(event){
    console.log('click listne ris fired');
    setClass( 'warning');
  });
  let makeTip=document.getElementById('make-tip');
  makeTip.addEventListener('click', function(event){
    setClass('tip');
  })
let makeNormal=document.getElementById('normal');
  makeNormal.addEventListener('click', function (event) {
    setClass('');

  });

});

console.log("javascript is loaded")

/*
function setClass(event,  type){
  let el=document.getElementById('mypara');
  el.className=type;
}

let makeWarning = document.getElementById('make-warning');
makeWarning.addEventListener('click', function (event){setClass(event,'warning');
});
*/

//setClassTip();
//setClassWarning();
//document.getElementById('war').onclick=setClass(event, 'warning');
//document.getElementById('ti').onclick=setClassTip;
//document.getElementById('nor').onclick=clearClass;
