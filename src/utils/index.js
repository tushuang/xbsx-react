// 手机号验证

export const HandlePhone = (val)=>{
    let email = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    var phone = /^[1][3,4,5,7,8][0-9]{9}$/;
    return phone.test(val)|| email.test(val)
}

export const HandlePassword = (val)=>{
    return (val.length > 6 && val.length < 16)
}
export const  changeColor = (el,type)=>{
    let _val = false
    switch(type){
        case 'phone': _val = HandlePhone(el.value);break;
        case 'password': _val = HandlePassword(el.value);break;
        default : _val = false;
    }
    if(_val){
        el.style.background = 'rgb(250, 255, 189)'
    }else{
        el.style.background = 'white'
    }
}