import React, { useEffect, useState } from "react";
import "./ZoneSingleProd.scss";
import { useParams } from "react-router-dom";
import { db } from "../../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const ZoneSingleProd = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [updatedNom, setUpdatedNom] = useState("");
    const [updatedPrix, setUpdatedPrix] = useState("");
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

    return (
        <div>
            <h2>Product Page</h2>
            <p>Product ID: {product.id}</p>
            <p>Prix: {product.prix}</p>
            <p>Nom: {product.nom}</p>
            <img src={product.img} alt={product.name} />

            <input
                type="text"
                value={updatedNom}
                onChange={(e) => setUpdatedNom(e.target.value)}
            />
            <button onClick={() => updateNom(product.id)}>Mettre à jour le nom</button>

            <input
                type="number"
                value={updatedPrix}
                onChange={(e) => setUpdatedPrix(e.target.value)}
            />
            <button onClick={() => updatePrix(product.id)}>Mettre à jour le prix</button>

            {isPopupVisible && <div className="popup">Données mises à jour !</div>}
        </div>
    );
};

export default ZoneSingleProd;
