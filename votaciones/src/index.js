import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  var [all] = useState(0)
  var [avr] = useState(0)
  var [positive] = useState(0)

  all = good+neutral+bad
  avr = (good-bad)/all
  positive = (good/all)*100
 
  return (
    <div>
    <h1>Give feedback</h1>
    <button onClick={() => {setGood(good + 1)}}>good</button>
    <button onClick={() => {setNeutral(neutral + 1)}}>neutral</button>
    <button onClick={() => {setBad(bad + 1)}}>bad</button>
    <h1>Statistics</h1>
    <p>good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>
    <p>all: {all}</p>
    <p>average: {avr}</p>
    <p>positive: {positive}%</p>
  </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)