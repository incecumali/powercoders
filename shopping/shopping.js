

document.addEventListener('DOMContentLoaded', function (event) {
    let inputBox= document.getElementById('item');
    document.querySelector('button').addEventListener('click', function (event) {

        console.log(inputBox.value);
        // or
        //console.log(document.getElementById('item').value); chaining

    });

})
