import React, {Component} from 'react';


class ItemInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            item:'',
            quantity:'0'
        };
        this.onItemChange =  this.onItemChange.bind(this);
        this.onQuantityChange = this.onQuantityChange.bind(this);

    }
    onItemChange(event){
        this.setState({item:event.target.value},()=> console.log(this.state))
    }
    onQuantityChange(event){
        this.setState({quantity:event.target.value},()=> console.log(this.state))
    }

    render() {
        return (
            <div>
                <labe htmlFor = "item">Enter New Item </labe>
                <input  onChange={this.onQuantityChange} type ="text" id = "quantity" size =" 8" placeholder="quantity"/>
                <input onChange={this.onItemChange} type ="text" id = "item" placeholder="type something  to buy "/>
                <button id="add">Add Item</button>

            </div>
        )
    }
}
export default ItemInput;
