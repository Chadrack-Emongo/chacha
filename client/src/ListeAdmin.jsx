import React from 'react'
import Title from './Title'
import Button from './Button'
import Option from './Option'

export default function ListeAdmin() {
  return (
    <div className='p-5 -ml-5'>
      <div>
        <div className='bg-white -mt-4 -mb-10 p-6 flex justify-center'>
          <div className='font-[lemon] text-2xl text-slate-950 mb-5 '>
            <Title Title="La liste des Admins" />
          </div>
        </div>
      </div>
    </div>
  )
}
