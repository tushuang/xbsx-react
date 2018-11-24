
import React,{Component} from 'react'
import {DiscussItemWrap,DiscussListWrap,ItemBottom,ItemTop} from './styled'

class DiscussList extends Component {
    render(){
        return(
            <DiscussListWrap>
                <DiscussItemWrap className = 'border-bottom'>
                    <ItemTop>
                        <img src="https://xbimg.xiaobaishixi.com/D6/36/D6949B3178C97371BFE35265CD74EC36.png" alt=""/>
                        <span>
                            <p className='head-icon'>流川枫</p>
                            <p className = 'time'>2018-11-23</p>
                        </span>
                    </ItemTop>
                    <ItemBottom>
                        <p className = 'title'>
                            在这里找工作会影响我开法拉利吗?
                        </p>
                        <p className = 'content'>在这里找工作会影响我开法拉利吗?急</p>
                        <span>
                            <p><em> 0 </em> 回答</p>
                            <p><em> 0 </em> 关注</p>
                        </span>
                    </ItemBottom>
                </DiscussItemWrap>
            </DiscussListWrap>
        )
    }
}

export default DiscussList