import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()}; //元件初始化時間為現在時間
    }
  
    componentDidMount() { //component Did Mount 指頁面首次渲染之後等,同於JQ中.ready()
      this.timerID = setInterval( //肥箭頭綁this,每1秒執行tick()
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() { //元件將銷毀時觸發(不用也可以用了可以釋放記憶體)
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({ //用新的時間來觸發UI的變化
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  export default Clock;