// eslint-disable-next-line
import React, { Component,useState } from 'react'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0, 
      neutral: 0, 
      bad: 0, 
      all: 0, 
      avr: 0, 
      positive: 0}
  }
  render() {
    return (
      <div>
        <h1>Give feedback</h1>
        <button onClick={() => 
          this.setState(({
            good: this.state.good + 1
          }))
        }>good</button>
        <button>neutral</button>
        <button>bad</button>
        <h1>Statistics</h1>
        <p>good: {this.state.good}</p>
        <p>neutral: {this.state.neutral}</p>
        <p>bad: {this.state.bad}</p>
        <p>all: {this.state.all}</p>
        <p>average: {this.state.avr}</p>
      </div>
    )
  }
}

