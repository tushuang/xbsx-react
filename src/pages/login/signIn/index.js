
import React,{Component} from 'react'
import {SignInWrap,FormWrap} from './styled'
import uuid from 'uuid'
import { OwnActiveNavLink } from '@utils/styled'
import {changeColor} from '@utils'

import xbPoster from '@as/images/wap-logo1.png'
import QQicon from '@as/images/qq_ico.png'
import Wxicon from '@as/images/wx_ico.png'
import Wbicon from '@as/images/weibo_ico.png'
import Rricon from '@as/images/renren_ico.png'

// 登录
class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            icon:[
                {id:uuid(),img:QQicon,alt:'qq'},
                {id:uuid(),img:Wxicon,alt:'weixin'},
                {id:uuid(),img:Wbicon,alt:'weibo'},
                {id:uuid(),img:Rricon,alt:'renren'}
            ]
        }
        this.renderIcon = this.renderIcon.bind(this)
        this.HandlePhone = this.HandlePhone.bind(this)
    }
    componentDidMount(){
        changeColor(this.el,'phone')
    }
    render(){
        return(
            <SignInWrap>
                <div className = 'top'>
                    <img src={xbPoster}/>
                </div>
                <FormWrap>
                    <input ref = {el => this.el=el} onInput = {this.HandlePhone} className = 'inputText border' type="number" placeholder = '手机号/邮箱'/>
                    <input className = 'inputPassword border' type="password" placeholder = '密码'/>
                    <button className = 'submit'> 立即登录 </button>
                    <span className = 'tips'>
                        <em>忘记密码？</em>
                        <OwnActiveNavLink tag = 'em' to = '/login/signUp'>点我注册</OwnActiveNavLink>
                    </span>
                </FormWrap>
                
                <div className = 'signInType'>
                    <p className = 'title'>其他登录方式</p>
                    <span className = 'icon'>
                    {this.renderIcon()}
                    </span>
                </div>
                <p className = 'foot'>
                    蜀ICP备18005916号-4 ©2018 小白实习
                </p>
            </SignInWrap>
        )
    }
    HandlePhone(e){
        changeColor(e.target,'phone') // utils里判断输入的号码是否符合标准 符合标准改变颜色 否则是白色
    }
    renderIcon(){
        return (
            this.state.icon.map(item=>
                <img 
                key = {item.id}
                src={item.img} 
                alt = {item.alt}/>    
            )
        )
    }
}

export default SignIn