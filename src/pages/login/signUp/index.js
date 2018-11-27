
import React,{Component} from 'react'
import { FormWrap,SignUpWrap } from './styled'
import { OwnActiveNavLink } from '@utils/styled'
import {changeColor} from '@utils'

// 注册
class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.HandlePhone = this.HandlePhone.bind(this)
        this.HandlePassword = this.HandlePassword.bind(this)
    }
    componentDidMount(){
        changeColor(this.el,'phone')
        changeColor(this.password,'password')
    }
    render(){
        return(
            <SignUpWrap>
                <span>
                    <em className = 'title'>欢迎注册小白实习</em>
                    <OwnActiveNavLink tag = 'em' to = '/login/signIn' className = 'toSignIn'>&nbsp;登录</OwnActiveNavLink>
                </span>
                
                <FormWrap>
                    <input ref = {el=>this.el=el} onInput = {this.HandlePhone} className = 'inputText border' type="number" placeholder = '手机号/邮箱'/>
                    <input ref = {password => this.password = password} onInput = {this.HandlePassword} className = 'inputPassword border' type="password" placeholder = '密码'/>
                    <div className = 'verify'>
                        <input type="text" placeholder = '请输入图形验证码'/> <span className = 'num'></span>
                    </div>
                    <div className = 'verify'>
                        <input type="text" placeholder = '请输入验证码'/> <span className = 'getNum'>获取验证码</span>
                    </div> 
                    <button className = 'signUpBtn'> 注册 </button>
                </FormWrap>
            </SignUpWrap>
        )
    }
    HandlePhone(e){
        changeColor(e.target,'phone') // utils里判断输入的号码是否符合标准 符合标准改变颜色 否则是白色
    }
    HandlePassword(e){
        changeColor(e.target,'password') // utils里判断输入的号码是否符合标准 符合标准改变颜色 否则是白色
    }
}

export default SignUp