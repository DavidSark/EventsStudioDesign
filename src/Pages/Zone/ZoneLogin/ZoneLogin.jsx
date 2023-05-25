import React from 'react'
import './ZoneLogin.scss'
import Entete from '../../../components/Entete/Entete'
import Menu from '../../../components/Menu/Menu'

import Footer from '../../../components/Footer/Footer'


import Login from '../../../components/Auth/Login'

const ZoneLogin = () => {
  return (
    <div>
      <Entete />
      <Menu />
   
        <Login />
    
      <Footer />
    </div>
  )
}

export default ZoneLogin