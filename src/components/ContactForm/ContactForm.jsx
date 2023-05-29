import React, { useState } from 'react';
import './ContactForm.scss'
import { HashLink as Link } from 'react-router-hash-link';
import { db } from "../../config/firebase"
import { collection, addDoc } from "firebase/firestore";

const ContactForm = () => {

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    adress: "",
    postalCode: "",
    prestation: "",
    message: "",
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(formDetails)
    });
    if (response.ok) {
      try {
        let result = await response.json();
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
          setStatus({ success: true, message: "Message sent successfully" });
        } else {
          setStatus({ success: false, message: "Something went wrong" });
        }
      } catch (error) {
        setStatus({ success: false, message: "Error parsing JSON response" });
      }
    } else {
      setStatus({ success: false, message: "Network error" });
    }
  }

  return (
    <div className='container-form-parent'>
      <div className="container-form-row">

        <div className="container-form">
          <div className="container-speak">
            {/* <img className='leaf-black' src="./img/svg/logo_noir.svg" alt="leaf decoration" /> */}
            <h2>Parlons-en</h2>
            <p>Cotton candy muffin cupcake sugar plum marzipan </p>
          </div>
          <div className="container-phone-mail">
            <div className="phone">
              <img src="./img/svg/phone.svg" alt="phone icon" />
              <p>07 81 21 81 30</p>
            </div>
            <div className="mail">
              <img src="./img/svg/mail.svg" alt="mail icon" />
              <a href="mailto:evensstudiodesign@outlook.fr">
                <p>evensstudiodesign@outlook.fr</p>
              </a>
            </div>
          </div>
          <div className="container-form-reseau-icon">
            <div className="container-form-fb">
              <img src="./img/svg/facebook-black.svg" alt="facebook icon" className="social-icon" />
              <Link to="https://www.facebook.com/profile.php?id=100063230651252" target='_blank'>
                <p>facebook</p>
              </Link>
            </div>
            <div className="container-form-instagram">
              <img src="./img/svg/instagram-black.svg" alt="instagram icon" className="social-icon" />
              <Link to="https://www.instagram.com/eventsstudiodesign/" target='_blank'>
                <p>instagram</p>
              </Link>
            </div>
            <div className="container-form-tiktok">
              <img src="./img/svg/tiktok-black.svg" alt="tiktok icon" className="tiktok" />
              <Link to="https://www.tiktok.com/@eventsstudiodesign" target='_blank'>
                <p>tiktok</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-info-form">
          <div className="separation-line-form"></div>
          <div>
            <h2>Écrivez moi</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-nom-prenom">
                <div className='form-nom'>
                  <label htmlFor="lastName">Nom<span>*</span> </label>
                  <input type="text" value={formDetails.lastName} id="lastName" name="lastName" required placeholder='Votre nom' onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                </div>
                <div className='form-prenom'>
                  <label htmlFor="firstName" placeholder='prenom'>Prénom<span>*</span></label>
                  <input type="text" value={formDetails.firstName} id="firstName" name="firstName" required placeholder='Votre prénom' onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                </div>
              </div>

              <div className="form-mail-phone">
                <div className='form-mail'>
                  <label htmlFor="email">Email<span>*</span></label>
                  <input type="email" value={formDetails.email} id="email" name="email" required placeholder='Votre prénom' onChange={(e) => onFormUpdate("email", e.target.value)} />
                </div>
                <div className='form-phone'>
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" value={formDetails.phone} id="phone" name="phone" placeholder='01 23 45 67 89'
                    onChange={(e) => onFormUpdate("phone", e.target.value)} />
                </div>
              </div>

              <div className="form-adress-postal">
                <div className='form-adress'>
                  <label htmlFor="address">Adresse complète<span>*</span></label>
                  <input type="text" value={formDetails.adress} id="address" name="address" required placeholder='123 rue exemple' onChange={(e) => onFormUpdate("adress", e.target.value)} />
                </div>
                <div className='form-postal'>
                  <label htmlFor="postalCode">Code postal<span>*</span></label>
                  <input type="text" value={formDetails.postalCode} id="postalCode" name="postalCode" required placeholder='51100' onChange={(e) => onFormUpdate("postalCode", e.target.value)} />
                </div>
              </div>
              <div className='form-prestation'>
                <label htmlFor="prestation">Prestation<span>*</span></label>
                <select id="prestation" value={formDetails.prestation} name="prestation" required onChange={(e) => onFormUpdate("prestation", e.target.value)}>
                  <option value="">Sélectionnez une prestation</option>
                  <option value="mariage">Mariage</option>
                  <option value="anniversaire">Anniversaire</option>
                  <option value="gender reveal">Gender Reveal</option>
                  <option value="foi et religion">Foi & Religion</option>
                </select>
              </div>
              <div className='form-message'>
                <label htmlFor="message">Message<span>*</span></label>
                <textarea id="message" value={formDetails.message} name="message" required placeholder='Votre message' onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
              </div>
              <button type="submit" className='form-send-btn'>{buttonText}</button>
              {status.message && (
                <div className="row">
                  <p className={status.success === false ? "danger" : "success"}>
                    {status.message}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm