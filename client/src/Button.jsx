import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button className={props.styles}>{props.children} </button>
        </div>
    )
}
