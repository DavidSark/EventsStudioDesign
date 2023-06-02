import React, {useEffect, useState} from 'react'

//Appel des besoins Firebase pour la connexion et l'accés à la bdd
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { db } from "../../config/firebase"
import { collection,getDocs } from "firebase/firestore";
//Import des composants :
import Entete from "../../components/Entete/Entete"
import Menu from "../../components/Menu/Menu"
import Footer from "../../components/Footer/Footer"


const Politique = () => {

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
          <h2>Politique de confidentialité</h2>
        </div>
        <div className="mentions-text">
          <p>Chez Event's Studio Design, nous attachons une grande importance à la confidentialité et à la protection des données personnelles de nos utilisateurs. Cette politique de confidentialité décrit comment nous recueillons, utilisons et protégeons les informations que vous nous fournissez lorsque vous utilisez notre site web.</p>

          <h2>Collecte d'informations :</h2>
          <p>Nous collectons des informations personnelles lorsque vous nous les fournissez volontairement, telles que votre nom, votre adresse e-mail, votre numéro de téléphone, etc., lorsque vous remplissez un formulaire de contact.</p>

          <h2>Utilisation des informations :</h2>
          <p>Les informations que vous nous fournissez sont utilisées dans le but de répondre à vos demandes, de vous fournir des services liés à notre activité, ou de vous informer des mises à jour ou des nouveautés de notre entreprise. </p>

          <h2>Protection des informations :</h2>
          <p>Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations personnelles contre toute perte, utilisation abusive, accès non autorisé, divulgation ou modification. Cependant, veuillez noter qu'aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée, et nous ne pouvons garantir la sécurité absolue de vos informations.</p>

          <h2>Divulgation à des tiers :</h2>
          <p>Nous ne vendons, ne louons ni ne divulguons vos informations personnelles à des tiers, sauf si nous avons obtenu votre consentement ou si la loi l'exige.</p>

          <h2>Cookies :</h2>
          <p>Ce site web n'utilise pas les cookies. Vous pouvez modifier les paramètres de cookies dans votre navigateur à tout moment.</p>
          
          <h2>Droits des utilisateurs :</h2>
          <p>Vous avez le droit d'accéder, de rectifier, de supprimer ou de limiter l'utilisation de vos informations personnelles. Vous pouvez également vous opposer à leur traitement ou demander la portabilité de vos données. Pour exercer ces droits, veuillez nous contacter via les coordonnées fournies ci-dessous.</p>

          <h2>Modifications de la politique de confidentialité :</h2>
          <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date d'entrée en vigueur mise à jour.</p>
          
          <h2>Contactez-nous :</h2>
          <p>Si vous avez des questions concernant notre politique de confidentialité ou si vous souhaitez exercer vos droits en matière de protection des données, veuillez nous contacter à l'adresse suivante :</p>
          <p>Event's Studio Design</p>
          <p>Adresse : {user && user[0] ? user[0].adress : ''}</p>
          <p>Tél : {user && user[0] ? user[0].phone : ''}</p>
          <p>Email: {user && user[0] ? user[0].email : ''}</p>
        </div>
     
        <Footer />
      </div>
    </div>
  )
}

export default Politique