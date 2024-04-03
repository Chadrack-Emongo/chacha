import React, { useEffect, useState } from 'react'
import Title from './Title'
import Image from './Image'
import axios from 'axios'

export default function ListeAdmin() {
  const [client, setClient] = useState([])
  let [numero, setNumero] = useState(1)
  useEffect(() => {
    axios.get('http://localhost:8002/readClient')
      .then(response => {
        setClient(response.data);
      })
  }, ['client', 'numero']);

  return (
    <div className='bg-black p-5 -ml-5'>
      <div>
        <div className='bg-white -mt-4 -mb-10 p-6 justify-center'>
          <div className='flex justify-center text-4xl text-slate-950 mb-5 '>
          <Title styles="-ml-1 w-full text-black font-black font-[lemon] ml-5  text-4xl" Title="La liste des clients" />
          </div>
          <div>
            <table>
              <thead>
                <tr className='w-full'>
                  <th className='bg-slate-800 text-white w-24 p-2 border-solid border-2 border-indigo-600'>N°</th>
                  <th className='bg-slate-800 text-white w-48 border-solid border-2 border-indigo-600'>Nom</th>
                  <th className='bg-slate-800 text-white w-48 border-solid border-2 border-indigo-600'>Post-Nom</th>
                  <th className='bg-slate-800 text-white border-solid border-2 border-indigo-600'>Téléphone</th>
                  <th className='bg-slate-800 text-white border-solid border-2 border-indigo-600'>Date</th>
                  <th className='bg-slate-800 text-white border-solid border-2 border-indigo-600'>Notes</th>
                  <th className='bg-slate-800 text-white w-48 border-solid border-2 border-indigo-600 p-2 font-black'>Objets payer</th>
                  <th className='bg-slate-800 text-white w-24 border-solid border-2 border-indigo-600 p-2 font-black'>Edite</th>
                  <th className='bg-slate-800 text-white w-24 border-solid border-2 border-indigo-600 p-2 font-black'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {client.map((client) => (
                  <tr className='w-24 border-solid border-2 border-indigo-600' key={client.id_admin}>
                    <td >{numero++}</td>
                    <td className='w-48 border-solid border-2 border-indigo-600 p-2 font-black'>{client.nom}</td>
                    <td className='w-48 border-solid border-2 border-indigo-600 p-2 font-black'>{client.postnom}</td>
                    <td className='w-48 border-solid border-2 border-indigo-600 p-2 font-black'>{client.telephone}</td>
                    <td className='w-48 border-solid border-2 border-indigo-600 p-2 font-black'>{client.date}</td>
                    <td className='w-48 border-solid border-2 border-indigo-600 p-2 font-black'>{client.note}</td>
                    <td className='w-48 border-solid border-2 border-indigo-600 p-2 font-black'>{client.objet}</td>
                    <td className='w-24 border-solid border-2 border-indigo-600 p-2 font-black'><Image className="w-10" src="./src/assets/edit-173.png" alt="edit" /></td>
                    <td className='w-24 border-solid border-2 border-indigo-600 p-2 font-black'><Image className="w-10" src="./src/assets/téléchargement.png" /></td>
                  </tr>))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
