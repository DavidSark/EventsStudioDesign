import React from 'react'
import './ZoneLogin.scss'
import Entete from '../../../components/Entete/Entete'
import Menu from '../../../components/Menu/Menu'
import { Auth } from '../../../components/Auth/auth'
const ZoneLogin = () => {
  return (
    <div>
        <Entete/>
        <Menu/>
        <Auth/>
    </div>
  )
}

export default ZoneLogin