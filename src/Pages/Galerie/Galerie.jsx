import React from 'react';
import { useEffect, useState } from 'react';
import './Galerie.scss';

// Import des composants
import Entete from '../../components/Entete/Entete';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';

const Galerie = () => {
  const [feed, setFeed] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6);

  useEffect(() => {
    const access_token = import.meta.env.VITE_ACCESS_TOKEN;
    const url = `https://graph.instagram.com/me/media?fields=media_count,permalink,media_url,caption,thumbnail_url,media_type&access_token=${access_token}`;

    async function fetchInstagramFeed() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFeed(data.data);
      } catch (error) {
        console.log(
          'Error loading Instagram feed! Maybe because your access token is wrong, you don\'t set feeds as full or you have a bad connection!',
          error
        );
      }
    }

    fetchInstagramFeed();
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  // Filtrer la publication spécifique à exclure
  const filteredFeed = feed.filter((post) => post.permalink !== 'https://www.instagram.com/p/Cswsq6uADns/');

  return (
    <div>
      <Entete />
      <Menu />
      <div className="prestations-title-gallery">
        <div className="prestations-line-gallery"></div>
        <h2>Galerie</h2>
      </div>
      <div className="prestations-title-tagline-gallery">
        <h2>Explorez la galerie et laissez-vous <br /> séduire par mes réalisations.</h2>
      </div>
      <div className="instagram-feed">
        <div className="instagram-grid">
          {filteredFeed.slice(0, visiblePosts).map((post) => (
            <div key={post.id} className="instagram-item">
              <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                {post.media_type === 'VIDEO' ? (
                  <video src={post.media_url} alt="Instagram video" muted autoPlay loop />
                ) : (
                  <img src={post.media_url} alt="Instagram post" />
                )}
                {/* <div className="instagram-overlay">
                  <div className="instagram-overlay-text">{post.caption}</div>
                </div> */}
              </a>
            </div>
          ))}
        </div>
        {visiblePosts < filteredFeed.length && (
          <div className="center-btn-gallery-load-more">
            <button className="btn-gallery-loaf-more" onClick={loadMorePosts}>
              Voir plus
            </button>
          </div>
        )}
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Galerie;
