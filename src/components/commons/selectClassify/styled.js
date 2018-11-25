

import styled from 'styled-components'

export const ClassifytWrap = styled.div`
    width:100%;
    height:1.32rem;
    line-height:1.32rem;
    background:white;
    display:flex;
    flex-wrap:wrap;
    overflow:hidden;
    &.jobPage{
        position:sticky;
        top:0;
        z-index:1;
    }
    .changeType{
        width:0.98rem;
        &::after{
            display:none;
        }
    }
`

export const FirstFloor = styled.div`
    display:flex;
    flex-wrap:wrap;
    height:${props => props.changeHeight === true?'100%':'0'};
    transition:all 0.3s;
`

export const SecondFloor = styled.div`
    /* display:flex; */
    flex-wrap:wrap;
    height:100%;
    width:100%;
    display:${props => props.changeDisplay === true?'none':'flex'};
    background:white;
    transition:all 0.3s;
`
export const SelectWrap = styled.div`
    position:relative;
    width:100%;
    height:auto;

`

export const ClassifyItem = styled.div`
    /* width:2.253333rem; */
    height:100%;
    font-size:.4rem;
    color:#666;
    text-align:center;
    position:relative;
    background:white;
    &::after{
        content:'';
        position:absolute;
        right:.346667rem;
        bottom:.253333rem;
        border-bottom:.16rem solid #999;
        border-left:.16rem solid transparent;
    }
    width:${props=>props.changeWidth?'4.5rem':'2.253333rem'}
`
