import React from 'react';
import ReactDOM from 'react-dom/client';

//import des pages à utiliser 
import Accueil from '../src/Pages/Accueil/Accueil';
import Prestations from '../src/Pages/Prestations/Prestations';
import EventSection from './components/EventSection/EventSection';
import Galerie from './Pages/Galerie/Galerie';
import LoginZone from './Pages/Zone/LoginZone/LoginZone'

//import du router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";







const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil/>,
  },
  {
    path: "/prestations",
    element: <Prestations/>,
  },

  {
    path: "/galerie",
    element: <Galerie/>,
  },

  {
    path: "/event",
    element: <EventSection/>,
  },

  {
    path: "/loginZone",
    element: <LoginZone/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
