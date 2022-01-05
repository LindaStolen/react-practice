import React, { Component } from 'react'

// function UserLogin (){
//     return <h1 style={user}>Welcome Back!</h1>
// }

// function GuestLogin (){
//     return <h1 style={guest}>Please Sign up.</h1>
// }

// function Login(props) {
//     const isLoggedIn = props.isLoggedIn
//     if(isLoggedIn){
//         return <UserLogin/>
//     }else {
//         return <GuestLogin />
//     }
// }
//上面等於下面的寫法
// export class Login extends Component {
//     render() {
//         const isLoggedIn = this.props.isLoggedIn
//         if(isLoggedIn){
//             return <UserLogin />
//         }else {
//             return <GuestLogin />
//         }
//     }
// }
//////////////////////////////////////////////////////
function LoginButton(props) {
    return (
      <button style={guestBtn} onClick={props.onClick}>
        Login
      </button>
    );
  }
  
function LogoutButton(props) {
return (
    <button style={userBtn} onClick={props.onClick}>
    Logout
    </button>
);
}
export class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.onClick.bind(this)
    }
    onClick(){
        this.setState(prev => ({
            isLoggedIn: !prev.isLoggedIn,
        }))
        console.log(456)
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        if(isLoggedIn){
            return <LogoutButton isLoggedIn={this.state.isLoggedIn} onClick={this.handleClick} />
        }else {
            return <LoginButton isLoggedIn={this.state.isLoggedIn} onClick={this.handleClick}/>
        }

        // 下面等於上面寫法
        // return(
        //     <div>
        //         {isLoggedIn ? <LogoutButton isLoggedIn={this.state.isLoggedIn} onClick={this.handleClick} /> : <LoginButton isLoggedIn={this.state.isLoggedIn} onClick={this.handleClick}/>}
        //     </div>
        // )
    }
}


const user = {
    backgroundColor: "#eee",
    fontSize: "3rem",
    margin: "15px 0"
}
const guest = {
    backgroundColor: "black",
    color: "yellow",
    fontSize: "3rem",
    margin: "15px 0"
}
const userBtn = {
    width: "200px",
    borderRadius: "15px",
    backgroundColor: "#afd",
    fontSize: "3rem",
    margin: "15px 0"
}
const guestBtn = {
    width: "200px",
    borderRadius: "15px",
    backgroundColor: "black",
    color: "yellow",
    fontSize: "3rem",
    margin: "15px 0"
}

export default Login
