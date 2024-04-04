const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const express = require("express");
const app = express();
const userRouter = require('./routeClient');


const createClient = async (req, res) => {
    const { nom, postnom, telephone, date, note, objet } = req.body;

    try {
        const client = await prisma.client.create({
            data: {
                nom,
                postnom,
                telephone,
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

const readClient = async (req, res) => {

    try {
        const clients = await prisma.client.findMany();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération du client.', error });
    }
};

const updateClient = async (req, res) => {
    const { id } = req.params;
    const { nom, postnom,telephone, date, note, objet } = req.body;

    try {
        const client = await prisma.client.update({
            where: { id: parseInt(id) },
            data: {
                nom,
                postnom,
                telephone,
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

const deleteClient = async (req, res) => {
    const id = parseInt(req.params.id);
    console.log("id : ", id);
    try {
        const client = await prisma.client.delete({
            where: { id_client: id }
        }).then();
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
