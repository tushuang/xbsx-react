
import * as types from './action_types'
import connect from '@connect/c'
// 给connect添加可以配置的atcionCreators
import actionCreators from './actions'
connect.addActions({
    job: actionCreators
})



const reducer = (
    preState = [],
    action
)=>{
    if(action.type === types.GET_JOB_LIST+"_FULFILLED"){
        let newState = JSON.parse(JSON.stringify(preState))
        newState = action.payload.data.msg
        return newState
    } else {
        return preState
    }
    
}

export default reducer