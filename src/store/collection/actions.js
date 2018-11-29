
import * as types from './action-types'
import { addCollection,deleteCollection } from '@utils/simulate'

const actions = {
    addCollection(options){
        return {
            type:types.ADD_COLLECTION,
            payload: addCollection(options)
        }
    },
    deleteCollection(id){
        return {
            type:types.DELETE_COLLECTION,
            payload: deleteCollection(id)
        }
    }
}

export default actions