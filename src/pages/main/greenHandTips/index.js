
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
        console.log('旧：',pathname,"新：",_pathname)
        console.log(( pathname.startsWith('/home')   && _pathname.startsWith('/home') && _pathname !== '/home') )
        // 当再main中进行去掉路径 replace('/')的时候，阻止此组件rerender
        // if ( pathname.startsWith('/home')  && (_pathname === '/home/hotspot' || _pathname === '/home/topic' || _pathname === '/home/newest')) 
        if ( pathname.startsWith('/home')   && _pathname.startsWith('/home') && _pathname !== '/home') 
        return false
        return true
    }
    render(){
        let { location } = this.props
        return(
            <div>
                <TopBar/> 
                <TransitionWrap>
                    <Switch location={location}>
                        {/* <Route path = "/" exact component = { DiscussList }/> */}
                        <Route path = '/home/topic' component = {TopicList} />
                        <Route path = '/home/newest' component = {DiscussList} />
                        <Route path = '/home/hotspot' component = {HotSpot} />
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