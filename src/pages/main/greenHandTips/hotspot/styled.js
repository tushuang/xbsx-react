
import styled from 'styled-components'

export const HotSpotList = styled.div`
    width:100%;
    padding:0 .4rem;
    background:white;
    margin-top:1.2rem;
`

export const HotSpotItem = styled.div`
    height:3.613333rem;
    display:flex;
    flex-direction:column;
    padding:.4rem 0;
    p.title{
        font-size: .453333rem;
        color: #333333;
    }
    span.content-box{
        padding:.4rem 0;
        display:flex;
        img{
            width:2.986667rem;
            height:2rem;
        }
        span{
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            padding-left:.4rem;
            height:2rem;
            width:100%;
            text-overflow:ellipsis;
            white-space:nowrap;
            overflow:hidden;
            .aside-title{
                font-size: .333333rem;
                color: #888888;
            }
            .info{
                display:flex;
                justify-content:space-between;
                em{
                    color: #979797;
                    font-size: .32rem;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    overflow:hidden;
                    &.total-view{
                        display: block;
                        width:1.733333rem;
                    }
                }
            }
        }
        
    }
`