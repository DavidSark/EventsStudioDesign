import React from 'react'

//import des composants
import Entete from '../../components/Entete/Entete'
import Menu from '../../components/Menu/Menu'
import Home from '../../components/Home/Home'
import Footer from '../../components/Footer/Footer'
// import ContactForm from '../components/ContactForm/ContactForm'


//import feuille de style
import '../Global.scss'

const Accueil = () => {
  return (
    <div className='global'>
      <Entete />
      <Menu />
      <Home />
      <Footer/>
    </div>
  )
}

export default Accueil