
import React,{Component,PureComponent} from 'react'
import {DetailTopWrap,Intro} from './styled'

class DetailTop extends PureComponent {
    render(){
        let {position,company_name,maxsalary,minsalary,imgUrl} = this.props
        return(
            <div>
                <DetailTopWrap>
                    <div className = 'topImg'>
                        <img src='https://xbimg.xiaobaishixi.com/static/wap/img/company_pic.png?v=3f98509eefd7b413e04948e724b4b898'/>
                    </div>
                    <Intro>
                        <img className = 'headIcon' src={imgUrl} />
                        <span className = 'title'>
                            <span>
                                <img className = 'icon' src="https://xbimg.xiaobaishixi.com/static/wap/img/win_wap_icon.png?v=79bfdb2039588d52ee92ccff45be8df6" alt=""/>
                                {position}
                            </span>
                            <em>2天前</em>
                        </span> 
                        <a className = 'intro'>‘大牛指导，开发激情，团队年轻，氛围活泼’</a>
                        <ul>
                            <li className = 'border'>{minsalary}-{maxsalary}每天</li>
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