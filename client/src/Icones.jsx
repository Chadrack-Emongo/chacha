import React from 'react'

export default function Icones(props) {
  return (
    <div >
      <img className={props.style} src={props.src} alt={props.alt} />
    </div>
  )
}
