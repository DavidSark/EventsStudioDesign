import React from 'react'
import "./Entete.scss";
// import Facebook from '../../../public/img/svg/facebook.svg'
// import Instagram from '../../../public/img/svg/instagram.svg'
// import Tiktok from '../../../public/img/svg/tiktok.svg'

const Entete = () => {
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
    </div>
  )
}

export default Entete