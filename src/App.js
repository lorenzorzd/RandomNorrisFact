import logo from './chucknorris_logo.png';
import './index.css';
import React, { Component } from 'react';
import ReactDOM from 'react';

class App extends Component{
      constructor() {
        super()
        this.state = {
          fact: ''
        }
      }

    render(){
    return(
    <div className="App">
      <div className='header'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click Button to get Random chuck Facts
        </p>
        <button className='button-5' onClick={a => {
          fetch('https://api.chucknorris.io/jokes/random')
          .then(response => response.json())
          .then(response => {this.setState({fact: response.value})})
        }}>
          Click For Fact
        </button>      

        <p>Fact is: {this.state.fact}</p>
              
      </div>
    </div>
    )}
}

export default App;
