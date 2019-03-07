import React, { Component } from 'react';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "OnePunchMan"
    }

    this.inputHandler = this.inputHandler.bind(this)
  }

  inputHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
        <UserInput onChange={this.inputHandler} username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
