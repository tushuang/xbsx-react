
import * as types from './action-types'
import { addCollection,deleteCollection } from '@utils/simulate'

const actions = {
    addCollection(user,options){
        return {
            type:types.ADD_COLLECTION,
            payload: addCollection(user,options)
        }
    },
    deleteCollection(userId,id){
        return {
            type:types.DELETE_COLLECTION,
            payload: deleteCollection(userId,id)
        }
    }
}

export default actions