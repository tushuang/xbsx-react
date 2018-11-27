
import React,{Component} from 'react'
import {HeadTab} from './styled'
import {Route,Switch} from 'react-router-dom'
import { OwnActiveNavLink } from '@utils/styled'



class MyCollection extends Component {
    render(){
        return(
            <div>
                <HeadTab>
                    <OwnActiveNavLink activeClassName = 'collectionActive' tag = 'span' to = '/mycollection/position'>
                        职位收藏
                    </OwnActiveNavLink >
                    <OwnActiveNavLink activeClassName = 'collectionActive' tag = 'span' to = '/mycollection/company'>
                        公司收藏
                    </OwnActiveNavLink>
                    <OwnActiveNavLink activeClassName = 'collectionActive' tag = 'span' to = '/mycollection/school'>
                        校招
                    </OwnActiveNavLink>
                    <OwnActiveNavLink activeClassName = 'collectionActive' tag = 'span' to = '/mycollection/speech'>
                        宣讲会
                    </OwnActiveNavLink>
                </HeadTab>
                {this.props.children}
                {/* <Switch>
                    <Route path = '/mycollection/position' component = {PositionCollection}/>
                    <Route path = '/mycollection/company' component = {CompanyCollection}/>
                    <Route path = '/mycollection/school' component = {SchoolInvite}/>
                    <Route path = '/mycollection/speech' component = {Speech}/>
                </Switch> */}
            </div>
        )
    }
}

export default MyCollection