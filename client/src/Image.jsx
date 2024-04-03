import React from 'react'

export default function Image(props) {
  return (
    <div>
      <img className={props.className} src={props.src} alt={props.alt} />
    </div>
  )
}
