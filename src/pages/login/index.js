
import React,{Component} from 'react'
import SignIn from '@pages/login/signIn' 
import SignUp from '@pages/login/signUp' 

class Login extends Component {
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Login