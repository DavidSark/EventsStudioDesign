import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase'
import "./Entete.scss";
import { db } from "../../config/firebase"
import { collection, addDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from 'firebase/auth'
// import Facebook from '../../../public/img/svg/facebook.svg'
// import Instagram from '../../../public/img/svg/instagram.svg'
// import Tiktok from '../../../public/img/svg/tiktok.svg'

const Entete = () => {

  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null);
      }
    })

    return () => {
      listen();
    }
  }, []);


  const logout = () => {
    signOut(auth).then(() => {
      console.log('déconnexion réussi');
      navigate('/');
    }).catch(error => console.log(error));
  }

  //récupérer et modifier les données mobiles et email : 

  //usestate pour les données
  const [user, setUser] = useState(null);
  const userCollectionRef = collection(db, "user");
  const [editPhone, setEditPhone] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  //useEffect pour appeler les données de la bdd
  useEffect(() => {

    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getUser();
  }, []);

  //fonction pour modifier
  const updateUserPhone = async () => {
    try {
      const userDocRef = doc(db, 'user', user[0].id);
      await updateDoc(userDocRef, { phone: user[0].phone });
      setEditPhone(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserEmail = async () => {
    try {
      const userDocRef = doc(db, 'user', user[0].id);
      await updateDoc(userDocRef, { email: user[0].email });
      setEditEmail(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="entete-parent">
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
        
          {user && !editEmail ? (
            <div className="entete-email">
              <a href={`mailto:${user[0].email}`}><h2>{user[0].email}</h2></a>
              {authUser ? <> <button onClick={() => setEditEmail(true)}>+</button></> : <p></p>}
             
            </div>
          ) : (
            authUser && (
              <div className='btn-email-input'>
                <input
                  type="email"
                  value={user ? user[0].email : ''}
                  onChange={(e) => {
                    setUser((prevUser) => [{ ...prevUser[0], email: e.target.value }]);
                  }}
                />
                <button onClick={updateUserEmail}>Enregistrer</button>
              </div>
            )
          )}
       
        <div className="separator"></div>
       
          {user && !editPhone ? (
            <div className="entete-phone">
              <h2>{user[0].phone}</h2>
              {authUser? <><button onClick={() => setEditPhone(true)}>+</button></> : <p></p>}
              
            </div>
          ) : (
            authUser && (
              <div className='btn-phone-input'>
                <input
                  type="tel"
                  value={user ? user[0].phone : ''}
                  onChange={(e) => {
                    setUser((prevUser) => [{ ...prevUser[0], phone: e.target.value }]);
                  }}
                />
                <button onClick={updateUserPhone}>Enregistrer</button>
              </div>
            )
          )}
      




      </div>

      <div className='btn-logout-admin'>
        {authUser ? <> <button onClick={logout}>Déconnexion</button></> : <p></p>}
      </div>

    </div>
  )
}

export default Entete