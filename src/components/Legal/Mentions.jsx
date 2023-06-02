import React, {useState, useEffect} from 'react'
import './Mentions.scss'

//import des composants
import Entete from "../../components/Entete/Entete"
import Menu from "../../components/Menu/Menu"
import Footer from "../../components/Footer/Footer"
import { Link } from 'react-router-dom'


//Appel des besoins Firebase pour la connexion et l'accés à la bdd
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { db } from "../../config/firebase"
import { collection,getDocs } from "firebase/firestore";


const Mentions = () => {

    //useState pour récupérer les données de la bdd adresse et email et numéro
    const [user, setUser] = useState(null);
    const userCollectionRef = collection(db, "user");
    const [editAdress, setEditAdress] = useState(false);
  
  
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
              setAuthUser(user)
          } else {
              setAuthUser(null);
          }
      })
  
      return () => {
          listen();
      }
  }, []);
  
  //useEffect pour appeler les données de la bdd
  useEffect(() => {
  
    const getUser = async () => {
        const data = await getDocs(userCollectionRef);
        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
  
    getUser();
  }, []);
  
  return (
    <div className='container-parent-mentions'>
      <Entete />
      <Menu />

      <div className='container-mentions'>
        <div className="prestations-title-gallery">
          <div className="prestations-line-gallery"></div>
          <h2>Mentions légales</h2>
        </div>
        <div className="mentions-text">
          <h2>Entreprise :</h2>
          <p>Nom de l'entreprise : Event's Studio Design</p>
          <p>Siège social : {user && user[0] ? user[0].adress : ''}</p>
          <p>Téléphone : {user && user[0] ? user[0].phone : ''}</p>
          <p> E-mail : {user && user[0] ? user[0].email : ''}</p>

          <p> Responsable : Mariam BAGHOYAN<br /></p>

          <p> Numéro de Siret : 895 351 104 00016</p>

          <h2>Propriété intellectuelle :</h2>
          <p>Tout le contenu de ce site web, y compris les textes, les images, les graphiques et les logos, est protégé par le droit d'auteur et est la propriété exclusive d'Events Studio Design, sauf indication contraire. Toute reproduction, distribution, modification ou utilisation non autorisée du contenu est strictement interdite.</p>

          <h2>Confidentialité et traitement des données :</h2>
          <p>Nous respectons la confidentialité et la protection des données personnelles de nos utilisateurs. Les informations que vous nous fournissez sont utilisées uniquement dans le but de répondre à vos demandes et de vous fournir des services liés à nos activités. Pour plus d'informations sur notre politique de confidentialité et sur vos droits en matière de protection des données, veuillez consulter notre page dédiée à la <Link to="/politique">politique de confidentialité.</Link></p>

          <h2>Responsabilité :</h2>
          <p>Events Studio Design décline toute responsabilité quant à l'exactitude, l'exhaustivité ou la pertinence des informations présentes sur ce site web. Nous ne pouvons être tenus responsables des erreurs, des omissions, des dommages directs ou indirects résultant de l'utilisation de ce site ou de tout site lié.</p>

          <h2>Liens externes :</h2>
          <p>Ce site web peut contenir des liens vers des sites web externes. Nous déclinons toute responsabilité quant au contenu ou à la politique de confidentialité de ces sites externes.</p>

          <h2>Cookies :</h2>
          <p>Ce site web n'utilise pas les cookies. Vous pouvez modifier les paramètres de cookies dans votre navigateur à tout moment.</p>
          
          <h2>Juridiction applicable :</h2>
          <p>Ces mentions légales sont régies par les lois en vigueur du Pays. Tout litige découlant de l'utilisation de ce site web sera soumis à la juridiction exclusive des tribunaux compétents du Pays.</p>
        </div>
     
        <Footer />
      </div>
    </div>
  )
}

export default Mentions
