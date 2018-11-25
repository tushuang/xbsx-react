
import styled from 'styled-components'

export const DetailTopWrap = styled.div`
    width:100%;
    .topImg{
        height:4.48rem;
        img{
            height:4.48rem;
            width:100%;
        }
    }
`
export const Intro = styled.div`
    position:relative;
    background:white;
    padding:1.2rem .426667rem 0 .426667rem;
    .headIcon{
        width:1.44rem;
        height:1.44rem;
        position:absolute;
        top:-0.72rem;
        left:.4rem;
    }
    .title{
        height:.706667rem;
        display:flex;
        justify-content:space-between;
        font-size:.533333rem;
        color:#333;
        align-items:center;
        img{
            display:inline-block;
            vertical-align:middle;
            width:.533333rem;height:.533333rem;
            margin-right:.2rem;
        }
        em{
            font-size: .32rem;
            color: #999;
            margin-top: .293333rem
        }
    }
    .intro{
        text-decoration: underline;
        font-size: .373333rem;
        color: #717171;
        margin-top:.44rem;
    }
    ul{
        height:.706667rem;
        margin-top:.4rem;
        margin-bottom:.4rem;
        li{
            float:left;
            background:#fafafa;
            padding:.133333rem .266667rem;
            margin-right:.36rem;
            font-size:.32rem;
            color:#666;
        }
    }
    .site{
        display:flex;
        justify-content:space-between;
        padding:.466667rem 0 .4rem 0;
        align-items:center;
        span.left{
            display:flex;
            flex-direction:column;
            color: #999;
            font-size: .32rem;
            em{
                font-size:.4rem;
                color:#666;
                margin-bottom:.133333rem;
            }
        }
        .right{
            width:.466667rem;
            height:.466667rem;
            background:url('https://xbimg.xiaobaishixi.com/static/wap/img/icon.png?v=e7c9f17fe18892e29f7b476e6e413939') no-repeat -187px -101px;
        }
    }
`