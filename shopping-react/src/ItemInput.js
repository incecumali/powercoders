import React, {Component} from 'react';

class ItemInput extends Component {
    render() {
        return (
            <div>
                <labe htmlFor = "item">Enter New Item </labe>
                <input tylpe ="text" id = "quantity" size =" 8" placeholder="quantity"/>
                <input type ="text" id = "item" placeholder="type something  to buy "/>
                <button id="add">Add Item</button>

            </div>
        )
    }
}
export default ItemInput;
