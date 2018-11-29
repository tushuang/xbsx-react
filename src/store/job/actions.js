
import * as types from './action_types'
import axios from 'axios'
const action = {
    getJobList(){
        
        return {
            type:types.GET_JOB_LIST,
            payload: axios.get('/api/jobs/search?p=1&k=&i=&c=&s=-&x=&d=&m=')
        }
    }
}

export default action