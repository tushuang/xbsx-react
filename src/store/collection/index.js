
import state from './defaultState'
import * as types from './action-types'

import connect from '@connect/c'
// 给connect添加可以配置的atcionCreators
import actionCreators from './actions'

connect.addActions({
    collection: actionCreators
})

const reducer = (
    preState = state.collection,
    action
)=>{
    let newState = JSON.parse(JSON.stringify(preState))
    switch(action.type){
        case types.ADD_COLLECTION + '_FULFILLED': newState =  action.payload.collection;break;
        case types.DELETE_COLLECTION + "_FULFILLED": newState =  action.payload.collection;break;
        default:return newState
    }
    return newState
}

export default reducer