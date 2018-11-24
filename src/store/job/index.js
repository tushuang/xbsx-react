
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
    let newState = JSON.parse(JSON.stringify(preState))
    if(action.type === types.GET_JOB_LIST+"_FULFILLED"){
        newState = action.payload.data.msg
    }
    return newState
}

export default reducer