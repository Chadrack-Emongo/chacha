const { Prisma } = require("@prisma/client");
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const express = require("express");
const app = express();
const router = require("../Routers/userRouter");


// la creation d'un client
const createClient = await Prisma.Client.create({
  data:{
    name: req.body.name,
    lastName: req.body.lastName,
    phone: req.body.phone,
    date: req.body.date,
    notes: req.body.notes,
    objects:req.body.objects
  }  
})

// l'affichage du client
const readClientn = await 
Prisma.Client.read({
})