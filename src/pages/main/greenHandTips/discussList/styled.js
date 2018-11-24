import styled from 'styled-components'


export const DiscussItemWrap = styled.div`
    width:100%;
    height:4.226667rem;
    padding:.4rem 0;
    background:white;
    padding:.4rem .4rem;
`

export const DiscussListWrap = styled.div`
    width:100%;
    /* margin-top:1.2rem; */
    background:white;
`

export const ItemTop = styled.div`
    display:flex;
    img{
        width:1.013333rem;
        height:1.013333rem;
        border-radius:50%;
    }
    span{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        margin-left:.4rem;
        .head-icon{
            color:#333;
            font-size:.426667rem;
        }
        .time{
            color:#999;
            font-size:.32rem;
        }
    }
`

export const ItemBottom = styled.div`
    display:flex;
    flex-direction:column;
    /* align-content:space-around; */
    justify-content:space-between;
    height:2.666667rem;
   .title{
        margin-top:.4rem;
        color:#333;
        font-size:.426667rem;
   }
   .content{
        color:#999;
        font-size:.333333rem;
   }
   span{
       display:flex;
       margin-bottom:.4rem;
       p{
            margin-right:.4rem;
            color:#999;
            font-size:.32rem;
       }
   }
`