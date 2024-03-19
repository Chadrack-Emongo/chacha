const { Prisma } = require("@prisma/client");
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const express = require("express");
const app = express();
const router = require("../Routers/userRouter");


// la connexion
app.post('/login', (req, res) => {
  const admin = admins.find(admin => admin.username === req.body.username);
  if (admin == null) {
    return res.status(400).send({
    message: "Nom d'utlisateur ou le mot de passe incorecte"
    });
  }

  try {
    if (bcrypt.compareSync(req.body.password, admin.password)) {
      const accessToken = jwt.sign(user, process.env.TOKEN_SECRET);
      res.json({ accessToken: accessToken });
    } else {
      res.send({
        message: "Nom d'utlisateur ou le mot de passe incorecte"
      })
    }
  } catch {
    res.status(500).send();
  }
});

//la creation d'un compte admin
const admins = [];

// Route de création de compte
app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const admin = { 
      name: req.body.name, 
      lastName: req.body.lastName, 
      phone: req.body.phone, 
      email: req.body.email, 
      username: req.body.username, 
      password: hashedPassword,
    };
    admins.push(admin);

    // Création du token JWT
    const accessToken = jwt.sign({ username: admin.username, role: 'admin' }, process.env.TOKEN_SECRET);
    res.status(201).json({ accessToken: accessToken });
  } catch {
    res.status(500).send();
  }
});

// la creation d'un admin
const createAdmin = (req, res) => {
    let id = admin.length + 1
    const data = req.body
    data.id = id
    user.push(data)
    res.json(data)
};

// la lecture des informations d'un admin
const readAdmin = (req, res) => {
    let id = req.params.id
    res.json(admin[id])
};

// la mis à jour des informations d'un admin
const updateAdmin = (req, res) => {
    let id = req.params.id
    const data = req.body
    admin[id] = data
    res.json(data)
};

// la suppression d'un Admin 
const deleteAdmin = (req, res) => {
    let id = req.params.id
    admin.splice(id, 1)
    res.json(user)
};

  
module.exports = {
    createAdmin,
    readAdmin,
    updateAdmin,
    deleteAdmin
}