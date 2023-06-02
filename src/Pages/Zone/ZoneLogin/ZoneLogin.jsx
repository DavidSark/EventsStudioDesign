import React from 'react'
import './ZoneLogin.scss'

//import des composants
import Entete from '../../../components/Entete/Entete'
import Menu from '../../../components/Menu/Menu'
import Footer from '../../../components/Footer/Footer'
import Login from '../../../components/Auth/Login'

const ZoneLogin = () => {
  return (
    <div>
      <Entete />
      <Menu />
      <div className="title-zone-privee">
                    <div className="line-zone-privee"></div>
                    <h2>Zone privée</h2>
                </div>
                
        <Login />
    
      <Footer />
    </div>
  )
}

export default ZoneLogin