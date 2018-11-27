
import React,{Component} from 'react'
import { TopBarWrap } from './styled'
import { Route } from 'react-router-dom'
import { OwnActiveNavLink } from '@utils/styled'

class TopBar extends Component {
    render(){
        return(
            <div>
                <TopBarWrap className = 'border-bottom'>
                    <OwnActiveNavLink tag = 'li' to = '/home/newest'>最新</OwnActiveNavLink>
                    <OwnActiveNavLink tag = 'li' to = '/home/topic'>话题</OwnActiveNavLink>
                    <OwnActiveNavLink tag = 'li' to = '/home/hotspot'>热点</OwnActiveNavLink>
                </TopBarWrap>
            </div>
            
        )
    }
}

export default TopBar