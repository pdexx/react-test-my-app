import React, { Component } from 'react';
import './TextAeraCounter.css';

class TextAeraCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {//宣告state的value,在此強制綁定
      value: ''
    };

    this.handleChange = this.handleChange.bind(this); //this方法的綁定寫在constructor
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { /*<textarea value={this.state.value} onInput={this.handleChange} />
  用onInput監聽textarea的改變一有改變立刻觸發*/
    this.setState({ value: event.target.value }); //輸入的值有改變時重新渲染組件
  }

  handleSubmit(event) { /*將按鈕的預設值改為跳出alter原先的送出功能關掉 
    用<form onSubmit={this.handleSubmit} >呼叫表單方法*/
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="TextAeraCounter">
      <form onSubmit={this.handleSubmit} >
        <label>Name:<br />
          <textarea value={this.state.value} onChange={this.handleChange} placeholder="請輸入文字" />
          {/* 在此強制綁定textarea的value為{this.state.value},FB建議寫法 onChange效果等同oninput*/}
        </label><br />
        <input type="submit" value="Submit" />
      </form>
      <p className="TextAeraCounterOutput">
      {`你輸入的內容是: ${this.state.value}`}
      </p>
      <p className="TextAeraCounterOutput">
      {`共有${this.state.value.length}字`}
      </p>
      </div>
    );
  }
}

export default TextAeraCounter;
