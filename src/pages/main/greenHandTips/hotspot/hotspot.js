
import React,{Component} from 'react'
import {HotSpotList,HotSpotItem} from './styled'

class HotSpot extends Component {
    render(){
        return(
            <HotSpotList>
               <HotSpotItem>
                    <p className ='title'>究竟是什么，让我们渐行渐远</p>
                    <span className = 'content-box'>
                        <img src= 'https://xbimg.xiaobaishixi.com/9B/7E/9BD30550E8F117C474F3E31314135C7E.PNG'/>
                        <span>
                            <p className = 'aside-title'>究竟是什么，让我们渐行渐远</p>
                            <p className = 'info'>
                                <em className = 'time'>2018-11-23</em>
                                <em className = 'total-view'>168956 查看</em>
                                <em className = 'zan'>156赞</em>
                            </p>
                        </span>
                    </span>
                </HotSpotItem>
            </HotSpotList>
            
        )
    }
}

export default HotSpot