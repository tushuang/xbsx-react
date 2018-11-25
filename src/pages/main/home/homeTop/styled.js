
import styled from 'styled-components'
import 'styled-components'

export const SwiperWrap = styled.div`
    width:100%;
    height:4rem;
    img{
        width:100%;
        height:100%;
    }
    .slider-list,.slider-frame{
        height:100%!important;
    }
    display:${props=>props.isVisible===true?'none':'block'};
`

export const HomeNavWrap = styled.div`
    width:100%;
    height:2.586667rem;
    position:relative;
    top:0;
    margin-bottom:.4rem;
`

export const SearchImg = styled.img`
    width:100%;
    height:1.213333rem;
    position:absolute;
    left:0;
    top:-1rem;
`

export const TabBar = styled.div`
    width:100%;
    height:2.573333rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:white;
    margin-top:.4rem;
    position:relative;
    z-index:-1;
    &.sticky{
        position:fixed;
        top:0;
        left:0;
        margin-top:0;
        z-index:99;
    }
`

export const TabBarItem = styled.div`
    width:25%;
    height:1.76rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    img{
        width:1.2rem;
        height:1.2rem;
    }
    span{
        color:#555;
        font-size:0.3333rem;
        margin-top:.266667rem;
    }
`

export const HomeWrap = styled.div`
    height:100%;
`