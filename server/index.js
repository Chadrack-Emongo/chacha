const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const dotenv = require('dotenv').config();
const generateSecreteKey= require ('./controllers/generateSecretKey')
const routeleControllers = require('./controllers/adminControllers');
const routeClient= require('./Routers/routeClient')
const authRoute = require('./Routers/authRoute');
const app = express();
const port = 8002;
const secretKeys= process.env.SECRET_KEY;


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors()); 

// connexion de l'admin
app.post("/signInAdmin", routeleControllers.signInAdmin);

// Ajiuter un l'admin
app.post("/createAdmin", routeleControllers.createAdmin);

// L'affichage de l'admin
app.get("/readAdmin", routeleControllers.readAdmin);

// La mis à jour d'un admin
app.put("/updateAdmin/:id", routeleControllers.updateAdmin);

// La suppression d'un admin
app.delete("/deleteAdmin/:id", routeleControllers.deleteAdmin);

// Ajiuter un client
app.post("/createClient", routeClient.createClient);

// L'affichage des clients
app.get("/readClient", routeClient.readClient);

// La mis à jour d'un client
app.put("/updateClient/:id", routeClient.updateClient);

// La suppression d'un client
app.delete("/deleteClient/:id", routeClient.deleteClient);



app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
