import React, { useEffect, useState } from 'react';
import './ContactForm.scss'
import { HashLink as Link } from 'react-router-hash-link';

import { db } from "../../config/firebase"
import { collection, getDocs } from "firebase/firestore";


const ContactForm = () => {

  const accessKey =  import.meta.env.VITE_ACCESS_MAIL;
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formValues, setFormValues] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    prestation: '',
    message: ''
  });

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Autres actions à effectuer lors de la soumission du formulaire avec Web3Form

    try {
      // Soumission du formulaire à l'aide de Web3Form
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(event.target)
      });

      if (response.ok) {
        // Réinitialiser les valeurs des champs du formulaire
        setFormValues({
          lastName: '',
          firstName: '',
          email: '',
          phone: '',
          address: '',
          postalCode: '',
          prestation: '',
          message: ''
        });

        setShowSuccessPopup(true);
      }
    } catch (error) {
      // Gérer les erreurs de soumission du formulaire
      console.error('Une erreur s\'est produite lors de la soumission du formulaire :', error);
    }
  };


  useEffect(() => {
    if (showSuccessPopup) {
      const timer = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000); // Temps en millisecondes avant de masquer la pop-up (ici 3 secondes)

      return () => clearTimeout(timer);
    }
  }, [showSuccessPopup]);
  
  return (
    <div className='container-form-parent'>
      <div className="container-form-row">

        <div className="container-form">
          <div className="container-speak">
            <h2>Contactez moi !</h2>
            <p>Je serai ravi de répondre et de travailler avec vous, afin de créer un événement exceptionnel</p>
          </div>
          <div className="container-phone-mail">
            <div className="phone">
              <img src="/img/svg/phone.svg" alt="phone icon" />

              {user && user.map((userData) => (
                <div className="phone" key={userData.id}>
                  <p>{userData.phone}</p>
                </div>
              ))}

            </div>
            <div className="mail">
              <img src="/img/svg/mail.svg" alt="mail icon" />

              {user && user.map((userData) => (
                <a href={`mailto:${userData.email}`} key={userData.id}>
                  <div className="phone">
                    <p>{userData.email}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="container-form-reseau-icon">
            <div className="container-form-fb">
              <img src="/img/svg/facebook-black.svg" alt="facebook icon" className="social-icon" />
              <Link to="https://www.facebook.com/" target='_blank' rel="noopener noreferrer" >
                <p>facebook</p>
              </Link>
            </div>
            <div className="container-form-instagram">
              <img src="/img/svg/instagram-black.svg" alt="instagram icon" className="social-icon" />
              <Link to="https://www.instagram.com/" target='_blank' rel="noopener noreferrer">
                <p>instagram</p>
              </Link>
            </div>
            <div className="container-form-tiktok">
              <img src="/img/svg/tiktok-black.svg" alt="tiktok icon" className="tiktok" />
              <Link to="https://www.tiktok.com/" target='_blank' rel="noopener noreferrer">
                <p>tiktok</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-info-form">
          <div className="separation-line-form"></div>
          <div>
            <h2>Écrivez moi</h2>
            <form onSubmit={handleSubmit} >
              <input type="hidden" name="access_key" value={accessKey} />
              <div className="form-nom-prenom">
                <div className='form-nom'>
                  <label htmlFor="lastName">Nom<span>*</span> </label>
                  <input type="text" id="lastName" name="lastName" required placeholder='Votre nom' value={formValues.lastName}
                    onChange={(event) => setFormValues({ ...formValues, lastName: event.target.value })} />
                </div>
                <div className='form-prenom'>
                  <label htmlFor="firstName" placeholder='prenom'>Prénom<span>*</span></label>
                  <input type="text" id="firstName" name="firstName" required placeholder='Votre prénom' value={formValues.firstName}
                    onChange={(event) => setFormValues({ ...formValues, firstName: event.target.value })} />
                </div>
              </div>

              <div className="form-mail-phone">
                <div className='form-mail'>
                  <label htmlFor="email">Email<span>*</span></label>
                  <input type="email" id="email" name="email" required placeholder='Votre Email' value={formValues.email}
                    onChange={(event) => setFormValues({ ...formValues, email: event.target.value })} />
                </div>
                <div className='form-phone'>
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" id="phone" name="phone" placeholder='01 23 45 67 89'
                    value={formValues.phone}
                    onChange={(event) => setFormValues({ ...formValues, phone: event.target.value })} />
                </div>
              </div>

              <div className="form-adress-postal">
                <div className='form-adress'>
                  <label htmlFor="address">Adresse complète<span>*</span></label>
                  <input type="text" id="address" name="address" required placeholder='123 rue exemple' value={formValues.address}
                    onChange={(event) => setFormValues({ ...formValues, address: event.target.value })} />
                </div>
                <div className='form-postal'>
                  <label htmlFor="postalCode">Code postal<span>*</span></label>
                  <input type="text" id="postalCode" name="postalCode" required placeholder='51100' value={formValues.postalCode}
                    onChange={(event) => setFormValues({ ...formValues, postalCode: event.target.value })} />
                </div>
              </div>
              <div className='form-prestation'>
                <label htmlFor="prestation">Prestation<span>*</span></label>
                <select id="prestation" name="prestation" required value={formValues.prestation}
                  onChange={(event) => setFormValues({ ...formValues, prestation: event.target.value })}>
                  <option value="">Sélectionnez une prestation</option>
                  <option value="mariage">Mariage</option>
                  <option value="anniversaire">Anniversaire</option>
                  <option value="gender reveal">Gender Reveal</option>
                  <option value="foi et religion">Foi & Religion</option>
                </select>
              </div>
              <div className='form-message'>
                <label htmlFor="message">Message<span>*</span></label>
                <textarea id="message" name="message" required placeholder='Votre message' value={formValues.message}
                  onChange={(event) => setFormValues({ ...formValues, message: event.target.value })}></textarea>
              </div>
              <button type="submit" className='form-send-btn'>Envoyer</button>

            </form>
            {showSuccessPopup && (
              <div className="success-popup">
                <p>Merci, votre message a été envoyé avec succès !</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm