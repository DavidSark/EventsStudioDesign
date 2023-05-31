import React, { useEffect, useState } from 'react';
import './ContactForm.scss'
import { HashLink as Link } from 'react-router-hash-link';
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase"
import { collection, addDoc, doc, getDocs, updateDoc } from "firebase/firestore";

const ContactForm = () => {

  //usestate pour les données
  const [user, setUser] = useState(null);
  const userCollectionRef = collection(db, "user");


  //useEffect pour appeler les données de la bdd
  useEffect(() => {

    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getUser();
  }, []);

  //fonction pour modifier


  return (
    <div className='container-form-parent'>
      <div className="container-form-row">

        <div className="container-form">
          <div className="container-speak">
            <h2>Parlons-en</h2>
            <p>Cotton candy muffin cupcake sugar plum marzipan </p>
          </div>
          <div className="container-phone-mail">
            <div className="phone">
              <img src="./img/svg/phone.svg" alt="phone icon" />

              {user && user.map((userData) => (
                <div className="phone" key={userData.id}>
                  <p>{userData.phone}</p>
                </div>
              ))}

            </div>
            <div className="mail">
              <img src="./img/svg/mail.svg" alt="mail icon" />
              
              {user && user.map((userData) => (
                <a href={`mailto:${userData.email}`}>
                <div className="phone" key={userData.id}>
                  <p>{userData.email}</p>
                </div>
                </a>
              ))}
              
            </div>
          </div>
          <div className="container-form-reseau-icon">
            <div className="container-form-fb">
              <img src="./img/svg/facebook-black.svg" alt="facebook icon" className="social-icon" />
              <Link to="https://www.facebook.com/" target='_blank'>
                <p>facebook</p>
              </Link>
            </div>
            <div className="container-form-instagram">
              <img src="./img/svg/instagram-black.svg" alt="instagram icon" className="social-icon" />
              <Link to="https://www.instagram.com/" target='_blank'>
                <p>instagram</p>
              </Link>
            </div>
            <div className="container-form-tiktok">
              <img src="./img/svg/tiktok-black.svg" alt="tiktok icon" className="tiktok" />
              <Link to="https://www.tiktok.com/" target='_blank'>
                <p>tiktok</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-info-form">
          <div className="separation-line-form"></div>
          <div>
            <h2>Écrivez moi</h2>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="6c8caee3-995b-4ff4-a909-21f8e3595ce2" />
              <input type="hidden" name="redirect" value="" />
              <div className="form-nom-prenom">
                <div className='form-nom'>
                  <label htmlFor="lastName">Nom<span>*</span> </label>
                  <input type="text" id="lastName" name="lastName" required placeholder='Votre nom' />
                </div>
                <div className='form-prenom'>
                  <label htmlFor="firstName" placeholder='prenom'>Prénom<span>*</span></label>
                  <input type="text" id="firstName" name="firstName" required placeholder='Votre prénom' />
                </div>
              </div>

              <div className="form-mail-phone">
                <div className='form-mail'>
                  <label htmlFor="email">Email<span>*</span></label>
                  <input type="email" id="email" name="email" required placeholder='Votre prénom' />
                </div>
                <div className='form-phone'>
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" id="phone" name="phone" placeholder='01 23 45 67 89'
                  />
                </div>
              </div>

              <div className="form-adress-postal">
                <div className='form-adress'>
                  <label htmlFor="address">Adresse complète<span>*</span></label>
                  <input type="text" id="address" name="address" required placeholder='123 rue exemple' />
                </div>
                <div className='form-postal'>
                  <label htmlFor="postalCode">Code postal<span>*</span></label>
                  <input type="text" id="postalCode" name="postalCode" required placeholder='51100' />
                </div>
              </div>
              <div className='form-prestation'>
                <label htmlFor="prestation">Prestation<span>*</span></label>
                <select id="prestation" name="prestation" required >
                  <option value="">Sélectionnez une prestation</option>
                  <option value="mariage">Mariage</option>
                  <option value="anniversaire">Anniversaire</option>
                  <option value="gender reveal">Gender Reveal</option>
                  <option value="foi et religion">Foi & Religion</option>
                </select>
              </div>
              <div className='form-message'>
                <label htmlFor="message">Message<span>*</span></label>
                <textarea id="message" name="message" required placeholder='Votre message'></textarea>
              </div>
              <button type="submit" className='form-send-btn'>Envoyer</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm