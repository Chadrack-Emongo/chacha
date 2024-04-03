const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');
const express = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();

app.use(cors());


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

// const signInAdmin = async (req, res) => {
//     const { username, password } = req.body;
//     //  try {
//         const admin = await prisma.admin.findUnique({
//             where: { username : username },
//         }); 

//         if (!admin) {
//             return res.status(401).json({ message: 'Nom d’utilisateur ou mot de passe incorrect.' });
//         }
//         console.log(req.body);
//         if ((bcrypt.compare(password, admin.password))) {
//             res.json({ message: 'Connexion réussie !', admin: admin });
//         }
//         // const token = jwt.sign({ userId: admin.id }, secretKey, { expiresIn: '2h' });

//         // res.json({ message: 'Connexion réussie !', token });


//         // if (admin && await bcrypt.compare(password, admin.password)) {

//         //     return res.status(201).json({ message: "Les mots de passe correspondent" });
//         // if (admin && await bcrypt.compare(password, admin.password)) {
//         //     return res.status(201).json({ message: "Les mots de passe correspondent" });
//         // } else {
//         //     return res.status(401).json({ message: "Les mots de passe ne correspondent pas" });
//         // }
//     // } catch (error) { 
//     //     res.status(501).json({ message: 'Erreur lors de la connexion.', error });
//     // }
// };

// const signInAdmin = async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const admin = await prisma.admin.findUnique({
//             where: {
//                 username: username,
//                 password: password,
//             }
//         });

//         if (!admin) {
//             return res.status(404).json({ error: "Nom d'utilisateur incorrect" });
//         }

//     } catch (error) {
//         console.error("Erreur lors de la recherche de l'admin:", error);
//         res.status(500).json({ error: "Une erreur s'est produite lors de la recherche de l'admin" });
//     }
// };


const signInAdmin = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);
    if (!username || !password) {
        return res.status(400).json({ error: "Le nom d'utilisateur et le mot de passe sont requis" });
    }

    try {
        const admin = await prisma.admin.findUnique({
            where: { username: username }
        });

        if (!admin) {
            return res.status(404).json({ error: "Nom d'utilisateur introuvable" });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Mot de passe incorrect" });
        }

        const token = jwt.sign({ id: admin.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ token });

    } catch (error) {
        console.error("Erreur lors de la connexion de l'admin:", error);
        res.status(500).json({ error: "Une erreur s'est produite lors de la connexion de l'admin" });
    }
};




// const signInAdmin = async (req, res) => {
//     // Extraction du nom d'utilisateur et du mot de passe à partir de la requête
//     const { username, password } = req.body;

//     // Recherche de l'administrateur dans la base de données par nom d'utilisateur
//     const admin = await prisma.admin.findFirst({
//         where: { username : username },
//     });

//     // Vérification si l'administrateur existe et si le mot de passe correspond
//     if (!admin || !(await bcrypt.compare(password, admin.password))) {
//         // Si l'administrateur n'existe pas ou si les mots de passe ne correspondent pas
//         return res.status(401).json({ message: 'Nom d’utilisateur ou mot de passe incorrect.' });
//     }
//     // Si les mots de passe correspondent
//     if ((await bcrypt.compare(password, admin.password))) {
//         // Connexion réussie
//         res.json({ message: 'Connexion réussie !', admin: admin });
//     }  
// };



// creation d'un admin
// const createAdmin = async (req, res) => {
//     const { nom, postnom, numero_telephone, email, username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 8);

//     try {
//         const admin = await prisma.admin.create({
//             data: {
//                 nom,
//                 postnom,
//                 numero_telephone,
//                 email, username,
//                 password: hashedPassword
//             },
//         });
//         console.log(req.body);
//         res.status(201).json({ message: 'Admin créé avec succès !', admin });
//     } catch (error) {
//         res.status(400).json({ message: 'Veillez verifier vos informations.', error });
//     }
// };

// const jwt = require('jsonwebtoken');

const createAdmin = async (req, res) => {
    // console.log(" BODY ", req.body);
    const { nom, postnom, telephone, email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);

   try {
        // Vérifier si un administrateur avec le même email existe déjà
        const existingAdminWithEmail = await prisma.admin.findUnique({
            where: { email: email },
        });

        if (existingAdminWithEmail) {
            return res.status(409).json({ message: "Un administrateur avec cet e-mail existe déjà." });
        }

        const existingAdminWithUsername = await prisma.admin.findUnique({
            where: { username: username },
        });

        if (existingAdminWithUsername) {
            return res.status(409).json({ message: "Un administrateur avec ce nom d'utilisateur existe déjà." });
        }

        const admin = await prisma.admin.create({
            data: {
                nom,
                postnom,
                telephone,
                email,
                username,
                password: hashedPassword

            },
        });

        // Créer un token JWT
        const token = jwt.sign({ id_admin: admin.id_admin }, process.env.SECRET_KEY, { expiresIn: '1h' });

        // Stocker le token dans la base de données
        await prisma.token.create({
            data: {
                id_admin: admin.id_admin,
                token
            }
        });
// console.log(token);
        res.status(201).json({ message: 'Admin créé avec succès !', admin, token });
    } catch (error) {
        res.status(400).json({ message: 'Une erreur s\'est produite lors de la création de l\'administrateur.', error });
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
    const { nom, postnom, telephone, email, username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 8);
        const admin = await prisma.admin.update({
            where: { id_admin: parseInt(id) }, 
            data: {
                nom,
                postnom,
                telephone,
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
    try { 
        await prisma.$transaction([
            prisma.token.deleteMany({ where: { id_admin: id } }),
            prisma.admin.delete({ where: { id_admin: id } })
        ]);
        res.json({ message: 'Admin supprimés avec succès !' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de l’admin', error });
    }
};

module.exports = {
    signInAdmin,
    createAdmin,
    readAdmin,
    updateAdmin,
    deleteAdmin
}