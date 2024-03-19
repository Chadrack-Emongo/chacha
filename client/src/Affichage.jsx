import React from 'react'
import Icones from './Icones'
import NomOption from './NomOption'
import { Link } from 'react-router-dom'

export default function Affichage() {
    return (
        <div className=''>
            <div>
                <div className='grid grid-cols-3 bg-slate-900 grid-rows-2 gap-80 p-12'>
                    <Link to="/">
                        <div className='h-48 w-48 bg-slate-800 rounded-xl drop-shadow-2xl'>
                            <NomOption style="text-2xl ml-5 font-black p-5 font-[lemon]" name="Accueil" />
                            <Icones style="h-24 ml-10" src="./src/assets/1.png" alt="1" />
                        </div>
                    </Link>
                    <Link to="/admin">
                        <div className='h-48 w-48 bg-slate-800 rounded-xl drop-shadow-2xl'>
                            <NomOption style="text-2xl ml-7 font-black p-5 font-[lemon]" name="Admin" />
                            <Icones style="h-24 ml-10" src="./src/assets/2.png" alt="2" />
                        </div>
                    </Link>
                    <Link to="/listeAdmin">
                        <div className='h-48 w-48 bg-slate-800 rounded-xl drop-shadow-2xl'>
                            <NomOption style="text-2xl font-black p-5 font-[lemon]" name="Liste Admin" />
                            <Icones style="h-24 ml-12" src="./src/assets/3.png" alt="3" />
                        </div>
                    </Link>
                    <Link to="/client">
                        <div className='h-48 w-48 bg-slate-800 rounded-xl drop-shadow-2xl'>
                            <NomOption style="text-2xl ml-7 font-black p-5 font-[lemon]" name="Client" />
                            <Icones style="h-24 ml-10" src="./src/assets/4.png" alt="4" />
                        </div>
                    </Link>
                    <Link to="/listeClient">
                        <div className='h-48 w-48 bg-slate-800 rounded-xl drop-shadow-2xl'>
                            <NomOption style="text-2xl font-black p-5 font-[lemon]" name="Liste Client" />
                            <Icones style="h-24 ml-10 -mt-2" src="./src/assets/5.png" alt="5" />
                        </div>
                    </Link>
                    <Link to="/contrat">
                        <div className='h-48 w-48 bg-slate-800 rounded-xl drop-shadow-2xl'>
                            <NomOption style="text-2xl ml-5 font-black p-5 font-[lemon]" name="Contrat" />
                            <Icones style="h-40 -mt-3" src="./src/assets/6.png" alt="6" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
