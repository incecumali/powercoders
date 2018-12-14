
console.log('my code is running!');
function greet(name){
console.log('hello',+name);
}

function setClassTip(){
  let el = document.getElementById('mypara');
  el.className='tip';
}

function setClassTip(event){
  let el=document.getElementById('mypara');
  el.className='tip';

}

function setClassWarning(event){
  let el= document.getElementById('mypara');
  el.className='warning';

}

function clearClass(event){
  let el = document.getElementById('mypara');
  el.className='';

}

//setClassTip();
//setClassWarning();
document.getElementById('war').onmousemove=setClassWarning;
document.getElementById('ti').onmousemove=setClassTip;
document.getElementById('nor').onmousemove=clearClass;
