import React, { useEffect, useState } from "react";
import "./ZoneSingleProd.scss";
import { useParams } from "react-router-dom";
import { db } from "../../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Entete from '../../../components/Entete/Entete'
import Menu from '../../../components/Menu/Menu'
import Footer from '../../../components/Footer/Footer'
const ZoneSingleProd = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [updatedNom, setUpdatedNom] = useState("");
    const [updatedPrix, setUpdatedPrix] = useState("");
    const [updatedDesc, setUpdatedDesc] = useState("");
    const [updatedCat, setUpdatedCat] = useState("");
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const docRef = doc(db, "produits", productId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProduct({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const updateNom = async (id) => {
        const productDoc = doc(db, "produits", id);
        await updateDoc(productDoc, { nom: updatedNom });
        setIsPopupVisible(true); // Afficher la pop-up
        setTimeout(() => {
            setIsPopupVisible(false); // Masquer la pop-up après quelques secondes
            window.location.reload(); // Rafraîchir la page
        }, 3000);
    };

    const updatePrix = async (id) => {
        const productDoc = doc(db, "produits", id);
        await updateDoc(productDoc, { prix: updatedPrix });
        setIsPopupVisible(true); // Afficher la pop-up
        setTimeout(() => {
            setIsPopupVisible(false); // Masquer la pop-up après quelques secondes
            window.location.reload(); // Rafraîchir la page
        }, 3000);
    };
    const updateDesc = async (id) => {
        const productDoc = doc(db, "produits", id);
        await updateDoc(productDoc, { description: updatedDesc });
        setIsPopupVisible(true); // Afficher la pop-up
        setTimeout(() => {
            setIsPopupVisible(false); // Masquer la pop-up après quelques secondes
            window.location.reload(); // Rafraîchir la page
        }, 3000);
    };
    const updateCat = async (id) => {
        const productDoc = doc(db, "produits", id);
        await updateDoc(productDoc, { categorie: updatedCat });
        setIsPopupVisible(true); // Afficher la pop-up
        setTimeout(() => {
            setIsPopupVisible(false); // Masquer la pop-up après quelques secondes
            window.location.reload(); // Rafraîchir la page
        }, 3000);
    };

    return (
        <div className="zone-single-prodict-parent">
            <Entete />
            <Menu />
            <div className="zoneadmin-title">
                <div className="zoneadmin-line"></div>
                <h2>Modifier un produit existant</h2>
            </div>

            <div className="zone-single-product">
                <div className="zone-single-product-img">
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="zone-single-product-text">
                    <p>Nom: <br/> <span>{product.nom}</span></p>
                    
                    <p>Description: <br/> <span>{product.description}</span></p>
                    <p>Prix: <br/> <span>{product.prix}€</span></p>
                    <p>catégorie:  <br/> <span>{product.categorie}</span></p>
                </div>
            
                

                <input
                    type="number"
                    value={updatedPrix}
                    onChange={(e) => setUpdatedPrix(e.target.value)}
                />
                <button onClick={() => updatePrix(product.id)}>Mettre à jour le prix</button>

                <input
                    type="number"
                    value={updatedPrix}
                    onChange={(e) => setUpdatedPrix(e.target.value)}
                />
                <button onClick={() => updatePrix(product.id)}>Mettre à jour le prix</button>

                <input
                    type="number"
                    value={updatedPrix}
                    onChange={(e) => setUpdatedPrix(e.target.value)}
                />
                <button onClick={() => updatePrix(product.id)}>Mettre à jour le prix</button>
          
            </div>

            <div className="zone-single-product-text">
                    <p>Nom: <br /> <span>{product.nom}</span></p>
                    <input
                        type="text"
                        value={updatedNom}
                        onChange={(e) => setUpdatedNom(e.target.value)}
                    />
                    <button onClick={() => updateNom(product.id)}>Modifier le nom</button>

                    <p>Description: <br /> <span>{product.description}</span></p>
                    <input
                        type="text"
                        value={updatedDesc}
                        onChange={(e) => setUpdatedDesc(e.target.value)}
                    />
                    <button onClick={() => updateDesc(product.id)}>Modifier la description</button>
                    
                    <p>Prix: <br /> <span>{product.prix}€</span></p>
                    <input
                        type="number"
                        value={updatedPrix}
                        onChange={(e) => setUpdatedPrix(e.target.value)}
                    />
                    <button onClick={() => updatePrix(product.id)}>Modifier le prix</button>

                    <p>catégorie:  <br /> <span>{product.categorie}</span></p>
                    <input
                        type="text"
                        value={updatedCat}
                        onChange={(e) => setUpdatedCat(e.target.value)}
                    />
                    <button onClick={() => updateCat(product.id)}>Mettre à jour le prix</button>
                </div>
           


            {isPopupVisible && <div className="popup">Données mises à jour !</div>}

            <Footer />
        </div>
    );
};

export default ZoneSingleProd;
