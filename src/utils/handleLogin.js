

export const signUp = (options)=>{
    let allUser = getAllUser() 
    let isHas = allUser.filter((item)=>{
        return item.phoneNum === options.phoneNum
    })
    console.log(isHas,'isHas',isHas.lenght)
    if(!!isHas.length){
        return {
            code:203,
            msg:'该手机号已被注册'
        }
    }else{
        setUser(options)
        return {
            code:200,
            msg:'注册成功'
        }
    }
}

export const signIn = (options)=>{
    let isHas = getAllUser().filter((item)=>{
        return item.phoneNum === options.phoneNum
    })
    if(!!isHas.length){
        if(options.password === isHas[0].password){
            let infos = getAllUser()
            let id = ''
            infos.forEach((item)=>{
                if(item.phoneNum === options.phoneNum){
                    id = item.id
                    item.statu = true
                }
            })
            localStorage.setItem('users',JSON.stringify(infos))
            return {
                code:200,
                msg:id
            }
        }else{
            return {
                code:201,
                msg:'账号或者密码错误'
            }
        }
        
    }else{
        setUser(options)
        return {
            code:202,
            msg:'手机号未注册 请先注册'
        }
    }
}

export const signOut = (id)=>{
    // let isHas = getAllUser().filter((item)=>{
    //     return item.id === id
    // })
    let infos = getAllUser()
    infos.forEach((item)=>{
        if(item.id === id){
            item.statu = false
        }
    })
    console.log(infos)
    localStorage.setItem('users',JSON.stringify(infos))
    return {
        code:200,
        msg:'退出成功'
    }
}


const getAllUser = ()=>{
    let user = JSON.parse(localStorage.getItem('users'))
    return user || []
}

const setUser = (user)=>{
    let allUser = getAllUser() 
    allUser.push(user)
    localStorage.setItem('users',JSON.stringify(allUser))
}
