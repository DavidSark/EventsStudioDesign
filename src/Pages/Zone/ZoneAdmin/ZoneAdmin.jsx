import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../components/context/AuthContext';

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
        console.log('You are logged out')
      } catch (e) {
        console.log(e.message);
      }
    };
  return (
    <div>
      <Entete/>
      <Menu/>
      <h3>Gérez votre boutique</h3>
      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
    </div>
  )
}

export default ZoneAdmin