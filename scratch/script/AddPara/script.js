
document.addEventListener('DOMContentLoaded', function(event)
{
    console.log("I am running ");
    let el = document.getElementById('add');
    el.addEventListener('click', function (event) {
   addEl();
       // let elBody=document.appendChild('')
    })
    let li=document.getElementById('addlist');
    li.addEventListener('click', function(event){
        addLi();
    })


});

function addEl(){
    console.log("I am still working");
    let elP=document.createElement('p');
    let pContent=document.createTextNode('Here id added text');
    elP.appendChild(pContent);
    let bo= document.getElementById('body');
    bo.appendChild(elP);

}
function addLi(){
    console.log("li function is working ");

    let Ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let em1 = document.createElement('em');

    let cont1 = document.createTextNode('here is list item one');
    let cont2 = document.createTextNode('here is list item 2');
    let cont3 = document.createTextNode('here is the list item three');
    let contem = document.createTextNode(('here is a emp text'));

    li1.appendChild(cont1);
    li2.appendChild(cont2);
    li3.appendChild(cont3);
    em1.appendChild(contem);
    li2.appendChild(em1);
    Ul.appendChild(li1);
    Ul.appendChild(li2);
    Ul.appendChild(li3);

    let bod = document.getElementById('body');
    bod.appendChild(Ul);
}