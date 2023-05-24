import React from 'react';
import ReactDOM from 'react-dom/client';

//import des pages à utiliser 
import Accueil from '../src/Pages/Accueil/Accueil';
import Prestations from '../src/Pages/Prestations/Prestations';
import EventSection from './components/EventSection/EventSection';
import Galerie from './Pages/Galerie/Galerie';

//Admin Zone pages
import ZoneLogin from './Pages/Zone/ZoneLogin/ZoneLogin';
import ZoneAdmin from './Pages/Zone/ZoneAdmin/ZoneAdmin';

//import du router
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,

} from "react-router-dom";




const currentUser = false;

const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to ="/zonelogin"/>
};




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
    path: "/zonelogin",
    element: <ZoneLogin/>,
  },

  {
    path: "/zoneadmin",
    element: <RequireAuth><ZoneAdmin/></RequireAuth>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
