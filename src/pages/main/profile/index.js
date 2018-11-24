
import React,{Component} from 'react'
import {ProfileWrap,ProfileHeader,ProfileList} from './styled'
import HeaderIcon from '@as/images/default_headpic.png'
import homeImg from '@as/images/test_wait.png'

class Profile extends Component {
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
                    <li className = 'border-bottom'>我的简历</li>
                    <li className = 'border-bottom'>我的简历</li>
                    <li className = 'border-bottom'>我的简历</li>
                    <li className = 'border-bottom'>我的简历</li>
                </ProfileList>
                <ProfileList>
                    <li className = 'border-bottom'>退出登录</li>
                </ProfileList>
            </ProfileWrap>
        )
    }
}

export default Profile