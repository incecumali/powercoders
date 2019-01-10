

document.addEventListener('DOMContentLoaded', function (event) {
    let inputBox= document.getElementById('item');
    document.querySelector('button').addEventListener('click', function (event) {

        console.log(inputBox.value);
        // or
        //console.log(document.getElementById('item').value); chaining

        let liItem= createNewListItem(inputBox.value);
        let ulEl=document.querySelector('ul');
        ulEl.appendChild(liItem);
        inputBox.value='';


    });
    document.querySelector('input').addEventListener('keyup', function (event ) {
        if(event.key==='Enter' ){
            let inputBox=document.getElementById('item');
            let li= createNewListItem(inputBox.value);
            let ulEl=document.querySelector('ul');
            ulEl.appendChild(li);
            // or document.querySelector('ul').appendChild(li);
            console.log(event.key);
            inputBox.value='';

        }



    });

});
function createNewListItem(itemName){
let listItem= document.createElement('li');
let span=document.createElement('span');
span.innerText=itemName;
listItem.appendChild(span);


let deleteButton=document.createElement('button')
   let text= document.createTextNode('delete');
deleteButton.addEventListener('click',function (event) {

listItem.remove();

});

deleteButton.appendChild(text);
listItem.appendChild(deleteButton);


return listItem;
}


