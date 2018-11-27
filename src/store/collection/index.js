

import connect from '@connect/c'
// 给connect添加可以配置的atcionCreators
import actionCreators from './actions'
connect.addActions({
    collection: actionCreators
})



const reducer = (
    preState = [],
    action
)=>{
    let newState = JSON.parse(JSON.stringify(preState))
    
    return newState
}

export default reducer