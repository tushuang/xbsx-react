import styled from 'styled-components'

export const SignInWrap = styled.div`
    /* width:100%; */
    /* height:100%; */
    padding:0 .8rem;
    overflow:hidden;
    background:#f2f2f2;
    .top{
        padding-top:1.6rem;
        margin:0 1.6rem;
        width:4.666667rem;
        img{
            width:4.666667rem;
            height:1.146667rem;
        }
    }
    .tips{
        height:1.293333rem;
        width:100%;
        font-size:.373333rem;
        display:flex;
        color:#676765;
        justify-content:space-between;
        align-content:flex-end;
        align-items:flex-end;
    }
    .signInType{
        margin:1.866667rem 0;
        overflow:hidden;
        text-align:center;
        p{
            font-size:.426667rem;
            color:#c3c3c3;
            padding-bottom:.426667rem;
            margin-bottom:.586667rem;
        }
        .icon{
            img{
                width:.626667rem;
                height:.493333rem;
                margin-left:.533333rem;
            }
        }
    }
    .foot{
        font-size:.293333rem;
        color:#dbdbdb;
        text-align:center;
    }
`

export const FormWrap = styled.form`
    width:100%;
    height:7.16rem;
    margin-top:1.333333rem;
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
    button{
        height:1.2rem;
        width:3.36rem;
        margin:1.333333rem 2.52rem 0 2.52rem;
        background:#ffd000;
        border:none;
        border-radius:.133333rem;
        box-sizing: border-box;
        font-size:.426667rem;
        color:#333;
    }
`