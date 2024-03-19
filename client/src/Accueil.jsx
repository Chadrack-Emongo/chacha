import React from 'react'
import Title from './Title'
import Option from './Option'
import Affichage from './Affichage'
import Button from './Button'

export default function Accueil() {
    return (
        <div className=''>
            {/* <div className='mb-10 flex justify-between'>
                <Title styles="text-white font-black ml-5 text-4xl font-[lemon]" Title="Infinity" />
                <Button styles="text-fuchsia-900 h-10 p-2 font-black bg-white rounded-2xl" >
                    Déconnexion
                </Button>
            </div>
            <div className='flex'>
                <div className='w-1/5'>
                    <Option />
                </div> */}

            {/* </div> */}
                <Affichage />
        </div>
    )
}