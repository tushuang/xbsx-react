
import React,{Component} from 'react'
import SelectClassify from '@c/commons/selectClassify/selectClassify'
import JobListItem from '@c/commons/jobListItem/jobListItem'
import {JobListWrap,JobList,ToTop} from './styled'
import connect from '@connect'
import http from '@utils/axios'

import {scroll} from '@utils/scroll'

class Job extends Component {
    constructor(props){
        super(props)
        this.state = {
            page:2,  // 控制加载的页数
            job:[]
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.renderItem = this.renderItem.bind(this)
        this.handleToTop = this.handleToTop.bind(this)
        this.toTop = this.toTop.bind(this)
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
        let el = this.refs.scrollJobList
        this.scroll = scroll({
            el:el,
            options:{
            bounce:true,
            probeType:2,
            pullUpLoad:true,
            click:true
            },
            pullingUp:this.handleScroll,
            scrollEnd:this.handleToTop
        })
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
                <ToTop ref={el=>this.el = el}  onClick = {this.toTop} className = 'toTop'>^</ToTop>
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
    toTop(){
        this.scroll.scrollTo(0,0)
        this.el.style.opacity = 0
    }
    handleToTop({x,y}){
        // 使用better-scroll绑定时间时 避免修改state数据 导致重新渲染 来优化性能
        if(y < -236){
            this.el.style.opacity = 1
        }else{
            this.el.style.opacity = 0 
        }
        this.scroll.refresh()
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