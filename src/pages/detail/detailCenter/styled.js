import styled from 'styled-components'

export const DetailCenterWrap = styled.div`
    p.title{
        font-size:.426667rem;
        position:relative;
        height:1.12rem;
        line-height:1.12rem;
        padding-left:.453333rem;
        padding-right:.453333rem;
        margin-top:.4rem;
        &::after{
            content:'';
            display:block;
            position:absolute;
            width:7.253333rem;
            height:.013333rem;
            top:.56rem;
            left:2.4rem;
            background:rgb(234, 234, 234);
        }
    }
    .content{
        background:white;
        margin-top:.32rem;
        overflow:hidden;
        div{
            padding:.44rem .453333rem;
            font-size:.466667rem;
            color:#666;
            line-height:.6rem;
           b{
                font-size:.466667rem;
                color:#666;
            } 
        }
        
    }
    .site{
        margin-top:.32rem;
        padding:0 .453333rem .133333rem .453333rem;
        background:white;
        font-size:.373333rem;
        color:#666;
        overflow:hidden;
        span{
            display:inline-block;
            margin-top:.4rem;
            margin-bottom:.2rem;
            height:.626667rem;
            i{
                display: inline-block;
                width: .6rem;
                height: .626667rem;
                vertical-align:middle;
                background:url('https://xbimg.xiaobaishixi.com/static/wap/img/icon-address.png?v=8ae03de6e920d886a69a35a8fa0d46f2') no-repeat;
                background-size:.4rem .626667rem;
            }
        }
    }
    .loadMore{
        text-align:center;
        height:.933333rem;
        line-height:.933333rem;
        background:white;
        color:#333;
        font-size:.373333rem;
        margin-top:.44rem;
    }
    .xbTips{
        margin-top:.32rem;
        padding:.44rem .453333rem .133333rem 0;
        background:white;
        color:#b79442;
        margin-bottom:1.6rem;
        p.title{
            &::after{
                width:5.546667rem;
                left:3.733333rem;
            }
        }
        .content{
            padding-left:.453333rem;
            margin-bottom:.2rem;
            font-size:.293333rem;
            line-height:.533333rem;
        }
    }
    
`