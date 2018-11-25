import styled from 'styled-components'

export const ScrollWrap = styled.div`
    width:100%;
    height:16.453333rem;
    /* margin-bottom:.4rem; */
    /* overflow:hidden; */
`
export const HomeBottomWrap = styled.div`
    width:100%;
    height:${props=>props.changeHeight===true?'13.733333rem':'9.133333rem'};
    background:white;
    overflow:auto;
`