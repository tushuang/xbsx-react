
import React,{Component} from 'react'
import HomeTop from './homeTop/homeTop'
import HomeJobList from './homeJobList/homeJobList'
import HomeFooter from './homeFooter/homeFooter'
import {ScrollWrap,HomeBottomWrap} from './styled'
import {scroll} from '@utils/scroll'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'

import {Provider} from '@utils/context'

class HomeContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            isFixed : false
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
    render(){
        return(
            <ScrollWrap  >
                <div>
                    <Provider value = {this.state.isFixed}>
                       <HomeTop /> 
                    </Provider>
                    <HomeBottomWrap changeHeight = {this.state.isFixed}  ref = 'scrollDom'>
                        <div style={{overflow:'hidden'}}>
                            <HomeJobList/>
                            <HomeFooter/>
                        </div>
                    </HomeBottomWrap>
                </div>
            </ScrollWrap>
        )
    }
    componentWillMount(){
        console.log(this.props,'home')
        
    }
    componentDidMount(){
        this.scroll = scroll({
            el:this.refs.scrollDom,
            options:{
                bounce:false,
                probeType:2,
                click:true
            },
            scroll:this.handleScroll
        })  
    }
    handleScroll({x,y}){
        if(y<-50){
            this.setState({
                isFixed:true
            })
        }
        if(y===0){
            this.setState({
                isFixed:false
            })
        }
    }
}

export default HomeContainer