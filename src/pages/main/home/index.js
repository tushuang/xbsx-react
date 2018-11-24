
import React,{Component} from 'react'
import HomeTop from './homeTop/homeTop'
import HomeJobList from './homeJobList/homeJobList'
import HomeFooter from './homeFooter/homeFooter'

class HomeContainer extends Component {
    render(){
        return(
            <div>
                <HomeTop/>
                <HomeJobList/>
                <HomeFooter/>
            </div>
        )
    }
}

export default HomeContainer