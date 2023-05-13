import React from 'react'
import './ContactForm.scss'

const ContactForm = () => {
  return (
    <div className='container-form-parent'>
      <div className="container-form">
        <div className="container-speak">
          <img src="./img/leaf-black.png" alt="leaf decoration" />
          <h2>Parlons-en</h2>
          <p>Cotton candy muffin cupcake sugar plum marzipan </p>

          <div className="container-phone-mail">
            <div className="phone">
              <img src="./img/svg/phone.svg" alt="phone icon" />
              <p>07 81 21 81 30</p>
            </div>
            <div className="mail">
              <img src="./img/svg/mail.svg" alt="mail icon" />
              <p></p>
            </div>

            <div className="container-form-reseau-icon">
              <img src="./img/svg/facebook.svg" alt="facebook icon" />
              <img src="./img/svg/instagram.svg" alt="instagram icon" />
              <img src="./img/svg/tiktok.svg" alt="tiktok icon" />
            </div>
          </div>
        </div>

        <div className="container-info-form">
          <form>
            <div>
              <label for="name">Nom :</label>
              <input type="text" id="name" name="name" required/>
            </div>
            <div>
              <label for="email">Email :</label>
              <input type="email" id="email" name="email" required/>
            </div>
            <div>
              <label for="message">Message :</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm