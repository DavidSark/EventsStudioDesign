import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../components/context/AuthContext';
import './ZoneAdmin.scss'
//import des composants
import Entete from '../../../components/Entete/Entete'
import Menu from '../../../components/Menu/Menu'


const ZoneAdmin = () => {


  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('Déconnecté avec succès')
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className='zoneadmin-main-container'>
      <Entete />
      <Menu />
      <div className="zoneadmin-title">
        <div className="zoneadmin-line"></div>
        <h2>Bienvenue</h2>
      </div>
      <div className="zoneadmin-title-tagline">
        <h2>
          Vous êtes ici dans votre espace privé <br />
          Gérez les produits de votre boutiques.
        </h2>
      </div>

     
      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
    </div>
  )
}

export default ZoneAdmin