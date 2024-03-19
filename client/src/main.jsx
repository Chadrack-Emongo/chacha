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
    element: <App><Outlet /></App>,
    children: [
      {
        path: "/",
        element: <Accueil />,
      }, {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/listeAdmin",
        element: <ListeAdmin />,
      },
      {
        path: "/client",
        element: <Client />
      },
      {
        path: "/listeClient",
        element: <ListeClient />,
      },
      {
        path: "/contrat",
        element: <Contrat />,
      },
      {
        path: "/parametre",
        element: <Parametre />,
      }
    ]
  },
  {
    path: "/register",
    element: <Signin />,
  },

  {
    path: "/connexion",
    element: <Connexion />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
