
import React,{Component} from 'react'
import HomeSwiper from './homeSwiper'
import HomeNav from './homeNav'

class HomeTop extends Component {
    render(){
        return(
            <div>
                <HomeSwiper/>
                <HomeNav/>
            </div>
        )
    }
}

export default HomeTop