const { PrismaClient } = require('@prisma/client');

// Fonction pour créer un nouveau contrat
const createContrat = async (req, res) => {
  try {
    const nouveauContrat = await prisma.contrat.create({
      data: req.body,
    });
    res.status(201).json({ message: 'Contrat créé avec succès', contrat: nouveauContrat });
  } catch (error) {
    console.error('Erreur lors de la création du contrat : ', error);
    res.status(500).json({ message: 'Erreur lors de la création du contrat' });
  }
};

// Fonction pour enregistrer un paiement
const enregistrerPaiement = async (req, res) => {
  const contratId = req.params.contratId;
  const { montant } = req.body;
  const datePaiement = new Date();

  try {
    const paiement = await prisma.paiement.create({
      data: {
        montant,
        datePaiement,
        contrat: {
          connect: {
            id: parseInt(contratId),
          },
        },
      },
    });

    res.status(200).json({ message: 'Paiement enregistré avec succès', paiement });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du paiement : ', error);
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement du paiement' });
  }
};

module.exports = {
    createContrat,
    enregistrerPaiement
}