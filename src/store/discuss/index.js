

import * as types from './action-type'
import immutable from 'immutable'

import connect from '@connect/c'
// 给connect添加可以配置的atcionCreators
import actionCreators from './actions'
connect.addActions({
    discuss: actionCreators
})



const reducer = (
    preState = [],
    action
)=>{
    if(action.type === types.GET_DISCUSS+"_FULFILLED"){
        let newState = JSON.parse(JSON.stringify(preState))
        newState = action.payload.data.data
        return newState
    }
    return preState
    // 使用immutable也必须放回一个immutable对象 所以不能直接用数组放回
    // if(action.type === types.GET_DISCUSS+"_FULFILLED"){
    //     let a  = preState.push(...action.payload.data.data)
    //     console.log(preState,a,action.payload.data.data,'discussaaa')
    //     return a
    //     console.log(preState,a)
        // return preState
    // }
    // return preState
}

export default reducer