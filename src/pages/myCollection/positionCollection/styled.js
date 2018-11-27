import styled from 'styled-components'


export const PositionWrap = styled.div`
    margin-top:1.306667rem;
    padding:0 .453333rem;
    background:white;
`

export const PositionItem = styled.li`
    height:1.733333rem;
    padding:.4rem 0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .left{
        .position{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: .4rem;
            color:#666;
        }
        .company{
            margin-top: .4rem;
            font-size: .373333rem;
            color: #999;
        }
    }
    .right{
        align-items:flex-end;
        height:.493333rem;
        margin-top: .8rem;
        font-size: .373333rem;
        color: #ff2b00;
    }
`