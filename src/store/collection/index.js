
import state from './defaultState'
import * as types from './action-types'

import connect from '@connect/c'
// 给connect添加可以配置的atcionCreators
import actionCreators from './actions'

import immutable from 'immutable'
connect.addActions({
    collection: actionCreators
})

const reducer = (
    preState = state.collection,
    action
)=>{
    switch(action.type){
        case types.ADD_COLLECTION + '_FULFILLED': return preState.push(...action.payload.collection);
        case types.DELETE_COLLECTION + "_FULFILLED": return  preState.push(...action.payload.collection);
        default:return preState
    }
}

export default reducer