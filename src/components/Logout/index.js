// Write your code here
import './index.css'

const Logout = props => {
  const {onLogout} = props

  const onClickLogout = () => {
    onLogout()
  }
  return (
    <button onClick={onClickLogout} type="button" className="button">
      Logout
    </button>
  )
}

export default Logout
