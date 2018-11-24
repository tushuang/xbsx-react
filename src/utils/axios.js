import axios from 'axios'

const http = (
    options
)=>{
    return new Promise((resolve)=>{
        axios(options)
        .then((res)=>{
            resolve(res.data)
        })
        .catch((err)=>{
            resolve(err)
        })
    }) 
}

export default http