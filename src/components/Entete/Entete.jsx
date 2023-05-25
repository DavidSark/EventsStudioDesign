import React, {useEffect, useState} from 'react'
import {auth} from '../../config/firebase'
import "./Entete.scss";

import { onAuthStateChanged, signOut } from 'firebase/auth'
// import Facebook from '../../../public/img/svg/facebook.svg'
// import Instagram from '../../../public/img/svg/instagram.svg'
// import Tiktok from '../../../public/img/svg/tiktok.svg'

const Entete = () => {

  const [authUser, setAuthUser] = useState(null);

  useEffect(()=>{
    const listen = onAuthStateChanged(auth,(user) => {
      if(user){
        setAuthUser(user)
      }else{
        setAuthUser(null);
      }
    })

    return () =>{
      listen();
    }
  },[]);


  const logout = () => {
    signOut(auth).then(() => {
      console.log('déconnexion réussi')
    }).catch(error=>console.log(error));
  }

  


  return (
    <div className='entete'>
      <div className='bloc-social-icon'>
        <a href="https://www.facebook.com/profile.php?id=100063230651252" target='_blank'>
          <img src="/img/svg/facebook.svg" alt="Facebook icon" className="social-icon" />
        </a>

        <a href="https://www.instagram.com/eventsstudiodesign/" target='_blank'>
          <img src="/img/svg/instagram.svg" alt="Instagram icon" className="social-icon" />
        </a>
        <a href="https://www.tiktok.com/@eventsstudiodesign" target='_blank'>
          <img src="/img/svg/tiktok.svg" alt="Tiktok icon" className="tiktok" />
        </a>
      </div>
      <div className="separator"></div>
      <div className="entete-email">
        <a href="mailto:evensstudiodesign@outlook.fr"><h2>evensstudiodesign@outlook.fr</h2></a>
      </div>
      <div className="separator"></div>
      <div className="entete-phone">
        <h2>07 82 75 09 19</h2>
      </div>

      
     
        <div>
         {
          authUser ? <><p>{`Connecté en tant que : ${authUser.email}`}</p> <button onClick={logout}>Déconnexion</button></> : <p>Déconnecté</p>
         }
        </div>
      
    
    </div>
  )
}

export default Entete