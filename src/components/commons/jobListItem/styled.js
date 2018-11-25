import styled from 'styled-components'

import SiteImg from '@as/images/address.png'


export const JobListItemWrap = styled.div`
    width:100%;
    height:2.466667rem;
    padding-top:.386667rem;
    padding-bottom:.306667rem;
    background:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .company-picture{
        width:1.6rem;
        height:1.6rem;
    }
    .list-center{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        width:3.866667rem;
        height:1.626667rem;
        margin-left:.266667rem;
        .title{
            font-size: .426667rem;
            color: #5a647a;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .company-site,.company-name{
            font-size: .333333rem;
            color: #bdc9da;
        }
        .company-site{
            height:.44rem;
            padding-left:.44rem;
            background:url(${()=>SiteImg}) no-repeat;
            background-size: .333333rem .333333rem;
        }
    }
    .list-right{
        width:3.346667rem;
        height:1.64rem;
        display:flex;
        flex-direction:column;
        align-items:flex-end;
        justify-content:space-between;
        .date{
            margin-top: .16rem;
            font-size: .32rem;
            color: #d2dbef;
        }
        .salary{
            font-size: .373333rem;
            color: #f96969;
            font-weight: bold;
        }
    }
`