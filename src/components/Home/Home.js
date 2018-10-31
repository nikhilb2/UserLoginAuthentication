import React, {Component} from 'react'
import fire from "../Config/config"
class Home extends Component {
  constructor(props) {
    super(props);
    this.logout=this.logout.bind(this)
  }
  logout() {
    fire.auth().signOut()
  }
  render() {
    return(
      <div>
        <div>
          Login Successfull
        </div>
      <div>
      Welcome! <strong>{this.props.email}</strong>
      </div>
      <div><button onClick={this.logout}>Log Out</button></div>
    </div>
    )
  }
}
export default Home
