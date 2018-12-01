import * as types from './action-types'
import {  } from '@utils/HandleLogin'

export const actions = {
    setUser (){
        return {
            type:types.SET_USER,
            payload: new Promise((resolve)=>{
                // resolve({statu:true}) 
            })
        }
    }
}