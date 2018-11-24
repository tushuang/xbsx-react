
import styled from 'styled-components'

export const ProfileWrap = styled.div`
    width:100%;
`

export const ProfileHeader = styled.header`
    width:100%;
    height:2.773333rem;
    padding-left:.4rem;
    padding-right:.4rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:white;
    img{
        width:1.866667rem;
        height:1.866667rem;
        margin-right:.533333rem;
    }
    span{
        flex-shrink:1;
        flex-grow:1;
        img{
            width:.4rem;
            height:.44rem;
            margin-bottom:.24rem;
        }
        p{
            font-size:.346667rem;
            color:#95a0a8;
        }
    }
`

export const ProfileList = styled.ul`
    width:100%;
    background:white;
    margin-top:.4rem;
    li{
        margin-left:.666667rem;
        margin-right:.666667rem;
        padding:.333333rem .4rem .333333rem .4rem;
        height:1.24rem;
        display:flex;
        align-items:center;
        font-size:.426667rem;
        color:#333;
    }

`