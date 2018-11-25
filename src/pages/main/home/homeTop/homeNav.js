
import React,{Component} from 'react'
import {HomeNavWrap,SearchImg,TabBar,TabBarItem} from './styled'
import SearchInputImg from '@as/images/search.png'
import uuid from 'uuid'

import FindInternship from '@as/images/index_bar1.png'
import SchoolJob from '@as/images/index_bar2.png'
import SpeendMeeting from '@as/images/index_bar3.png'
import GreenHandTest from '@as/images/index_bar4.png'

import {Consumer} from '@utils/context'

class HomeNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            infos : [
                {id:uuid(),ImgUrl:FindInternship,name:'找实习'},
                {id:uuid(),ImgUrl:SchoolJob,name:'找校招'},
                {id:uuid(),ImgUrl:SpeendMeeting,name:'宣讲会'},
                {id:uuid(),ImgUrl:GreenHandTest,name:'小白测评'}
            ],
            isFixed:this.props.isFixed
        }
        this.renderItem = this.renderItem.bind(this)
        // this.handleScroll = this.handleScroll.bind(this)
    }
    componentWillReceiveProps(props,state){
       
        if(props.isFixed!==this.props.isFixed){
            this.setState({
                isFixed:props.isFixed
            })
        }
    }
    render(){
        return(
            <HomeNavWrap>
                <SearchImg src={SearchInputImg}/>  
                <TabBar className = {this.state.isFixed?'sticky':''}>
                    {this.renderItem()}
                </TabBar>
            </HomeNavWrap>
        )
    }
    renderItem (){
        return this.state.infos.map((item)=>
            <TabBarItem
            key = {item.id}
            >
                <img src = {item.ImgUrl} alt="item.name"/>
                <span>{item.name}</span>
            </TabBarItem>
        )
    }
}

export default HomeNav