import styled from 'styled-components'


export const SignUpWrap = styled.div`
    background:#f2f2f2;
    height:11.826667rem;
    padding:.8rem .8rem 0 .8rem;
    span{
        font-size:.373333rem;
        color:#333;
    }
`

export const FormWrap = styled.form`
    width:100%;
    height:9.6rem;
    margin-top:.933333rem;
    input{
        border:none;
        width:8.4rem;
        height:1.333333rem;
        margin-bottom:.666667rem;
        padding:.373333rem .253333rem;
        box-sizing:border-box;
        font-size:.426667rem;
        color:#666;
    }
    .getNum,button{
        height:1.2rem;
        width:3.36rem;
        margin:.4rem 2.52rem 0 2.52rem;
        background:#ffd000;
        border:none;
        border-radius:.133333rem;
        box-sizing: border-box;
        font-size:.426667rem;
        color:#333;
    }
    .verify{
        display:flex;
        input{
            width:5.066667rem;
        }
        .getNum{
            margin:0;
            display:flex;
            float:right;
            width:3.306667rem;
            height:1.306667rem;
            border-radius:0;
            justify-content:center;
            align-items:center;
        }
        img{
            width:3.333333rem;
            height:1.333333rem;
            display:block;
        }
    }
`