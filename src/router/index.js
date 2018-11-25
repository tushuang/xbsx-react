
import React,{Component} from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import NotFound from '@pages/notFound'
import MainComponent from '@pages/main'
// import GreenHandTips from '@pages/greenHandTips'
import Detail from '@pages/detail'
// import Job from '@pages/job'
import Mycollection from '@pages/myCollection'

class RouterComponent extends Component {
    render(){
        return (
            <>
                <Switch>
                    {/* <Route path = '/' exact  component = {MainComponent}/> */}
                    <Route path = '/home'  component = {MainComponent}/>
                    <Route path = '/detail'  component = {Detail}/>
                    <Route path = '/mycollection' component = {Mycollection}/>
                    {/* <Route path = '/greenHandTips'  component = {GreenHandTips}/> */}
                    {/* <Route path = '/job'  component = {Job}/> */}
                    <Route path = '/notFound'  component = {NotFound}/>
                    {/* <Redirect to = "/notFound" /> */}
                </Switch>
            </> 
        )
    }
}

export default RouterComponent