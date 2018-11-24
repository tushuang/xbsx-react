
import React,{Component} from 'react'
import { TopBarWrap } from './styled'
import { Route } from 'react-router-dom'
import { OwnActiveNavLink } from '@utils/styled'

class TopBar extends Component {
    render(){
        return(
            <div>
                <TopBarWrap className = 'border-bottom'>
                    <OwnActiveNavLink tag = 'li' to = '/newest'>最新</OwnActiveNavLink>
                    <OwnActiveNavLink tag = 'li' to = '/topic'>话题</OwnActiveNavLink>
                    <OwnActiveNavLink tag = 'li' to = '/hotspot'>热点</OwnActiveNavLink>
                </TopBarWrap>
            </div>
            
        )
    }
}

export default TopBar