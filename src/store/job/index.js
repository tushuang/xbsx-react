
import * as types from './action_types'

import immutable from 'immutable'
import connect from '@connect/c'
// 给connect添加可以配置的atcionCreators
import actionCreators from './actions'
connect.addActions({
    job: actionCreators
})



const reducer = (
    preState = immutable.List([]),
    action
)=>{
    if(action.type === types.GET_JOB_LIST+"_FULFILLED"){
        // let newState = JSON.parse(JSON.stringify(preState))
        // newState = action.payload.data.msg
        // return newState
        let state =  preState.push(...action.payload.data.msg)
        return state._tail?state._tail.array:preState
        // return state.get()
    } else {
        return preState
    }
    
}

export default reducer