import React from 'react'
import Icones from './Icones'
import NomOption from './NomOption'
import { Link } from 'react-router-dom'

export default function Option(props) {
    return (
        <div>
            <div className='grid p-10 bg-slate-800 rounded-xl mr-10'>
                <div className=' '>
                    <div className='mb-[352px] '>
                        <Link to="/accueil">
                            <div className='flex mb-10'>
                                <Icones style="h-6 mr-3" src="./src/assets/1.png" alt="1" />
                                <NomOption style=" font-[lemon] " name="Accueil" />
                            </div>
                        </Link>
                        <Link to="accueil/admin">
                            <div className='flex mb-10'>
                                <Icones style="h-6 mr-3" src="./src/assets/2.png" alt="2" />
                                <NomOption style=" font-[lemon]" name="Admin" />
                            </div>
                        </Link>
                        <Link to="accueil/listeAdmin">
                            <div className='flex mb-10'>
                                <Icones style="h-6 mr-3" src="./src/assets/3.png" alt="3" />
                                <NomOption style=" font-[lemon]" name="Liste Admin" />
                            </div>
                        </Link>
                        <Link to="accueil/client">
                            <div className='flex mb-10'>
                                <Icones style="h-6 mr-3" src="./src/assets/4.png" alt="4" />
                                <NomOption style=" font-[lemon]" name="Client" />
                            </div>
                        </Link>
                        <Link to="accueil/listeClient">
                            <div className='flex mb-10'>
                                <Icones style="h-6 mr-3" src="./src/assets/4.png" alt="4" />
                                <NomOption style=" font-[lemon]" name="Liste Client" />
                            </div>
                        </Link>
                        <Link to="accueil/contrat">
                            <div className='flex mb-10'>
                                <Icones style="h-6 mr-3" src="./src/assets/5.png" alt="5" />
                                <NomOption style=" font-[lemon]" name="Contrat" />
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="accueil/parametre">
                            <div>
                                <div className='flex '>
                                    <Icones style="h-10 mr-3" src="./src/assets/7.png" alt="7" />
                                    <NomOption style=" font-[lemon]" name="Parametre" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
