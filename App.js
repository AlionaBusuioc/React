import React, { Component } from 'react';
import Button from './Button'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    //JSX
    return (
      <div>
        <h2>Hello</h2>
        <p>Allo<Button/> <Button/></p>
        </div>
    );
  }
}

export default App;
