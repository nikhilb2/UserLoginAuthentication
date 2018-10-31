import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import fire from './components/Config/config'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
class App extends Component {
  constructor(props) {
    super(props) ;
    this.state={
      user:{}
    }
  }
  componentDidMount() {
    this.authListener()
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user})
      } else {
        this.setState({user:null})
      }
    })
  }
  render() {
    console.log(this.state.user)
    this.state.user?console.log(this.state.user.email):console.log("not logged in")
    return (
      <div className="App">
        {this.state.user?(<div><header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div><Home email={this.state.user.email} /></div>
        </header></div>):<div><Login /></div>}
      </div>
    );
  }
}

export default App;
