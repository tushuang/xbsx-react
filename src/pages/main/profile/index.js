
import React,{Component,PureComponent} from 'react'
import {ProfileWrap,ProfileHeader,ProfileList} from './styled'
import HeaderIcon from '@as/images/default_headpic.png'
import homeImg from '@as/images/test_wait.png'
import { OwnActiveNavLink } from '@utils/styled'
import { signOut } from '@utils/handleLogin'
import {test} from '@utils/decorator'
import {withRouter} from 'react-router-dom'
import URL from 'url'

@test
class Profile extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            id : ''
        }
        this.signOut = this.signOut.bind(this)
    }
    signOut(){
        let _userInfo = JSON.parse(localStorage.getItem('info')) 
        _userInfo.statu = false
        localStorage.setItem('info',JSON.stringify(_userInfo))
        window.location.href = '/login'
    }
    render(){
        return(
            <ProfileWrap>
                <ProfileHeader>
                    <img src={HeaderIcon} alt="HeaderIcon"/>
                    <span>
                        <img src={homeImg} alt=""/>
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