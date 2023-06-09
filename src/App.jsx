import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { productInputs } from "./config/formSource";

//import des pages à utiliser 
import Accueil from '../src/Pages/Accueil/Accueil';
import Prestations from '../src/Pages/Prestations/Prestations';
import EventSection from './components/EventSection/EventSection';
import Galerie from './Pages/Galerie/Galerie';
import Mentions from "./components/Legal/Mentions";
import Politique from "./components/Legal/Politique";
import Boutique from './Pages/Boutique/Boutique';
import NotFound from "./components/NotFound/NotFound";

//Admin Zone pages
import ZoneLogin from './Pages/Zone/ZoneLogin/ZoneLogin';
import ZoneAdmin from './Pages/Zone/ZoneAdmin/ZoneAdmin';


//import private route
import ProtectedRoute from "./components/ProtectedRoute";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import ZoneSingleProd from "./Pages/Zone/ZoneSingleProd/ZoneSingleProd"

//import de la meta description:
import { Helmet } from 'react-helmet';



function App() {


  return (
    <div>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Event's Studio Design</title>
        <meta name="description" content="Location, présatation, décoratrice événementielle basée dans le Grand Est" />
      </Helmet>

      <BrowserRouter>

        <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Accueil />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/event" element={<EventSection />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/politique" element={<Politique />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/boutique/:productId" element={<Single />} />
          <Route path="/zonelogin" element={<ZoneLogin />} />
          <Route path="/zoneadmin">
            <Route index element={<ProtectedRoute><ZoneAdmin /></ProtectedRoute>} />
            <Route path="/zoneadmin/:productId" element={<ProtectedRoute><ZoneSingleProd /></ProtectedRoute>} />
            <Route path="new" element={<ProtectedRoute><New inputs={productInputs} title="Ajoutez un nouveau produit" /></ProtectedRoute>} />
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
