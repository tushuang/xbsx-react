
import React,{Component} from 'react'
import TopBar from './topBar/topBar'
import DiscussList from './discussList/discussList'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import TopicList from './topic/topicList'
import {TransitionWrap} from './styled'
import HotSpot from './hotspot/hotspot'

class GreenHandTips extends Component {
    shouldComponentUpdate(props,state){
        let { pathname } = props.location
        let { pathname: _pathname } = this.props.location
        if ( pathname === '/home' && (_pathname === '/xbs/topic' || _pathname === '/xbs/newest' || _pathname === '/xbs/hotspot'))
        return false
        return true
    }
    render(){
        let { location } = this.props
        return(
            <div>
                <TopBar/> 
                    <Route path = "/xbs" exact render = {() => {
                        return <Redirect to = "/xbs/newest" />
                    }} />
                    <Route path = '/xbs/topic' exact component = {TopicList} />
                    <Route path = '/xbs/newest' exact component = {DiscussList} />
                    <Route path = '/xbs/hotspot'exact component = {HotSpot} />
            </div>
        )
    }
}

export default withRouter(GreenHandTips)