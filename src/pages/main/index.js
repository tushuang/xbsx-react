
import React,{Component} from 'react'
import uuid from 'uuid'
import { TabBar } from 'antd-mobile';

import { TapWrap,TabBarIcon } from './styled'


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

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'job',
      hidden: false,
      fullScreen: true,
      infos:[
        { id:uuid(),img:indexImg,activeImg:indexActiveImg,name:'首页',component: <Home/>,selected: 'home' },
        { id:uuid(),img:jobImg,activeImg:jobActiveImg,name:'职位',component:<Job/>,selected: 'job'  },
        { id:uuid(),img:xbsImg,activeImg:xbsActiveImg,name:'小白说',component:<GreenHand/>,selected: 'xbs'  },
        { id:uuid(),img:mineImg,activeImg:mineActiveImg,name:'我的',component:<Profile/>,selected: 'mine'  }
      ]
    };
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

export default MainComponent