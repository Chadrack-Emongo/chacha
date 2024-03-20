import React, { useState } from 'react'
import Button from './Button';

export default function CreerContratClient() {
  const [contrat, setContrat] = useState(null)

  function creerContratClient(produit,dette, versement){
    let contrat= {
      produit: produit,
      dette: dette,
      versement: versement,
      soldeDisponibles: function(){
        return dette -versement;
      },
      montantRestant: function(){
        return this.detteEnCours- this.montantVerse;
      }
    };
    return contrat;
  }

  const handleCreerContrat= (produit, dette, versement)=>{
    const nouveauContrat= creerContratClient(produit, dette, versement);
    setContrat(nouveauContrat);
  }
    return (
      <div>   
        <Button onClick={() => handleCreerContrat(['Produit1', 'Produit2'], 1000, 200)}>
          Créer Contrat
        </Button>
        {contrat && (
          <div>
            <p>Solde disponible: {contrat.soldeDisponible()}$</p>
            <p>Montant restant: {contrat.montantRestant()}$</p>
          </div>
        )}
      </div>
  )
}
