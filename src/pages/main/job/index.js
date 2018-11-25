
import React,{Component} from 'react'
import SelectClassify from '@c/commons/selectClassify/selectClassify'
import JobListItem from '@c/commons/jobListItem/jobListItem'
import {JobListWrap,JobList} from './styled'
import connect from '@connect'
import BScroll from 'better-scroll'
import http from '@utils/axios'

class Job extends Component {
    constructor(props){
        super(props)
        this.state = {
            page:2,  // 控制加载的页数
            job:[],
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.renderItem = this.renderItem.bind(this)
    }
    // 当props数据变化时及时更新state中的job
    componentWillReceiveProps(props,state){
        if(!props.job.length) return ''  // 如果为空 则不更新
        this.setState(preState=>{
            preState.job = props.job
            return preState
        })
    }
    componentDidMount(){ // 初始化scroll 
        this.scroll = new BScroll(this.refs.scrollJobList,{
            bounce:true,
            probeType:2,
            pullUpLoad:true
        })
        this.scroll.on('pullingUp', this.handleScroll)
    }
    render(){
        return(
            
            <div>
                <SelectClassify />
                <JobListWrap  ref = 'scrollJobList' className = 'changeMargin'>
                    <JobList>
                        {this.renderItem()}
                        <div className = 'loading'>加载中....</div>
                        <p className = 'foot'>关于我们 | 联系我们</p>
                    </JobList>
                </JobListWrap>
            </div>
        )
    }
    renderItem () {
        let job = this.state.job 
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
    async handleScroll(){
        let {page} = this.state
        let res = await http({
            url:`/xb/jobs/search?p=${page}&k=&i=&c=&s=-&x=&d=&m=`
        })
        this.setState((preState)=>{
            preState.job = preState.job.concat(res.msg)
            return preState
        })
        this.scroll.finishPullUp()
        this.scroll.refresh()
        this.state.page++
    }
}
 
export default connect(Job,["job"])