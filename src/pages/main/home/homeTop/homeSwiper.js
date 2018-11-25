
import React,{Component} from 'react'

import {SwiperWrap} from './styled'
import http from '@utils/axios'
import { Carousel } from 'antd-mobile';
import uuid from 'uuid'


class HomeSwiper extends Component {
    constructor (props) {
        super(props)
        this.state = {
            infos : [],
            isVisible:this.props.isVisible
        }
    }
    async componentWillMount () {
        let _option = {
            url:'/xb/operations/recommend',
            method:'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: [function (data) {
                let ret = ''
                for (let it in data) {
                  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }],
            data:{
                req_id: '',
                uuid: '',
                city: '全国',
                client_type: 'wap',
                client_os: '',
                url: 'https://wap.xiaobaishixi.com/',
                uri: '/',
                refer: 'https://wap.xiaobaishixi.com/jobs',
                ad_groups: JSON.stringify([{"ad_position":"P_9_1","max_num":10}]),
            }
        }
        let res = await http(_option)
        this.setState({
            infos : res.msg.P_9_1
        })
    }
    componentWillReceiveProps(props,state){
       
        if(props.isVisible!==this.props.isVisible){
            this.setState({
                isVisible:props.isVisible
            })
        }
    }
    render(){
        return(
            <SwiperWrap isVisible = {this.state.isVisible} className = {this.state.isVisible?'animated fadeOutUp':''}>
                <Carousel
                autoplay={false}
                infinite
                style = {{ width: '100%',height: '100%'}}
                >   
                {this.renderSwiper()}
                </Carousel>
            </SwiperWrap>
        )
    }
    renderSwiper(){
        if(!this.state.infos.length) return ''
        return (this.state.infos.map(val => (
            <img
                key = {uuid()}
                src = {val.img}  
                alt = ""
                style = {{ width: '100%', verticalAlign: 'top' , height: '100%'}}
            />
        )))
       
    }

}

export default HomeSwiper