

import * as types from './action-type'

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
    let newState = JSON.parse(JSON.stringify(preState))
    if(action.type === types.GET_DISCUSS+"_FULFILLED"){
        newState = action.payload.data.data
    }
    console.log(newState)  
    return newState
}

export default reducer