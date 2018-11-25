
import * as types from './action-type' 
import axios from 'axios'

const action = {
    getDiscuss(){
        return {
            type:types.GET_DISCUSS,
            payload:axios.get('/mock/discuss.json')
        }
    }
}

export default action