
import React,{Component} from 'react'
import {HeadTab} from './styled'
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
            </div>
        )
    }
}

export default MyCollection