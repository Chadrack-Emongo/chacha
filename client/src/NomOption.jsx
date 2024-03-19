import React from 'react'

export default function NomOption(props) {
  return (
    <div className='text-white '>
      <h1 className={props.style} >{props.name}</h1>
    </div>
  )
}
