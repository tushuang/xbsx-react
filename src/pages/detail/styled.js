
import styled from 'styled-components'

export const Handle = styled.div`
    display:flex;
    background:white;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:1.066667rem;
    padding:.173333rem .4rem;
    .compile,.collection{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        margin-left:.133333rem;
        img{
            width:.32rem;
            display:block;
        }
        width:2.186667rem;
        height:.96rem;
        background:#f6f6f6;
        font-size:.266667rem;
        color:#a1a1a1;
    }
    .send{
        width:4.506667rem;
        background-color: #ffd000;
        height:.96rem;
        color: #333;
        font-size:.373333rem;
        text-align:center;
        line-height:.96rem;
        margin-left:.133333rem;
    }
`