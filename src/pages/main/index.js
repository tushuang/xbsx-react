
import React,{Component} from 'react'
import uuid from 'uuid'
import { TabBar } from 'antd-mobile';

import { TapWrap,TabBarIcon } from './styled'
import { withRouter } from 'react-router-dom'

import URL from "url"
import indexImg from '@as/images/index.png'
import indexActiveImg from '@as/images/index-active.png'
import jobImg from '@as/images/job.png'
import jobActiveImg from '@as/images/job-active.png'
import mineImg from '@as/images/mine.png'
import mineActiveImg from '@as/images/mine-active.png'
import xbsImg from '@as/images/xbs.png'
import xbsActiveImg from '@as/images/xbs-active.png'

import Home from './home'
import Job from './job'
import GreenHand from './greenHandTips'
import Profile from './profile'
import { getInfo } from '@utils/decorator'

@getInfo
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.selectedTab = 'job'
    this.state = {
      selectedTab: this.selectedTab, 
      hidden: false,
      fullScreen: true,
      infos:[
        { id:uuid(),img:indexImg,activeImg:indexActiveImg,name:'首页',component: <Home/>,selected: 'home' },
        { id:uuid(),img:jobImg,activeImg:jobActiveImg,name:'职位',component:<Job />,selected: 'job'  },
        { id:uuid(),img:xbsImg,activeImg:xbsActiveImg,name:'小白说',component:<GreenHand />,selected: 'xbs'  },
        { id:uuid(),img:mineImg,activeImg:mineActiveImg,name:'我的',component:<Profile />,selected: 'mine'  }
      ]
    };
    this.info = this.userInfo
  }
  componentDidUpdate (props,{selectedTab}){  // 接收到的是之前的state和props
    let { selectedTab: stab } = this.state
     // 如果此时，状态改变说明切换组件，判断如果是从menu切换出来的话，就更改路由为/
     // selectedTab !== stab 防止在xbs中重复执行replace
    if(selectedTab !== stab){
      this.props.history.replace('/'+this.state.selectedTab)
    }
    // 如果进去的地方是 'xbs' 模块 就加上/newest
    if(selectedTab !== stab && stab === 'xbs'){
      this.props.history.push('/xbs/newest')
    }
    // 切换组件式进行判断 用户有没有登录
    if(selectedTab !== stab && stab === 'mine'){
      if(this.info?!this.info.statu:true){
        window.location.href = '/login'
      }
    }
  }
  componentWillMount(){
    let newSelectTab = '/home'
    let selectHref = this.props.location.pathname.match(/^\/[a-z]+/)
    switch(selectHref?selectHref[0]:'/'){
      case '/': newSelectTab = 'home';break;
      case '/job': newSelectTab = 'job';break;
      case '/xbs': newSelectTab = 'xbs';break;
      case '/mine': newSelectTab = 'mine';break;
      default: newSelectTab = 'home'
    }
    // 路由更新的时候在判断一次
    if((this.info?!this.info.statu:true) && newSelectTab === 'mine'){
      window.location.href = '/login'
    }else {
      this.selectedTab = newSelectTab
      this.setState({
        selectedTab: newSelectTab
      })
    }
    
    
  }
  renderItems () {
    let {infos} = this.state
    return infos.map((item)=>(
        <TabBar.Item
          title={item.name}
          key={item.id}
          icon={<TabBarIcon url = {item.img}/>}
          selectedIcon={<TabBarIcon url = {item.activeImg}/>}
          selected={this.state.selectedTab === item.selected}
          onPress={() => {
            this.setState({
              selectedTab: item.selected,
            });    
          }}
        >
          {item.component}
        </TabBar.Item>
      ))
  }

  render() {
    return (
      <TapWrap fullScreen = {this.state.fullScreen} >
        <TabBar
          unselectedTintColor="#a1a1a1"
          tintColor="#333"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {this.renderItems()}
        </TabBar>
      </TapWrap>
    );
  }
}

export default withRouter(MainComponent)