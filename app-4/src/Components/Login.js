import React, { Component } from "react";

class Login extends Component{
    constructor(){
        super()
        this.state ={
            username: '',
            password: ''
        }
    }
    nameUpdate(val){
        this.setState({username: val})
    }
    passwordUpdate(val){
        this.setState({password: val})
    }
    loggedIn(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    render(){
        return(
            
            <div>
                <input className='username' onChange={(e)=> this.nameUpdate(e.target.value)}/>
                <input className='password' onChange={(e)=> this.passwordUpdate(e.target.value)}/>
                <button onClick={()=> this.loggedIn()}>Login</button>
            </div>
            

        )
    }
}
export default Login