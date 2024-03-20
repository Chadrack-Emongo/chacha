const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const express = require("express");
const app = express();
const router = require("../Routers/userRouter");


// la creation d'un client
async function createClient() {
    const admin = await prisma.create({
        data:{
            name: req.body.name,
            lastName: req.body.lastName,
            phone: req.body.phone,
            date: req.body.date,
            notes: req.body.notes,
            objects:req.body.objects
          }  
    });
    return admin
}

// l'affichage des clients
async function readClient() {
    const admin = await prisma.client.findMany();
    return admin;
}

// la mise à jour du client
async function updateClient() {
    const admin = await prisma.client.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            lastName: req.body.lastName,
            phone: req.body.phone,
            date: req.body.date,
            notes: req.body.notes,
            objects:req.body.objects
        }
    });
    return admin;
}

// la suppression du client
async function deleteClient() {
    const admin = await prisma.client.delete({
        where: {
            id: req.params.id
        }
    });
    return admin;
}


module.exports = {
    createClient,
    readClient,
    updateClient,
    deleteClient
}
