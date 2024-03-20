const express = require('express');
const routeleControllers = require('./controllers/adminControllers');
const routeClient= require('./Routers/routeClient')
const app = express();
const port = 8002;

app.use(express.json());

// Ajiuter un client
app.use("/createAdmin", routeleControllers.createAdmin);

// L'affichage des clients
app.get("/readAdmin", routeleControllers.readAdmin);

// La mis à jour d'un admin
app.put("/updateAdmin", routeleControllers.updateAdmin);

// La suppression d'un admin
app.delete("/deleteAdmin", routeleControllers.deleteAdmin);

// Ajiuter un client
app.use("/createClient", routeClient.createClient);

// L'affichage des clients
app.get("/readClient", routeClient.readClient);

// La mis à jour d'un client
app.put("/updateClient", routeClient.updateClient);

// La suppression d'un client
app.delete("/deleteClient", routeClient.deleteClient);



app.listen(port, () => {
  console.log("serveur en marche")
});
