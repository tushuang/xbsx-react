
import React,{Component} from 'react'
import {TopicListWrap, TopicItem} from './styled'
import http from '@utils/axios'
import uuid from 'uuid'
import {LoadingMore} from '@libs/styled'

class TopicList extends Component {
    constructor(props){
        super(props)
        this.state = {
            infos : {}
        }
        this.loadMore = this.loadMore.bind(this)
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
               <LoadingMore onClick = {this.loadMore}>查看更多</LoadingMore>
            </TopicListWrap>
            
        )
    }
    async loadMore(){
        let res = await http('/mock/topic.json')

        this.setState({
            infos:this.state.infos.concat(res.classes)
        })
    }
    renderItem(){
        let {infos} = this.state
        if(!infos.length) return ''
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