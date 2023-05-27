
import './Boutique.scss'


import { Link, useNavigate } from "react-router-dom";
import {React, useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";


const Boutique = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "produits"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);


  const renderProducts = () => {
    const handleProductClick = (productId) => {
      navigate(`/boutique/${productId}`);
    };
    
    return data.map((product) => (
      <div key={product.id} className="product"  onClick={() => handleProductClick(product.id)}>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.categorie}</p>
        <p>{product.prix}€</p>
      </div>
    ));
  };
  


  return (
    <div className="datatable">

      <div className="boutique">
        <div className="grid">{renderProducts()}</div>
      </div>
    </div>
  );
};



export default Boutique