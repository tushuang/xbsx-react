
import React,{Component} from 'react'
import {Handle} from './styled'
import DetailTop from './detailTop'
import DetailCenter from './detailCenter'
import {withRouter} from 'react-router-dom'
import connect from '@connect/c'

import StarImg from '@as/images/star.png' 
import StaredImg from '@as/images/stared.png' 
import { getInfo } from '@utils/decorator'

@getInfo
class JobDetail extends Component {
    constructor(props){
        super(props)
         
        this.state = {
            isCollect : true,
            id : this.props.match.params.id
        }
        this.handleCollect = this.handleCollect.bind(this)
    }
    componentDidMount(){
        if(!this.userInfo.statu){
             return false 
        }else{
             let isCollect = this.collection
            if(isCollect && isCollect[this.userInfo.id]) {
                let _target = isCollect[this.userInfo.id].filter((item)=>{
                    return item.id === this.state.id
                })
                this.setState({
                    isCollect: _target.length === 0? true:false
                })
            }
        }

       
    }
    render(){
        let {state} = this.props.location
        return(
            <div>
                <DetailTop {...state}/>
                <DetailCenter/>
                <Handle>
                    <span className = 'collection'>
                        <img src = {this.state.isCollect ? StarImg : StaredImg} alt=""/>
                        <em onClick = {this.handleCollect}>{this.state.isCollect ? '收藏' : '已收藏'}</em>
                    </span>
                    <span className = 'compile'>
                        <img src="https://xbimg.xiaobaishixi.com/static/wap/img/edit-resume.png?v=aacb61dea340c590d83e80f80ac6cde6" alt=""/>
                        <em>编辑简历</em>
                    </span>
                    <span className = 'send'>
                       <p>马上投递</p>
                    </span>
                </Handle>
            </div>
        )
    }
    handleCollect(){
        let info = this.userInfo
        if(info.statu === false) {
            window.location.href = '/login'
            return false
        }
        let {isCollect} = this.state
         this.setState({
            isCollect: !isCollect
        })
        let {state} = this.props.location
        // 点击收藏后提交状态 存入state中
        setTimeout(()=>{
            state.isCollect = isCollect
            if(isCollect){
                this.props.collection_actions.addCollection(this.userInfo,state)
            }else{
                this.props.collection_actions.deleteCollection(this.userInfo.id,state.id)
            }
        },0)
        
    }
    
}

export default withRouter(connect(JobDetail,['collection']))