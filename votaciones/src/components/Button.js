import React from 'react'

const Button = (props) => {
    return(
        <>
            <button onClick={()=>{props.set(props.value + 1)}}>{props.text}</button>
        </>
    )
}

export default Button