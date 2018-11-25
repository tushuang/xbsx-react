
import React,{Component} from 'react'
import {DiscussItemWrap,DiscussListWrap,ItemBottom,ItemTop} from './styled'
import connect from '@connect/c'
import uuid from 'uuid'
import {LoadingMore} from '@libs/styled'

class DiscussList extends Component {
    constructor(props){
        super(props)
        this.state = {
            infos : []
        }
        this.loadMore = this.loadMore.bind(this)
    }
    componentWillMount(){
        this.props.discuss_actions.getDiscuss()
    }
    componentWillReceiveProps(props,state){
        if(!props.discuss.length) return ''
        this.setState({
            infos:props.discuss
        })
    }
    render(){
        return(
            <DiscussListWrap>
                {this.renderItem()}
                <LoadingMore onClick = {this.loadMore}>查看更多</LoadingMore>
            </DiscussListWrap>
        )
    }
    async loadMore(){
       this.setState({
           infos: this.state.infos.concat(this.state.infos)
       })
    }
    renderItem(){
        // let {discuss:infos} = this.props
        let {infos} = this.state
        if(!infos.length) return ''
        return (
            infos.map((item)=>{
                return (
                    <DiscussItemWrap className = 'border-bottom'
                    key = {uuid()}
                    >
                    <ItemTop>
                        <img src={item.img} alt=""/>
                        <span>
                            <p className='head-icon'>{item.nam}</p>
                            <p className = 'time'>{item.time}</p>
                        </span>
                    </ItemTop>
                    <ItemBottom>
                        <p className = 'title'>
                            {item.title}
                        </p>
                        <p className = 'content'>{item.secondTitle}</p>
                        <span>
                            <p><em> {item.answer} </em> 回答</p>
                            <p><em> {item.question} </em> 关注</p>
                        </span>
                    </ItemBottom>
                </DiscussItemWrap>
                )
            })
        )
    }
}

export default connect(DiscussList,['discuss'])