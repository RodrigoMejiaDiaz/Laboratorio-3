import React, { useState } from 'react'

const Statistics = (props) => {

    var [all] = useState(0)
    var [avr] = useState(0)
    var [positive] = useState(0)
  
    all = props.good+props.neutral+props.bad
    avr = (props.good-props.bad)/all
    positive = (props.good/all)*100

    return (
    <>
        <h1>Statistics</h1>
        <p>good: {props.good}</p>
        <p>neutral: {props.neutral}</p>
        <p>bad: {props.bad}</p>
        <p>all: {all}</p>
        <p>average: {avr}</p>
        <p>positive: {positive}%</p>
    </>

    )
}

export default Statistics