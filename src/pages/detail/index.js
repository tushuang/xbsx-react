
import React,{Component} from 'react'
import {Handle} from './styled'
import DetailTop from './detailTop'
import DetailCenter from './detailCenter'
import {withRouter} from 'react-router-dom'

import StarImg from '@as/images/star.png' 
import StaredImg from '@as/images/stared.png' 

class JobDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgSrc : true
        }
        this.handleCollect = this.handleCollect.bind(this)
    }
    render(){
        let { id } = this.props.match.params
        console.log(id)
        return(
            <div>
                <DetailTop/>
                <DetailCenter/>
                <Handle>
                    <span className = 'collection'>
                        <img src={this.state.imgSrc?StarImg:StaredImg} alt=""/>
                        <em onClick = {this.handleCollect}>{this.state.imgSrc?'收藏':'已收藏'}</em>
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
        this.setState({
            imgSrc:!this.state.imgSrc
        })
    }
    
}

export default withRouter(JobDetail)