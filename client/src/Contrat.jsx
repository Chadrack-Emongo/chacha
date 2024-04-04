import React, { useState } from 'react';
import axios from 'axios';
import Title from './Title';

export default function Contrat() {
  const [montant, setMontant] = useState('');
  const [contrat, setContrat] = useState(null)

  const handlePaiement = async () => {
    try {
      const response = await axios.post("http://localhost:8002/createContrat", { montant });
      console.log(response.data.message);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du paiement :  ", error);
    }
  };

  return (
    <div className='bg-black p-5 -ml-5'>
      <div className='bg-white -mt-4 -mb-10 p-6 justify-center'>
        <div className='font-[lemon] text-4xl flex justify-center text-slate-950 mb-5 '>
          <Title styles=" text-slate-950 mb-10 font-black font-[lemon] text-3xl" Title="Créer Contrat" />
        </div>
        <input
          type="text"
          placeholder="Montant du paiement"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
        />
        <button onClick={handlePaiement}>Enregistrer Paiement</button>
      </div>
      {contrat && (
        <div>
          <p>Solde disponible: {contrat.soldeDisponible()}$</p>
          <p>Montant restant: {contrat.montantRestant()}$</p>
        </div>
      )}
    </div>
  );
};
