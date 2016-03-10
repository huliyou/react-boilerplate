/**
 *  组件:
 *  描述:
 *  props:
 *  scene:
 *  创建时间: 2016-1-11
 */

import React from 'react';

class App extends React.Component {
  componentWillMount() {
    console.log('hello world');
  }

  render() {
    return (
      <div>Hello world</div>
    );
  }
}

export default App;
