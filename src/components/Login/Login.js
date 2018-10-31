import React, {Component} from 'react'
import "./Login.css"
import fire from "../Config/config"
import SignUp from "../SignUp/SignUp"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:"",
      password:"",
      signUp:false
    }
    this.login=this.login.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.signUp=this.signUp.bind(this)
  }
  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).catch((error)=>{
      console.log(error)})

  }
  signUp() {
    !this.state.signUp?this.setState({signUp:true}):this.setState({signUp:false})
  }
  handleChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    return this.state.signUp
      ? (<div><SignUp /></div>)
      : (<div className="background">
        <form><div><div><label htmlFor="emailid">Email</label></div>
        <input type='email' name='email' placeholder='enter email' id="emailid" onChange={this.handleChange}/></div>
        <div><div><label htmlFor="password">Password</label></div>
        <input type='password' name='password' placeholder='enter password' id="password" onChange={this.handleChange}/></div>
        <div><button onClick={this.login}>Login</button><button onClick={this.signUp}>Sign Up</button></div>
        </form>
      </div>)

  }
}
export default Login
