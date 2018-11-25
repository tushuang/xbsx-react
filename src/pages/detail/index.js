
import React,{Component} from 'react'
import {Handle} from './styled'
import DetailTop from './detailTop'
import DetailCenter from './detailCenter'

class JobDetail extends Component {
    render(){
        return(
            <div>
                <DetailTop/>
                <DetailCenter/>
                <Handle></Handle>
            </div>
        )
    }
}

export default JobDetail