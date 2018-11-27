
import styled from 'styled-components'

export const JobListWrap = styled.div`
    width:100%;
    height:15.133333rem;
    background:white;
    &.changeMargin{
        margin-top:1.333333rem;
    }
`
export const JobList = styled.div`
    width:100%;
    background:white;
    padding:.186667rem .466667rem 0 .466667rem;
    overflow:hidden;
    .loading,.foot{
        text-align:center;
        font-size: .32rem;
        color:#999999;
        background:white;
        margin-top:.4rem;
        margin-bottom:.4rem;
    }
`

export const ToTop = styled.div`
    position:fixed;
    right:.4rem;
    bottom: 1.333333rem;
    width:1rem;
    height:1rem;
    background:rgba(0,0,0,.2);
    color:#333;
    font-size:.426667rem;
    text-align:center;
    line-height:1rem;
    /* display:${props=>props.isDisplay?'block':'none'} */
    opacity:0;
`