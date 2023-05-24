import React, { useEffect, useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';

function RestrictedArea() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Écouter les changements d'état de l'utilisateur
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // L'utilisateur est connecté
        setUser(user);
      } else {
        // L'utilisateur n'est pas connecté
        setUser(null);
      }
    });

    // Nettoyer l'écouteur lors du démontage du composant
    return () => unsubscribe();
  }, []);

  if (!user) {
    // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
    return <Redirect to="/login" />;
  }

  // Afficher le contenu restreint si l'utilisateur est connecté
  return (
    <div>
      <h2>Zone restreinte</h2>
      {/* ... Contenu restreint ... */}
    </div>
  );
}

export default RestrictedArea;
