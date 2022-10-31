
import './index.css'

const Logout = props => {
  const {logout} = props
  return (
    <button onClick={logout} type="button" className="button">
      Logout
    </button>
  )
}

// import './index.css'

// const Logout = props => {
//   const {onLogout} = props

//   const onClickLogout = () => {
//     onLogout()
//   }
//   return (
//     <button onClick={onClickLogout} type="button" className="button">
//       Logout
//     </button>
//   )
// }

export default Logout
