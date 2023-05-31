
import React, { useState, useEffect } from 'react'
import './Footer.scss'
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { auth } from '../../config/firebase'
import { db } from "../../config/firebase"
import { collection, addDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from 'firebase/auth'
const Footer = () => {
    //admin connecté ? : 

    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();
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

    //récupérer les données mobile et email et adresse : 
    const [user, setUser] = useState(null);
    const userCollectionRef = collection(db, "user");
    const [editAdress, setEditAdress] = useState(false);

    //useEffect pour appeler les données de la bdd
    useEffect(() => {

        const getUser = async () => {
            const data = await getDocs(userCollectionRef);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getUser();
    }, []);


    //fonction pour modifier l'adresse
    const updateUserAdress = async () => {
        try {
            const userDocRef = doc(db, 'user', user[0].id);
            await updateDoc(userDocRef, { adress: user[0].adress });
            setEditAdress(false);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };



    //fonction pour revenir en haut de la page : 
    const handleClick = () => {
        window.scroll(0, 0); // Défilement de la page vers le haut
        setIsMenuOpen(false); // Fermeture du menu
      };
    return (
        <div className='footer'>
            <div className='container'>

                <div className="left">
                    <div className='left-text'>
                        <h1>event's studio design</h1>
                        <p>décoratrice événementielle basé à Reims et dans le Grand Est</p>
                        {user && !editAdress ? (
                            <div className="footer-adress">
                                {user.map((userData, index) => (
                                    <p key={index}>{userData.adress}</p>
                                ))}

                                {authUser ? <> <button onClick={() => setEditAdress(true)}>+</button></> : <div></div>}

                            </div>
                        ) : (
                            authUser && (
                                <div className="btn-adress-input">
                                    <input
                                        type="text"
                                        value={user ? user[0].adress : ""}
                                        onChange={(e) => {
                                            setUser((prevUser) => [
                                                { ...prevUser[0], adress: e.target.value },
                                            ]);
                                        }}
                                    />
                                    <button onClick={updateUserAdress}>Enregistrer</button>
                                </div>
                            )
                        )}
                        <p>{user && user[0] ? user[0].phone : ''}</p>
                        <a href={`mailto:${user && user[0] ? user[0].email : ''}`}>
                            <p>{user && user[0] ? user[0].email : ''}</p>
                        </a>
                    </div>
                </div>


                <div className="container-line">
                    <div className="footer-line"></div>
                </div>
                <div className="center">
                    <img src="/img/svg/logo_noir.svg" alt="events studio design logo" />
                    <p>Copyright © 2023 event’s studio design. Tous droits réservés.</p>
                </div>

                <div className="container-line">
                    <div className="footer-line"></div>
                </div>

                <div className="right">
                    <div className="right-prestations-website">
                        <div className='link-prestations'>
                            <p>Préstations</p>
                            <Link>Mariage</Link>
                            <Link>Anniversaire</Link>
                            <Link>Gender Reveal</Link>
                            <Link>Foi & Religion</Link>
                            <Link>Galerie</Link>
                            <Link>Contact</Link>
                        </div>

                        <div className='link-website'>
                            <p>Légal</p>

                            <Link>Politique de confidentialité</Link>
                            <Link>Mentions Légales</Link>
                            <Link to="/zoneadmin" onClick={handleClick}>Zone Privée</Link>
                            <div className="link-social">
                                <p>Réseaux</p>
                                <Link to="https://www.facebook.com/profile.php?id=100063230651252" target='_blank'>facebook</Link>
                                <Link to="https://www.instagram.com/eventsstudiodesign/" target='_blank'>instagram</Link>
                                <Link to="https://www.tiktok.com/@eventsstudiodesign" target='_blank'>tiktok</Link>

                            </div>
                        </div>

                    </div>


                </div>
            </div>



        </div>
    )
}

export default Footer