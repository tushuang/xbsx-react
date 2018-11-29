
import React,{Component} from 'react'
import {ProfileWrap,ProfileHeader,ProfileList} from './styled'
import HeaderIcon from '@as/images/default_headpic.png'
import homeImg from '@as/images/test_wait.png'
import { OwnActiveNavLink } from '@utils/styled'
import { signOut } from '@utils/handleLogin'
import {test} from '@utils/decorator'
import {withRouter} from 'react-router-dom'
import URL from 'url'

@test
class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : ''
        }
        let id = URL.parse(this.props.location.search).query
        console.log(id,'id')
        if(id){
            this.setState({
                id:id.split('=')[1]
            })
        }else{
           window.location.href = '/login'
        }
        this.signOut = this.signOut.bind(this)
    }
    componentWillMount(){
        // let id = URL.parse(this.props.location.search).query
        // console.log(id,'id')
        // if(id){
        //     this.setState({
        //         id:id.split('=')[1]
        //     })
        // }else{
        //    window.location.href = '/login'
        // }
        
    }
    signOut(){
        let res = signOut(this.state.id)
        if(res.code === 200){
            window.location.href = '/login'
        }
        console.log(res)
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