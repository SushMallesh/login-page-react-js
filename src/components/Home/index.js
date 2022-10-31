import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="app-container">
        <div className="message-container">
          <Message isLoggedIn={isLoggedIn} />
          {!isLoggedIn && <Login login={this.onClickButton} />}
          {isLoggedIn && <Logout logout={this.onClickButton} />}
        </div>
      </div>
    )
  }
}



// import Message from '../Message'
// import './index.css'

// const Home = () => (
//   <div className="app-container">
//     <Message />
//   </div>
// )

export default Home
