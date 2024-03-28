import React, { useEffect, useState } from 'react'
import Title from './Title'
import Button from './Button'
import Option from './Option'
import axios from 'axios'

export default function ListeAdmin() {
  const [admin, setAdmin] = useState([])
  let [numero,setNumero]= useState(1)
  useEffect(() => {
    axios.get('http://localhost:8002/readAdmin')
      .then(response => {
        setAdmin(response.data);
      })
  }, ['admin','numero']);
  
  return (
    <div className='p-5 -ml-5'>
      <div>
        <div className='bg-white -mt-4 -mb-10 p-6 flex justify-center'>
          <div className='font-[lemon] text-2xl text-slate-950 mb-5 '>
            <Title Title="La liste des Admins" />
          </div>
          <table>
            <thead>
              <tr>
                <th>N°</th>
                <th>Nom</th>
                <th>Post-Nom</th>
                <th>Téléphone</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              {admin.map((admin) => (
                <tr key={admin.id_admin}>
                  <td>{numero++}</td>
                  <td>{admin.nom}</td>
                  <td>{admin.postnom}</td>
                  <td>{admin.telephone}</td>
                  <td>{admin.email}</td>
                </tr>))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
