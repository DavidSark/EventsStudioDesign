import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import des pages à utiliser 
import Accueil from '../src/Pages/Accueil/Accueil';
import Prestations from '../src/Pages/Prestations/Prestations';
import EventSection from './components/EventSection/EventSection';
import Galerie from './Pages/Galerie/Galerie';



//Admin Zone pages
import ZoneLogin from './Pages/Zone/ZoneLogin/ZoneLogin';
import ZoneAdmin from './Pages/Zone/ZoneAdmin/ZoneAdmin';

//import du router

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil/>}/>   
          <Route path="/prestations" element={<Prestations/>}/>      
          <Route path="/galerie" element={<Galerie/>}/>      
          <Route path="/event" element={<EventSection/>}/>      
          <Route path="/zonelogin" element={<ZoneLogin/>}/>      
          <Route path="/zoneadmin" element={<ZoneAdmin/>}/>      

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
