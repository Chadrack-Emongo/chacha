const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require ('cors');
const express = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();
const router = require("../Routers/contratRoutes");


// la connexion
// const signInAdmin = async (req, res) => {
//     const { username, password } = req.body;
// console.log(req.body);
//     try {
//         const admin = await prisma.admin.findUnique({
//             where: { username },
//         });

//         if (!admin || !(await bcrypt.compare(password, admin.password))) {
//             return res.status(401).json({ message: 'Nom d’utilisateur ou mot de passe incorrect.' });
//         }

//         const token = jwt.sign({ userId: admin.id }, secretKey, { expiresIn: '2h' });

//         res.json({ message: 'Connexion réussie !', token });

//         if (admin && await bcrypt.compare(password, admin.password)) {
//             return res.status(201).json({ message: "Les mots de passe correspondent" });
//         } else {
//             return res.status(401).json({ message: "Les mots de passe ne correspondent pas" });
//         } 
//     } catch (error) {
//         res.status(500).json({ message: 'Erreur lors de la connexion.', error });
//     }
// };

const signInAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await prisma.admin.findUnique({
            where: { username },
        });

        if (!admin || !(await bcrypt.compare(password, admin.password))) {
            return res.status(401).json({ message: 'Nom d’utilisateur ou mot de passe incorrect.' });
        }
        if ((await bcrypt.compare(password, admin.password))) {
            res.json({ message: 'Connexion réussie !', admin: admin });
        }
        // const token = jwt.sign({ userId: admin.id }, secretKey, { expiresIn: '2h' });

        // res.json({ message: 'Connexion réussie !', token });


        // if (admin && await bcrypt.compare(password, admin.password)) {
        //     return res.status(201).json({ message: "Les mots de passe correspondent" });
        // } else {
        //     return res.status(401).json({ message: "Les mots de passe ne correspondent pas" });
        // }
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la connexion.', error });
    }
};


// creation d'un admin
const createAdmin = async (req, res) => {
    const { nom, postnom, numero_telephone, email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);

    try {
        const admin = await prisma.admin.create({
            data: {
                nom,
                postnom,
                numero_telephone,
                email, username,
                password: hashedPassword
            },
        });
        res.status(201).json({ message: 'Admin créé avec succès !', admin });
    } catch (error) {
        res.status(400).json({ message: 'Veillez verifier vos informations.', error });
    }
};

// readAdmin
const readAdmin = async (req, res) => {

    try {
        const admins = await prisma.admin.findMany();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des admins.', error });
    }
};

// updateAdmin
const updateAdmin = async (req, res) => {
    const { id } = req.params;
    const { nom, postnom, numero_telephone, email, username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 8);
        const admin = await prisma.admin.update({
            where: { id_admin: parseInt(id) },
            data: {
                nom,
                postnom,
                numero_telephone,
                email,
                username,
                password: hashedPassword
            },
        });
        res.json({ message: 'Admin mis à jour avec succès !', admin });
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la mise à jour de l’admin.', error });
    }
};

// deleteAdmin
const deleteAdmin = async (req, res) => {
    const id = parseInt(req.params.id);
    console.log("id : ", id);
    try {
        const admin = await prisma.admin.delete({
            where: { id_admin: id }
        }).then();
        res.json({ message: 'Admin supprimé avec succès !' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de l’admin.', error });
    }
};


module.exports = {
    signInAdmin,
    createAdmin,
    readAdmin,
    updateAdmin,
    deleteAdmin
}