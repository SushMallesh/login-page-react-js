import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Message extends Component {
  state = {isLoggedIn: false}

  onLogin = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  onLogout = () => {
    this.setState(prevState => ({isLoggedIn: prevState.isLoggedOut}))
  }

  message = () => {
    const {isLoggedIn} = this.state
    return isLoggedIn ? 'Welcome User' : 'Please Login'
  }

  render() {
    const {isLoggedIn} = this.state
    const message = this.message()
    return (
      <div className="message-container">
        <h1 className="message">{message}</h1>
        {!isLoggedIn && <Login onLogin={this.onLogin} />}
        {isLoggedIn && <Logout onLogout={this.onLogout} />}
      </div>
    )
  }
}

export default Message
