const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require("express");
const app = express();
const router = require("../Routers/userRouter");


// la connexion
// app.post('/login', (req, res) => {
//   const admin = admins.find(admin => admin.username === req.body.username);
//   if (admin == null) {
//     return res.status(400).send({
//     message: "Nom d'utlisateur ou le mot de passe incorecte"
//     });
//   }

//   try {
//     if (bcrypt.compareSync(req.body.password, admin.password)) {
//       const accessToken = jwt.sign(user, process.env.TOKEN_SECRET);
//       res.json({ accessToken: accessToken });
//     } else {
//       res.send({
//         message: "Nom d'utlisateur ou le mot de passe incorecte"
//       })
//     }
//   } catch {
//     res.status(500).send();
//   }
// });

const createAdmin = async (req, res) => {
    const admin = await prisma.admin.create({
        data: {
            nom: req.body.nom,
            postnom: req.body.postnom,
            numero_telephone: req.body.numero_telephone,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }
    }).then();
    res.json(admin)
}

// readAdmin
const readAdmin = async (req, res) => {
    const admin = await prisma.admin.findMany();
    res.json(admin)
}

// updateAdmin
const updateAdmin = async (req, res)=> {
    const admin = await prisma.admin.update({
        where: {
            id: req.params.id
        },
        data: {
            nom: req.body.nom,
            postnom: req.body.postnom,
            numero_telephoneone: req.body.numero_telephoneone,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }
    }).then();
    res.json(admin)
}

// deleteAdmin
const deleteAdmin = async (req, res)=> {
    const admin = await prisma.admin.delete({
        where: {
            id: req.params.id
        }
    }).then();
    res.json(admin)
}

module.exports = {
    createAdmin,
    readAdmin,
    updateAdmin,
    deleteAdmin
}