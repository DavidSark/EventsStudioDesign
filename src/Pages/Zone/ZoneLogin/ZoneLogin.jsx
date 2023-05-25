import React from 'react'
import './ZoneLogin.scss'
import Entete from '../../../components/Entete/Entete'
import Menu from '../../../components/Menu/Menu'
import { Auth } from '../../../components/Auth/auth'
import Footer from '../../../components/Footer/Footer'
const ZoneLogin = () => {
  return (
    <div>
        <Entete/>
        <Menu/>
        <Auth/>
        <Footer/>
    </div>
  )
}

export default ZoneLogin