// 在这里模拟后台的操作 异步操作

export const addCollection = (user,options) => {
    // 先查看数据库有没有这条数据
    return new Promise(async(resolve)=>{
        let isHas = await findCollectionById(user.id,options.id)
        let _all = await getAllCollection()
        if(!isHas.length){  // 如果没有这条数据
            _all[user.id]?(_all[user.id].push(options)):(_all[user.id] = [options])
            localStorage.setItem('collection',JSON.stringify(_all))
        }
        resolve({
            status:200,
            collection:_all
        })
    })
    
}

export const deleteCollection = (userId,id)=>{
    return new Promise( async (resolve)=>{
        let _all = await getAllCollection()
        _all[userId] = _all[userId].filter( item => item.id !== id)
        localStorage.setItem('collection',JSON.stringify(_all))
        resolve({
            status:200,
            collection:_all
        })
    })

}

const getAllCollection = ()=>{
    return new Promise((resolve)=>{
        let _all = localStorage.getItem('collection')
        if(_all){
            resolve(JSON.parse(_all))
        }else{
            // resolve([])
            resolve({})
        }
        
    })
}

const findCollectionById = async (userId,id)=>{
    let _all = await getAllCollection()
    if(!!Object.keys(_all).length && !!_all[userId]){
        let target = _all[userId].filter(item=> item.id === id)  // 过滤出一条和传入id相等的对象
        return target
    }
    return false
}