import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemInput from './ItemInput';
import  ClearList from './ClearList';
import ShoppingList from './ShoppingList'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:['First Item', 'Second Item', 'Third Item'],
    };

  }
  render() {
    return (
      <>
        <ItemInput/>
        <ClearList/>
        <ShoppingList items ={this.state.items}/>
      </>
    );
  }
}

export default App;
