import React, { useState } from 'react'
import Statistic from './Statistic'

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
        {all > 0 ? 
        <>
        <Statistic text={"good"} value={props.good}/>
        <Statistic text={"neutral"} value={props.neutral}/>
        <Statistic text={"bad"} value={props.bad}/>
        <Statistic text={"all"} value={all}/>
        <Statistic text={"average"} value={avr}/>
        <Statistic text={"positive %"} value={positive}/>
        </>
        : <>No feedback given</>
        }
    </>

    )
}

export default Statistics