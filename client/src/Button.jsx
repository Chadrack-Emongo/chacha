import React from 'react'

function Button(props) {
    return (
        <div>
            <button onClick={props.onClick} className={props.styles}>{props.children} </button>
        </div>
    )
}


export default Button;