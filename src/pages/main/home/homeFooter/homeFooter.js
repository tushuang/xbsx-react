
import React,{Component} from 'react'
import {FooterWrap} from './styled'

class HomeFooter extends Component {
    render(){
        return(
            <FooterWrap>
                <div className = 'to-job-list'>
                    前往职位列表，查看更多职位>>
                </div>
                <div className = 'foot'>
                    <p>关于我们 | 联系我们</p>
                    <p>联系方式:028-65072615</p>
                    <p>客服邮箱:service@xiaobaishixi.com</p>
                    <p>商务合作:business@xiaobaishixi.com</p>
                </div>
            </FooterWrap>
        )
    }
}

export default HomeFooter