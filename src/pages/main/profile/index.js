
import React,{Component,PureComponent} from 'react'
import {ProfileWrap,ProfileHeader,ProfileList} from './styled'
import HeaderIcon from '@as/images/default_headpic.png'
import homeImg from '@as/images/test_wait.png'
import { OwnActiveNavLink } from '@utils/styled'
import { signOut } from '@utils/handleLogin'
import {withRouter} from 'react-router-dom'
import { getInfo } from '@utils/decorator'

@getInfo
class Profile extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            id : ''
        }
        this.signOut = this.signOut.bind(this)
    }
    signOut(){
        this.userInfo.statu = false
        localStorage.setItem('info',JSON.stringify(this.userInfo))
        window.location.href = '/login'
    }
    render(){
        return(
            <ProfileWrap>
                <ProfileHeader>
                    <img className = 'headIcon' src={HeaderIcon} alt="HeaderIcon"/>
                    <span>
                        <img src={homeImg} alt=""/><p>{this.userInfo.id}</p>
                        <p>不畏将来，不念过往</p>
                    </span>
                </ProfileHeader>
                <ProfileList>
                    <li className = 'border-bottom'>我的投递</li>
                    <OwnActiveNavLink tag = 'li' to = '/mycollection' className = 'border-bottom'>我的收藏</OwnActiveNavLink>
                    <li className = 'border-bottom'>我的简历</li>
                    <li className = 'border-bottom'>我的测评</li>
                    <li className = 'border-bottom'>我的小白说</li>
                </ProfileList>
                <ProfileList>
                    <li className = 'border-bottom' onClick = {this.signOut}>退出登录</li>
                </ProfileList>
            </ProfileWrap>
        )
    }
}

export default withRouter(Profile)