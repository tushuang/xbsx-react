
import React,{Component} from 'react'
import { FormWrap,SignUpWrap } from './styled'
import { OwnActiveNavLink } from '@utils/styled'
import {changeColor,HandlePhone,HandlePassword} from '@utils'
import http from '@utils/axios'
import { signUp } from '@utils/handleLogin'
import uuid from 'uuid'

// 注册
class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            bg : 'https://wap.xiaobaishixi.com/validatecode?w=250&h=100&v=0.841901426861057'
        }
        this.HandlePhone = this.HandlePhone.bind(this)
        this.HandlePassword = this.HandlePassword.bind(this)
        this.changeBg = this.changeBg.bind(this)
        this.signUp = this.signUp.bind(this)
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
                
                <FormWrap onSubmit = {this.signUp}>
                    <input defaultValue = '13874715311' ref = {el=>this.el=el} onInput = {this.HandlePhone} className = 'inputText border' type="number" placeholder = '手机号/邮箱'/>
                    <input ref = {password => this.password = password} onInput = {this.HandlePassword} className = 'inputPassword border' type="password" placeholder = '密码'/>
                    {/* <div className = 'verify'>
                        <input type="text"  ref = 'verifyCode' placeholder = '请输入图形验证码'/> 
                        <span className = 'num'>
                            <img onClick = {this.changeBg}  src = {this.state.bg} alt=""/>
                        </span>
                    </div>
                    <div className = 'verify'>
                        <input type="text" placeholder = '请输入验证码'/> <span className = 'getNum'>获取验证码</span>
                    </div>  */}
                    <button  className = 'signUpBtn'> 注册 </button>
                </FormWrap>
            </SignUpWrap>
        )
    }
    changeBg(){
        let date = new Date()
        this.setState({
            bg:'/api/validatecode?w=250&h=100&v=' + date
        })
    }
    async signUp(e){
        e.preventDefault()
        // let code = this.refs.verifyCode.value
        // let phoneNum = this.el.value
        // let res = await http({
        //     url:'/api/telrandcode?tel='+ phoneNum +'&token=' + code
        // })
        // console.log(res)
        if(!(HandlePhone(this.el.value) && HandlePassword(this.password.value))) {
            console.log('请输入正确的手机号和密码',HandlePhone(this.el.value) , HandlePassword(this.password.value))
        }else{
            let phoneNum = this.el.value
            let password = this.password.value
            let id = uuid()
            let obj = {
                id,
                phoneNum,
                password,
                statu:true
            }
            let res = signUp(obj)
            if(res.code === 200) {
                window.location.href = '/mine?id=' + id
            }
        }
        
    }
    HandlePhone(e){
        changeColor(e.target,'phone') // utils里判断输入的号码是否符合标准 符合标准改变颜色 否则是白色
    }
    HandlePassword(e){
        changeColor(e.target,'password') // utils里判断输入的号码是否符合标准 符合标准改变颜色 否则是白色
    }
}

export default SignUp