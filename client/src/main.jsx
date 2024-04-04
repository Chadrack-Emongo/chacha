import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Signin from './Signin.jsx';
import Accueil from './Accueil.jsx';
import Admin from './Admin.jsx';
import Connexion from './Connexion.jsx';
import ListeAdmin from './ListeAdmin.jsx';
import ListeClient from './ListeClient.jsx';
import Contrat from './Contrat.jsx';
import Parametre from './Parametre.jsx';
import Client from './Client.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Connexion />,
  },
  {
    path: "/accueil",
    element: <App><Outlet /></App>,
    children: [
      {
        path: "/accueil",
        element: <Accueil />,
      }, {
        path: "accueil/admin",
        element: <Admin />,
      },
      {
        path: "accueil/listeAdmin",
        element: <ListeAdmin />,
      },
      {
        path: "accueil/client",
        element: <Client />
      },
      {
        path: "accueil/listeClient",
        element: <ListeClient />,
      },
      {
        path: "accueil/contrat",
        element: <Contrat />,
      },
      {
        path: "accueil/parametre",
        element: <Parametre />,
      }
    ]
  },
  {
    path: "/register",
    element: <Signin />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
