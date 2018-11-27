
import React,{Component} from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import NotFound from '@pages/notFound'
import MainComponent from '@pages/main'
// import GreenHandTips from '@pages/greenHandTips'
import Detail from '@pages/detail'
// import Job from '@pages/job'
import Mycollection from '@pages/myCollection'
import Login from '@pages/login'
import SignIn from '@pages/login/signIn' 
import SignUp from '@pages/login/signUp' 
import  CompanyCollection  from "@pages/myCollection/companyCollection"
import PositionCollection from '@pages/myCollection/positionCollection'
import SchoolInvite from '@pages/myCollection/schoolInvite'
import Speech from '@pages/myCollection/speech'


class RouterComponent extends Component {
    render(){
        return (
            <>
                <Switch>
                    <Route path = '/' exact  component = {MainComponent}/>
                    <Route path = '/home'  component = {MainComponent}/>
                    <Route path = '/detail/:id'  component = {Detail}/>
                    <Route path = '/mycollection' render = {()=>{
                        return (
                            <Mycollection>
                                <Switch>
                                    <Redirect from = '/mycollection' exact to = '/mycollection/position'/>
                                    <Route path = '/mycollection/position' component = {PositionCollection}/>
                                    <Route path = '/mycollection/company' component = {CompanyCollection}/>
                                    <Route path = '/mycollection/school' component = {SchoolInvite}/>
                                    <Route path = '/mycollection/speech' component = {Speech}/>
                                </Switch>
                            </Mycollection>
                        )
                    }}/>
                    <Route path = '/login' render = {({match})=>{
                        return (
                            <Login>
                                <Switch>
                                    <Redirect from = {`${match.path}`} exact to = {`${match.path}/signIn`} />
                                    <Route path = '/login/signIn' component = {SignIn}/>
                                    <Route path = '/login/signUp' component = {SignUp}/>
                                    <Redirect to = "/notFound" />
                                </Switch>
                            </Login>
                        ) 
                    }}/>
                    {/* <Route path = '/greenHandTips'  component = {GreenHandTips}/> */}
                    {/* <Route path = '/job'  component = {Job}/> */}

                    <Route path = '/notFound'  component = {NotFound}/>
                    <Redirect to = "/notFound" />
                </Switch>
            </> 
        )
    }
}

export default RouterComponent