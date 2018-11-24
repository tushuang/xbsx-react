
import React,{Component} from 'react'
import TopBar from './topBar/topBar'
import DiscussList from './discussList/discussList'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import TopicList from './topic/topicList'
import {TransitionWrap} from './styled'
import HotSpot from './hotspot/hotspot'

class GreenHandTips extends Component {
    render(){
        let { location } = this.props
        console.log(location)
        return(
            <div>
                <TopBar/> 
                <TransitionWrap>
                    <Switch location={location}>
                        <Route path = "/" exact component = { DiscussList }/>
                        <Route path = '/topic' component = {TopicList} />
                        <Route path = '/newest' component = {DiscussList} />
                        <Route path = '/hotspot' component = {HotSpot} />
                        <Redirect to = '/newest'/>
                    </Switch>

                    {/* <Route path = "/" exact component = { DiscussList }/>
                    <Route path = "/" exact component = { DiscussList }/>
                    <Route path = '/topic' exact children =  {(props) => <TopicList {...props}/>} />
                    <Route path = '/hotspot' exact children = {(props) => <HotSpot {...props}/>} />
                    <Route path = '/newest' exact children = {(props) => <DiscussList {...props}/>} /> */}
                    
                </TransitionWrap>
            </div>
        )
    }
}

export default withRouter(GreenHandTips)