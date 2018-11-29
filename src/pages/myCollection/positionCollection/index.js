
import React,{Component} from 'react'
import {PositionWrap,PositionItem} from './styled'
import uuid from 'uuid'
import { OwnActiveNavLink } from '@utils/styled'

class PositionCollection extends Component {
    render(){
        return(
            <PositionWrap>
                <ul>
                    {this.renderItem()}
                </ul>
            </PositionWrap>
        )
    }
    renderItem(){
        let allCollection = JSON.parse(localStorage.getItem('collection'))
        if(!allCollection.length) return false
        return allCollection.map((item)=>{
            return (
                <PositionItem tag = 'li' 
                to = {{pathname:`/detail/${item.id}`,state:item}} 
                key = {item.id} 
                className = 'border-bottom'>
                    <span className = 'left'>
                        <p className = 'position'>{item.position}</p>
                        <p className = 'company'>{item.company_name}</p>
                    </span>
                    <span className = 'right'>
                        <p className = 'salsry'>{item.minsalary}-{item.maxsalary}元/天</p>
                    </span>
                </PositionItem>
            )
        })
    }
}

export default PositionCollection