
import React,{Component} from 'react'
import {ClassifytWrap,ClassifyItem,FirstFloor,SecondFloor,SelectWrap} from './styled'
import http from "@utils/axios"
import AsideSelect from './asideSelect'
import { relative } from 'path';

class SelectClassify extends Component {
    constructor(props){
        super(props)
        this.state = {
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
            <SelectWrap>
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
            <AsideSelect/>
            </SelectWrap>
        )
    }
    popups(e){
        this.setState({
            changeHeight:!this.state.changeHeight
        })
        console.log(e.target.parentNode,this.refs.top)
      
    }
}

export default SelectClassify