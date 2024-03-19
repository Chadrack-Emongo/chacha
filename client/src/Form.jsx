import React from 'react'

export default function Form(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit} action="">{props.children}</form>
        </div>
    )
}
