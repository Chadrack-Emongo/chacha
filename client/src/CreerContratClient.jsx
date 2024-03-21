import React, { useState } from 'react'
import Title from './Title';
import Form from './Form';
import Button from './Button';
import Inputlabel from './Inputlabel';

export default function CreerContratClient() {
  const [checkedItems, setCheckedItems] = useState({});
  const [contrat, setContrat] = useState(null)

  function creerContratClient(produit, dette, versement) {
    let contrat = {
      produit: produit,
      dette: dette,
      versement: versement,
      soldeDisponibles: function () {
        return dette - versement;
      },
      montantRestant: function () {
        return this.detteEnCours - this.montantVerse;
      }
    };
    return contrat;
  }

  const handleCreerContrat = (produit, dette, versement) => {
    const nouveauContrat = creerContratClient(produit, dette, versement);
    setContrat(nouveauContrat);
  }

  const options = [
    { label: 'Chacha', value: 'option1' },
    { label: 'James', value: 'option2' },
    { label: 'joel', value: 'option3' },
    { label: 'jerry', value: 'option4' },
    { label: 'Flavio', value: 'option5' },
  ];
  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.value]: event.target.checked,
    });
  };
  const getClassName = (value) =>
    checkedItems[value] ? 'checked-item' : 'unchecked-item';
  <label key={""} className={getClassName(options.value)}>
    {options.label}
    <input
      type="checkbox"
      value={options.value}
      checked={checkedItems[options.value] || false}
      onChange={handleChange}
    />
  </label>

  return (
    <div className='p-5'>
      <div className='bg-white -mt-4 -mb-10 p-6 flex justify-center'>
        <div className='flex justify-center p-5 bg-slate-800 w-2/4 rounded-2xl'>
          <div className='flex justify-center mb-10'>
            <Title styles=" text-white mb-10 font-black font-[lemon] text-3xl" Title="Créer Contrat" />
          </div>
          <Form>
            <Inputlabel span="text-white" style="text-white mt-6 font-bold" name="Dette" placeholder="Dette" />
            <Inputlabel span="text-white" style="text-white mt-6 font-bold" name="Versement" placeholder="Versement" />
            {options.map((options) => (
              <label key={""}>
                {options.label}
                <input
                  type="checkbox"
                  value={options.value}
                  checked={checkedItems[options.value] || false}
                  onChange={handleChange}
                />
              </label>
            ))}
            <div className='flex justify-center'>
              <Button onClick={() => handleCreerContrat(['Produit1', 'Produit2'], 1000, 200)} styles="text-xl text-slate-950 mt-10 font-black rounded-full w-64 h-12 bg-white border-solid border-2 border-slate-900">
                Créer Contrat
              </Button>
            </div>
          </Form>
          {contrat && (
            <div>
              <p>Solde disponible: {contrat.soldeDisponible()}$</p>
              <p>Montant restant: {contrat.montantRestant()}$</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
