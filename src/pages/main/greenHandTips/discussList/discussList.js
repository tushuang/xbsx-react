
import React,{Component} from 'react'
import {DiscussItemWrap,DiscussListWrap,ItemBottom,ItemTop} from './styled'
import connect from '@connect/c'
import uuid from 'uuid'

class DiscussList extends Component {
    constructor(props){
        super(props)
        this.state = {
            infos : {}
        }
    }
    componentWillMount(){
        this.props.discuss_actions.getDiscuss()
    }
    render(){
        return(
            <DiscussListWrap>
                {this.renderItem()}
            </DiscussListWrap>
        )
    }
    renderItem(){
        let {discuss:infos} = this.props
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