
import React,{Component} from 'react'
import {JobListItemWrap} from './styled'
import {OwnActiveNavLink} from '@utils/styled'
import {Link} from 'react-router-dom'

class JobListItem extends Component {
    render(){
       if(JSON.stringify(this.props) === "{}") return ''
        let {company_name, name,city,refresh:time,minsalary,maxsalary,logo_url,uuid } = this.props.info
        let option = {
            id : uuid,
            position: name,
            company_name,
            maxsalary,
            minsalary,
            imgUrl:logo_url
        }
        return(
            <OwnActiveNavLink tag = 'div'  to = {{pathname :`/detail/${uuid}`,state:option}}>
            <JobListItemWrap className = 'border-bottom'>
                <img className = 'company-picture' src = {logo_url} alt=""/>
                <div className = 'list-center'>
                    <p className = 'title'>{name}</p>
                    <p className = 'company-name'>产促会</p>
                    <span className = 'company-site'>{city}</span>
                </div>
                <div className = 'list-right'>
                    <p className = 'date'>{time}</p>
                    <p className = 'salary'>￥{minsalary}-{maxsalary}/天</p>
                </div>
            </JobListItemWrap>
            </OwnActiveNavLink>
        )
    }
}

export default JobListItem