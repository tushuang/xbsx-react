
import React,{Component} from 'react'
import {DetailTopWrap,Intro} from './styled'

class DetailTop extends Component {
    render(){
        return(
            <div>
                <DetailTopWrap>
                    <div className = 'topImg'>
                        <img src='https://xbimg.xiaobaishixi.com/static/wap/img/company_pic.png?v=3f98509eefd7b413e04948e724b4b898'/>
                    </div>
                    <Intro>
                        <img className = 'headIcon' src='https://xbimg.xiaobaishixi.com/6B/B6/6B13C1FFF1B07DB3F3BA4A7BB35FDDB6.png'/>
                        <span className = 'title'>
                            <span>
                                <img className = 'icon' src="https://xbimg.xiaobaishixi.com/static/wap/img/win_wap_icon.png?v=79bfdb2039588d52ee92ccff45be8df6" alt=""/>
                                前端开发实习生
                            </span>
                            <em>2天前</em>
                        </span> 
                        <a className = 'intro'>‘大牛指导，开发激情，团队年轻，氛围活泼’</a>
                        <ul>
                            <li className = 'border'>100-137每天</li>
                            <li className = 'border'>武汉-江岸区</li>
                            <li className = 'border'>大专</li>
                        </ul>
                        <ul>
                            <li className = 'border'>4天/周</li>
                            <li className = 'border'>面议</li>
                            <li className = 'border'>实习4个月</li>
                        </ul>
                        <span className = 'site'>
                            <span className = 'left'>
                                <em>Heyooo</em>
                                武汉
                            </span>
                            <span className = 'right'>
                                 
                            </span>
                           
                        </span>
                    </Intro>
                </DetailTopWrap>
            </div>
        )
    }
}

export default DetailTop