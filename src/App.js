import React, { Component } from 'react';
import RouterComponent from './router'
// import FooterNav from '@c/layout/footerNav'
import MainComponent from '@pages/main'

class App extends Component {
  render() {
    return (
      <div>
        {/* <RouterComponent/> */}
        <MainComponent/>
        {/* <FooterNav/> */}
      </div> 
    );
  }
}

export default App;
