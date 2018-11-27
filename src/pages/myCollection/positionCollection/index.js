
import React,{Component} from 'react'
import {PositionWrap,PositionItem} from './styled'

class PositionCollection extends Component {
    render(){
        return(
            <PositionWrap>
                <ul>
                    <PositionItem className = 'border-bottom'>
                        <span className = 'left'>
                            <p className = 'position'>金融助理</p>
                            <p className = 'company'>滴滴出行</p>
                        </span>
                        <span className = 'right'>
                            <p className = 'salsry'>150-200元/天</p>
                        </span>
                    </PositionItem>
                </ul>
            </PositionWrap>
        )
    }
}

export default PositionCollection