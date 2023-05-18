import React from 'react'
import './ContactForm.scss'

const ContactForm = () => {
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
              <p>adressemail@gmail.com</p>
            </div>
          </div>
          <div className="container-form-reseau-icon">
            <div className="container-form-fb">
              <img src="./img/svg/facebook-black.svg" alt="facebook icon" className="social-icon" />
              <p>facebook</p>
            </div>
            <div className="container-form-instagram">
              <img src="./img/svg/instagram-black.svg" alt="instagram icon" className="social-icon" />
              <p>instagram</p>
            </div>
            <div className="container-form-tiktok">
              <img src="./img/svg/tiktok-black.svg" alt="tiktok icon" className="tiktok" />
              <p>tiktok</p>
            </div>
          </div>
        </div>



        <div className="container-info-form">
          <div className="separation-line-form"></div>
          <div>
            <h2>Écrivez moi</h2>
            <form>
              <div className="form-nom-prenom">
                <div className='form-nom'>
                  <label for="lastName">Nom<span>*</span> </label>
                  <input type="text" id="lastName" name="lastName" required placeholder='Votre nom' />
                </div>
                <div className='form-prenom'>
                  <label for="firstName" placeholder='prenom'>Prénom<span>*</span></label>
                  <input type="text" id="firstName" name="firstName" required placeholder='Votre prénom' />
                </div>
              </div>

              <div className="form-mail-phone">
                <div className='form-mail'>
                  <label for="email">Email<span>*</span></label>
                  <input type="email" id="email" name="email" required placeholder='Votre prénom' />
                </div>
                <div className='form-phone'>
                  <label for="phone">Téléphone</label>
                  <input type="tel" id="phone" name="phone" placeholder='01 23 45 67 89' />
                </div>
              </div>

              <div className="form-adress-postal">
                <div className='form-adress'>
                  <label for="address">Adresse complète<span>*</span></label>
                  <input type="text" id="address" name="address" required placeholder='123 rue exemple' />
                </div>
                <div className='form-postal'>
                  <label for="postalCode">Code postal<span>*</span></label>
                  <input type="text" id="postalCode" name="postalCode" required placeholder='51100' />
                </div>
              </div>
              <div className='form-prestation'>
                <label for="prestation">Prestation<span>*</span></label>
                <select id="prestation" name="prestation" required>
                  <option value="">Sélectionnez une prestation</option>
                  <option value="mariage">Mariage</option>
                  <option value="anniversaire">Anniversaire</option>
                  <option value="gender reveal">Gender Reveal</option>
                  <option value="foi et religion">Foi & Religion</option>
                </select>
              </div>
              <div className='form-message'>
                <label for="message">Message<span>*</span></label>
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