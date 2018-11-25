
import React,{Component} from 'react'
import HomeSwiper from './homeSwiper'
import HomeNav from './homeNav'

import {Consumer} from '@utils/context'
import {HomeWrap} from './styled'

class HomeTop extends Component {
    render(){
        return(   
            <Consumer>
                {value => {
                    return (
                        <HomeWrap>
                        <HomeSwiper isVisible = {value}/>  
                        <HomeNav isFixed = {value}/>
                        </HomeWrap>
                    )
                }}
            </Consumer>
        )
    }
}

export default HomeTop