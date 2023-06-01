import React from 'react';
import './NotFound.scss'
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className='container-404'>
      <img src="img/svg/logo_noir.svg" alt="" />
      <h1>event studio design</h1>
      <p className='error-404'>Erreur <span>404</span></p>
      <p className='text-404'>Il semblerait que vous êtes perdu</p>
      <Link to={"/"}>
        <button className='btn-error'>Retour à l'accueil</button>
      </Link>
    </div>
  );
};

export default NotFound;
