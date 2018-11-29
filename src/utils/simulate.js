// 在这里模拟后台的操作 异步操作

export const addCollection = (options) => {
    // 先查看数据库有没有这条数据
    return new Promise(async(resolve)=>{
        let isHas = await findCollectionById(options.id)
        let _all = await getAllCollection()
        if(!isHas.length){  // 如果有这条数据则count++
            _all.push(options)
            localStorage.setItem('collection',JSON.stringify(_all))
        }
        resolve({
            status:200,
            collection:_all
        })
    })
    
}

export const deleteCollection = (id)=>{
    return new Promise( async (resolve)=>{
        let _all = await getAllCollection(id)
        let _collection = _all.filter( item => item.id !== id)
        localStorage.setItem('collection',JSON.stringify(_collection))
        resolve({
            status:200,
            collection:_collection
        })
    })

}

const getAllCollection = ()=>{
    return new Promise((resolve)=>{
        let _all = localStorage.getItem('collection')
        if(_all){
            resolve(JSON.parse(_all))
        }else{
            resolve([])
        }
        
    })
}

const findCollectionById = async (id)=>{
    let _all = await getAllCollection()
    if(!!_all.length){
        let target = _all.filter(item=> item.id === id)  // 过滤出一条和传入id相等的对象
        return target
    }
    return false
}