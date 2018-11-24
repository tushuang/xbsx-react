
import React,{Component} from 'react'
import {ClassifytWrap,ClassifyItem,FirstFloor,SecondFloor} from './styled'
import http from "@utils/axios"
import uuid from 'uuid'

class SelectClassify extends Component {
    constructor(props){
        super(props)
        this.state = {
            type:[
                {id:uuid(),title:'类型',class:'first-floor'},
                {id:uuid(),title:'地点',class:'first-floor'},
                {id:uuid(),title:'日薪',class:'first-floor'},
                {id:uuid(),title:'学历',class:'first-floor'},
                {id:uuid(),title:'......',class:'changeType'},
                {id:uuid(),title:'每周实习天数',class:'second-floor'},
                {id:uuid(),title:'实习月数',class:'second-floor'}
            ],
            changeHeight : true
        }
        this.popups = this.popups.bind(this)
    }
    async componentWillMount(){
        let classify = await http({
            url:'/mock/classify.json'
        })
        console.log(classify)
    }
    render(){
        return(
            <ClassifytWrap className = 'border-bottom jobPage'>
                {/* {this.renderClidren()} */}
                <FirstFloor ref = 'top' className ='border-bottom first-floor' changeHeight = {this.state.changeHeight}>
                    <ClassifyItem className = 'border-right' >类型</ClassifyItem>
                    <ClassifyItem className = 'border-right' >地点</ClassifyItem>
                    <ClassifyItem className = 'border-right' >日薪</ClassifyItem>
                    <ClassifyItem  className = 'border-right'>学历</ClassifyItem>
                    <ClassifyItem  onClick = {this.popups} className = "changeType">......</ClassifyItem>
                </FirstFloor>
                <SecondFloor ref= 'bottom' className = "second-floor" changeDisplay = {this.state.changeHeight}>
                    <ClassifyItem className = 'border-right' changeWidth>每周实习天数</ClassifyItem>
                    <ClassifyItem className = 'border-right' changeWidth>实习月数</ClassifyItem>
                    <ClassifyItem  onClick = {this.popups} className = "changeType">......</ClassifyItem>
                </SecondFloor>
                

            </ClassifytWrap>  
        )
    }
    popups(e){
        this.setState({
            changeHeight:!this.state.changeHeight
        })
        console.log(e.target.parentNode,this.refs.top)
      
    }
    renderClidren(){
        return this.state.type.map(item=>{
            return (<ClassifyItem 
            onClick = {this.popups.bind(null,item.class)}
            key = {item.id}
            changeHeight = {true}
            // ref = {item.class === 'first-floor'?'top':"bottom"}
            ref = {'top'}
            className = {'border-right ' + item.class}
            >
            {item.title} 
            </ClassifyItem>)
        })
    }
}

export default SelectClassify