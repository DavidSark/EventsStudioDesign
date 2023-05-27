import React from 'react'
import './Boutique.scss'
import { DataGrid } from "@mui/x-data-grid";
import { productColumns } from "../../config/datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";


const Boutique = () => {


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
    return data.map((product) => (
      <div key={product.id} className="product">
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