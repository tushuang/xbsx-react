
import React,{Component} from 'react'
import {DetailCenterWrap} from './styled'
class DetailCenter extends Component {
    render(){
        return(
            <div>
                <DetailCenterWrap>
                    
                    <div className = 'content'>
                        <p className = 'title'>职位描述</p>
                        <div>
                            <p><b>工作职责</b></p>
                                1. 负责联盟公众号运营（包括推文撰写、公众号排版等工作）<br/>
                                2. 联盟审核执行工作（企业联盟审核、结算审核、商户号审核等工作）；<br/>
                                3. 负责运营各项目的数据总结工作。
                            <p><b>岗位要求：</b></p>
                                1、新闻学、中文、市场营销、广告等相关专业优先；<br/>
                                3、加分项：擅长文案策划、会PS、爱追剧、爱电影；对淘宝客/云集等推广方式有一定了解<br/>
                                2、有一定的数据处理与分析能力；<br/>
                                4、每周工作5天，最好实习6个月以上。
                        </div>
                        
                    </div>
                    <div className = 'site'>
                        <p className = 'title'>工作职责</p>
                        <span>
                            <i></i>
                            北京市海淀区海淀北一街2号爱奇艺创新大厦
                        </span>
                    </div>
                    <p className = 'loadMore'> 查看更多职位>> </p>
                    <div className = 'xbTips'>
                        <p className = 'title'>小白实习提醒你:</p>
                        <div className = 'content'>
                        在招聘、录用期间要求你支付费用的行为都必须提高警惕。以招聘为名的培训、招生，许诺推荐其他工作机会，甚至提供培训贷款，或者
                        支付体检、服装、押金和培训等费用后才能录用工作的，都属于违法行为，应当提高警惕。一经发现，请立即举报，并向当地公安机关报案。
                        </div>
                    </div>
                </DetailCenterWrap>
            </div>
        )
    }
}

export default DetailCenter