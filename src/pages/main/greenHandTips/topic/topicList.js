
import React,{Component} from 'react'
import {TopicListWrap, TopicItem} from './styled'
import http from '@utils/axios'
import uuid from 'uuid'

class TopicList extends Component {
    constructor(props){
        super(props)
        this.state = {
            infos : {}
        }
    }
    async componentWillMount(){
        let res = await http({url:'/mock/topic.json'})
        this.setState({
            infos:res.classes
        })
    }
    render(){
        return(
            <TopicListWrap>
               {this.renderItem()}
            </TopicListWrap>
            
        )
    }
    renderItem(){
        let {infos} = this.state
        if(!infos.length) return ''
        console.log(infos,'hiehei')
        return infos.map((item)=>{
            return (
                <TopicItem
                key = {uuid()}
                >
                   <img src={item.img} alt=""/>
                   <span>
                       <p className = 'title'>{item.title}</p>
                       <p className = 'theme'>{item.theme}</p>
                       <p className = 'q-s'>{item.question}个问题 {item.answer}个回答</p>
                   </span>
               </TopicItem>
            )
        })
    }

}

export default TopicList