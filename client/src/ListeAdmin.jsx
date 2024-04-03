import React, { useEffect, useState } from 'react';
import Title from './Title';
import axios from 'axios';
import Image from './Image';
import { useNavigate } from 'react-router-dom';

export default function ListeAdmin({ refreshElements }) {
  const [admin, setAdmin] = useState([]);
  const navigate = useNavigate();
  
  let [numero, setNumero] = useState(1);
  useEffect(() => {
    axios.get('http://localhost:8002/readAdmin')
      .then(response => {
        setAdmin(response.data);
      })
  }, []);

  const handleEdit = (id_admin) => {
    navigate(`/admin/${id_admin}`); 
  };

  const handleDelete = async (id_admin) => {
    try {
      await axios.delete(`http://localhost:8002/deleteAdmin:${id_admin}`);
      console.log('Administrateur supprimé avec succès');
      refreshElements();
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'administrateur :', error);
    }
  };

  return (
    <div className='bg-black p-5 -ml-5'>
      <div>
        <div className='bg-white -mt-4 -mb-10 p-6 justify-center'>
          <div className='font-[lemon] text-4xl flex justify-center text-slate-950 mb-5 '>
            <Title styles="-ml-1 w-full text-black font-black font-[lemon] ml-5  text-4xl" Title="La liste des Admins" />
          </div>
          <div>
            <table>
              <thead>
                <tr className='w-full'>
                  <th className='bg-slate-800 text-white w-24 p-2 border-solid border-2 border-indigo-600'>N°</th>
                  <th className='bg-slate-800 text-white w-48 border-solid border-2 border-indigo-600'>Nom</th>
                  <th className='bg-slate-800 text-white w-48 border-solid border-2 border-indigo-600'>Post-Nom</th>
                  <th className='bg-slate-800 text-white border-solid border-2 border-indigo-600'>Téléphone</th>
                  <th className='bg-slate-800 text-white border-solid border-2 border-indigo-600'>E-mail</th>
                  <th className='bg-slate-800 text-white w-24 border-solid border-2 border-indigo-600 p-2 font-black'>Edite</th>
                  <th className='bg-slate-800 text-white w-24 border-solid border-2 border-indigo-600 p-2 font-black'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {admin.map((admin) => (
                  <tr className='w-24 hover:bg-slate-200 border-solid border-2 border-indigo-600' key={admin.id_admin}>
                    <td >{numero++}</td>
                    <td className='w-64 border-solid border-2 border-indigo-600 p-2 font-black'>{admin.nom}</td>
                    <td className='w-64 border-solid border-2 border-indigo-600 p-2 font-black'>{admin.postnom}</td>
                    <td className='w-64 border-solid border-2 border-indigo-600 p-2 font-black'>{admin.telephone}</td>
                    <td className='w-96 border-solid border-2 border-indigo-600 p-2 font-black'>{admin.email}</td>
                    <td className='w-24 border-solid border-2 border-indigo-600 p-2 font-black hover:bg-blue-400'>
                      <Image className="w-10" src="./src/assets/edit-173.png" alt="edit" onClick={() => handleEdit(admin.id_admin)} />
                    </td>
                    <td className='w-24 border-solid border-2 border-indigo-600 p-2 font-black hover:bg-red-800'>
                      <Image className="w-10" src="./src/assets/téléchargement.png" alt="delete" onClick={() => handleDelete(admin.id_admin)} />
                    </td>
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



// import React, { useEffect, useState } from 'react'
// import Title from './Title'
// import axios from 'axios'
// import Image from './Image'

// export default function ListeAdmin({ id_admin, refreshElements }) {
//   const [admin, setAdmin] = useState([])

//   let [numero, setNumero] = useState(1)
//   useEffect(() => {
//     axios.get('http://localhost:8002/readAdmin')
//       .then(response => {
//         setAdmin(response.data);
//       })
//   }, ['admin', 'numero']);



//   return (
//     <div className='bg-black p-5 -ml-5'>
//       <div>
//         <div className='bg-white -mt-4 -mb-10 p-6 justify-center'>
//           <div className='font-[lemon] text-4xl flex justify-center text-slate-950 mb-5 '>
//             <Title styles="-ml-1 w-full text-black font-black font-[lemon] ml-5  text-4xl" Title="La liste des Admins" />
//           </div>
//           <div>
//             <table>
//               <thead>
//                 <tr className='w-full'>
//                   <th className='bg-slate-800 text-white w-24 p-2 border-solid border-2 border-indigo-600'>N°</th>
//                   <th className='bg-slate-800 text-white w-48 border-solid border-2 border-indigo-600'>Nom</th>
//                   <th className='bg-slate-800 text-white w-48 border-solid border-2 border-indigo-600'>Post-Nom</th>
//                   <th className='bg-slate-800 text-white border-solid border-2 border-indigo-600'>Téléphone</th>
//                   <th className='bg-slate-800 text-white border-solid border-2 border-indigo-600'>E-mail</th>
//                   <th className='bg-slate-800 text-white w-24 border-solid border-2 border-indigo-600 p-2 font-black'>Edite</th>
//                   <th className='bg-slate-800 text-white w-24 border-solid border-2 border-indigo-600 p-2 font-black'>Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {admin.map((admin) => (
//                   <tr className='w-24 hover:bg-slate-200 border-solid border-2 border-indigo-600' key={admin.id_admin}>
//                     <td >{numero++}</td>
//                     <td className='w-64 border-solid border-2 border-indigo-600 p-2 font-black'>{admin.nom}</td>
//                     <td className='w-64 border-solid border-2 border-indigo-600 p-2 font-black'>{admin.postnom}</td>
//                     <td className='w-64 border-solid border-2 border-indigo-600 p-2 font-black'>{admin.telephone}</td>
//                     <td className='w-96 border-solid border-2 border-indigo-600 p-2 font-black'>{admin.email}</td>
//                     <td className='w-24 border-solid border-2 border-indigo-600 p-2 font-black hover:bg-blue-400'><Image className="w-10" src="./src/assets/edit-173.png" alt="edit" /></td>
//                     <td className='w-24 border-solid border-2 border-indigo-600 p-2 font-black hover:bg-red-800'><Image className="w-10" src="./src/assets/téléchargement.png" alt="delete" /></td>
//                   </tr>))
//                 }
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
