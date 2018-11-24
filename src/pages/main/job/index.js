
import React,{Component} from 'react'
import SelectClassify from '@c/commons/selectClassify/selectClassify'
import JobListItem from '@c/commons/jobListItem/jobListItem'
import {JobListWrap,JobList} from '@libs/styled'
import connect from '@connect'

class Job extends Component {
    render(){
        return(
            <div>
                <SelectClassify/>
                <JobListWrap>
                    <JobList>
                        {this.renderItem()}
                    </JobList>
                </JobListWrap>
            </div>
        )
    }
    renderItem () {
        let { job } = this.props
        if(!job.length) return ''
        return job.map(item=>{
            return (
                <JobListItem
                key = { item.uuid }
                info = { item }
                />
            )
        })
    }
}
 
export default connect(Job,["job"])