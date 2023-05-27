import React, { useState } from 'react';
import './ContactForm.scss'
import { HashLink as Link } from 'react-router-hash-link';
import { db } from "../../config/firebase"
import { collection, addDoc } from "firebase/firestore";

const ContactForm = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Vérifiez si la base de données Firestore est disponible
    if (!db) {
      console.error('La base de données Firestore n\'est pas disponible');
      return;
    }
  
    // Récupérez les valeurs des champs de formulaire
    const { lastName, firstName, email, phone, address, postalCode, prestation, message } = event.target.elements;
  
    try {
      // Enregistrez les données dans Firebase en utilisant addDoc
      const docRef = await addDoc(collection(db, 'users'), {
        lastName: lastName.value,
        firstName: firstName.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        postalCode: postalCode.value,
        prestation: prestation.value,
        message: message.value
      });
  
      event.target.reset();
      console.log('Formulaire soumis avec succès ! Document ID :', docRef.id);
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
    }
  };
  
  return (
    <div className='container-form-parent'>
      <div className="container-form-row">
      
        <div className="container-info-form">
          <div className="separation-line-form"></div>
          <div>
            <h2>Écrivez moi</h2>
            <form onSubmit={handleSubmit}>
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
                  <input type="tel" id="phone" name="phone" placeholder='01 23 45 67 89' />
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
                <select id="prestation" name="prestation" required>
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