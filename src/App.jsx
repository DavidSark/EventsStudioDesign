import { BrowserRouter, Routes, Route } from "react-router-dom";

//import des pages à utiliser 
import Accueil from '../src/Pages/Accueil/Accueil';
import Prestations from '../src/Pages/Prestations/Prestations';
import EventSection from './components/EventSection/EventSection';
import Galerie from './Pages/Galerie/Galerie';



//Admin Zone pages
import ZoneLogin from './Pages/Zone/ZoneLogin/ZoneLogin';
import ZoneAdmin from './Pages/Zone/ZoneAdmin/ZoneAdmin';
import { AuthContextProvider } from "./components/context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";


//importe private route



function App() {


  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/prestations" element={<Prestations />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/event" element={<EventSection />} />
            <Route path="/zonelogin" element={<ZoneLogin />} />
            <Route path="/zoneadmin" element={<ProtectedRoute><ZoneAdmin /></ProtectedRoute>} />


          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
