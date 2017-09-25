import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MyTestState extends Component {
  static propTypes = {

  }
  state={ //用state物件來設定原本的內容
    name:"Mary"
  }
  handleClick = ()=>{ //ES6肥箭頭內建綁訂this
    this.setState({ //用setState函數來改變原本的內容的State
      name:"Bob"
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.handleClick}>push me</button>
      </div>
    )
  }
}

export default MyTestState
