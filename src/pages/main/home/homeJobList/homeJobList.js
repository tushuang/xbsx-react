
import React,{Component} from 'react'
import JobListItem from '@c/commons/jobListItem/jobListItem'
import connect from '@connect/c'

import {JobListWrap,JobList} from './styled'

class HomeJobList extends Component {
    componentDidMount(){
        this.props.job_actions.getJobList()
    }
    render(){
        return(
            <JobListWrap>
                <JobList>
                    {this.renderItem()}
                </JobList>
            </JobListWrap>
        )
    }
    renderItem(){
        let { job } = this.props
        if(!job.length) return ''
        return job.map(item=>{
            return (
                <JobListItem
                key = { item.uuid }
                info = {item}
                />
            )
        })
    }
}

export default connect(HomeJobList,['job'])