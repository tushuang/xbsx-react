
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './actionCreators'  // 是所有的action

const _connect = (Uicomponent, reducers = []) => {  // 传入ui组件 和定义的reducer名字

    let mapStateToProps = (state) => {
        let result = {}
        // 如果没有传入reducer的名字，认为都想要
        if ( reducers.length <= 0 ) return state;
        // 传入的reducer是一个数组
        reducers.forEach(reducer => {
            // 如果数组内放入的是一个字符串 放回这个redeucer的所有state
            if (typeof reducer === 'string') {
                result[reducer] = state[reducer] ? state[reducer] : {}
            } else { // obj
            // 如果数组内放入的是一个对象 就只返回指定的数据
                result[reducer.name] = filterObject(state[reducer.name], reducer.states)
            }
            
        })

        return result
    }

    let mapDispatchToProps = (dispatch) => {
        let result = {}
        // 如果没有传入reducer的名字，认为都想要
        if ( reducers.length <= 0 ) return {};
        
        // 将对应的actionCreator的方法处理后传给UI组件
        reducers.forEach(reducer => {
            let name = (typeof reducer === 'string') ? reducer : reducer.name
            
            result[name + '_actions'] = bindActionCreators(actions[name], dispatch)
            
        })

        return result
    }


    return  connect(mapStateToProps, mapDispatchToProps)(Uicomponent)
}


function filterObject (obj, arr) {
    if ( !arr || arr.length <= 0 ) return obj;
    let result = {}
    arr.forEach(key => {
        if ( obj.hasOwnProperty(key) ) {
            result[key] = obj[key]
        }     
    })
    return result
}


export default _connect