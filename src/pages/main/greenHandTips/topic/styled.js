import styled from 'styled-components'

export const TopicListWrap = styled.div`
    width:100%;
    height:100%;
    background:white;
`
export const TopicItem = styled.div`
    width:100%;
    height:2.546667rem;
    padding:.4rem;
    display:flex;
    img{
        width:1.866667rem;
        height:1.866667rem;
    }
    span{
        margin-left:.4rem;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        .title{
            color: #333333;
            font-size: .453333rem;
        }
        .theme{
            font-size: .333333rem;
            color: #888888;
        }
        .q-s{
            font-size: .32rem;
            color: #888888;
        }
    }
`
