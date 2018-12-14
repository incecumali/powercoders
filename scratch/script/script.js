
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
//document.getElementById('war').onclick=setClassWarning();
//document.getElementById('ti').onclick=setClassTip();
//document.getElementById('nor').onclick=clearClass();
