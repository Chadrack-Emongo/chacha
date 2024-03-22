const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const express = require("express");
const app = express();
const userRouter = require('./routeClient');


// la creation d'un client
// async function createClient(req, res) {
//     const client = await prisma.client.create({
//         data:{
//             nom: req.body.nom,
//             postnom: req.body.postnom,
//             numero_telephone: req.body.numero_telephone,
//             date: req.body.date,
//             note: req.body.note,
//             objet:req.body.objet
//           }  
//     }).then();
//     res.json(client)
// }

const createClient = async (req, res) => {
    const { nom, postnom, numero_telephone, date, note, objet } = req.body;

    try {
        const client = await prisma.client.create({
            data: {
                nom,
                postnom,
                numero_telephone,
                date,
                note,
                objet
            },
        });
        res.status(201).json({ message: 'Client créé avec succès !', client });
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la création du client.', error });
    }
};


// l'affichage des clients
// async function readClient(req, res) {
//     const client = await prisma.client.findMany();
//     res.json(client)
// }

const readClient = async (req, res) => {

    try {
        const clients = await prisma.client.findMany();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération du client.', error });
    }
};

// // la mise à jour du client
// async function updateClient(req, res) {
//     const client = await prisma.client.update({
//         where: {
//             id: req.params.id
//         },
//         data: {
//             nom: req.body.nom,
//             postnom: req.body.postnom,
//             numero_telephone: req.body.numero_telephone,
//             date: req.body.date,
//             note: req.body.note,
//             objet: req.body.objet
//         }
//     }).then();
//     res.json(client)
// }

const updateClient = async (req, res) => {
    const { id } = req.params;
    const { nom, postnom, numero_telephone, date, note, objet } = req.body;

    try {
        const client = await prisma.client.update({
            where: { id: parseInt(id) },
            data: {
                nom,
                postnom,
                numero_telephone,
                date,
                note,
                objet
            },
        });
        res.json({ message: 'Client mis à jour avec succès !', client });
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la mise à jour du client.', error });
    }
};

// la suppression du client
// async function deleteClient(req, res) {
//     const client = await prisma.client.delete({
//         where: {
//             id: req.params.id
//         }
//     }).then();
//     res.json(client)
// }

const deleteClient = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.client.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Client supprimé avec succès !' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du client.', error });
    }
};



module.exports = {
    createClient,
    readClient,
    updateClient,
    deleteClient
}
