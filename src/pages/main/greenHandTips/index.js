
import React,{Component} from 'react'
import TopBar from './topBar/topBar'
import DiscussList from './discussList/discussList'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import TopicList from './topic/topicList'
import {TransitionWrap} from './styled'
import HotSpot from './hotspot/hotspot'

class GreenHandTips extends Component {
    shouldComponentUpdate(props,state){
        // let {pathname} = this.props.location
        // let _pathname = pathname === '/hotspot'||pathname === '/newest'||pathname === '/topic'
        // console.log(props.location,this.props.location)
        // if(props.location.pathname === '/' || this.props.location.pathname === '/') return false
        // return true
        let { pathname } = props.location
        let { pathname: _pathname } = this.props.location
        console.log('旧：',pathname,"新：",_pathname)
        // 当再main中进行去掉路径 replace('/')的时候，阻止此组件rerender
        if ( pathname === '/' && (_pathname === '/hotspot' || _pathname === '/topic' || _pathname === '/newest')) return false;
        console.log( pathname === '/' && (_pathname === '/hotspot' || _pathname === '/topic' || _pathname === '/newest'))
        return true
    }
    render(){
        let { location } = this.props
        return(
            <div>
                <TopBar/> 
                <TransitionWrap>
                    <Switch location={location}>
                        <Route path = "/" exact component = { DiscussList }/>
                        <Route path = '/topic' component = {TopicList} />
                        <Route path = '/newest' component = {DiscussList} />
                        <Route path = '/hotspot' component = {HotSpot} />
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