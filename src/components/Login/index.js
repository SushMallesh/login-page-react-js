import './index.css'

const Login = props => {
  const {login} = props

  return (
    <button type="button" className="login-button" onClick={login}>
      Login
    </button>
  )
}



// import './index.css'

// const Login = props => {
//   const {onLogin} = props

//   const onClickLogin = () => {
//     onLogin()
//   }

//   return (
//     <button onClick={onClickLogin} className="button" type="button">
//       Login
//     </button>
//   )
// }
export default Login
