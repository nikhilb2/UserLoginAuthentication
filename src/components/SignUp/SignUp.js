import React, {Component} from 'react'
import "./SignUp.css"
import fire from "../Config/config"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:"",
      password:"",
      ConfirmPassword:""
    }
    this.signUp=this.signUp.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }
  signUp(e) {
    e.preventDefault()
    this.state.password===this.state.ConfirmPassword?
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch((error) =>
  console.log(error)):alert("Password does not match");
  }
  handleChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    return(
      <div className="background">
        <form><div><div><label htmlFor="emailid">Email</label></div>
        <input type='email' name='email' placeholder='enter email' id="emailid" onChange={this.handleChange}/></div>
        <div><div><label htmlFor="password">Password</label></div>
        <input type='password' name='password' placeholder='enter password' id="password" onChange={this.handleChange}/></div>
        <div><div><label htmlFor="password">Confirm Password</label></div>
        <input type='password' name='ConfirmPassword' placeholder='enter password again' id="Confirm password" onChange={this.handleChange}/></div>
        <div><button onClick={this.signUp}>Sign Up</button></div>
        </form>
      </div>
    )
  }
}
export default Login
