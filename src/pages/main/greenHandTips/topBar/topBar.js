
import React,{Component} from 'react'
import { TopBarWrap } from './styled'
import { Route } from 'react-router-dom'
import { OwnActiveNavLink } from '@utils/styled'

class TopBar extends Component {
    render(){
        return(
            <div>
                <TopBarWrap className = 'border-bottom'>
                    <OwnActiveNavLink tag = 'li' to = '/xbs/newest'>最新</OwnActiveNavLink>
                    <OwnActiveNavLink tag = 'li' to = '/xbs/topic'>话题</OwnActiveNavLink>
                    <OwnActiveNavLink tag = 'li' to = '/xbs/hotspot'>热点</OwnActiveNavLink>
                </TopBarWrap>
            </div>
            
        )
    }
}

export default TopBar