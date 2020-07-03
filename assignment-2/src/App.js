import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Components/Validation'
class App extends Component{

  state ={
    userInput: '',  
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})


  }

  render() { 
    return (
      <div className="App">
        <h1> Assignment 2 </h1>
        <input 
          type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
      </div>
    );
  }
}

export default App;
