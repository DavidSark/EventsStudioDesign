import React from 'react'
import { useEffect, useState } from "react";
import './Galerie.scss'


//import des composants 
import Entete from '../../components/Entete/Entete'
import Menu from '../../components/Menu/Menu'


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
          "Error loading Instagram feed! Maybe because your access token is wrong, you don't set feeds as full or you have a bad connection!",
          error
        );
      }
    }
    fetchInstagramFeed();
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  return (
    <div>
    <Entete />
    <Menu/>
    <div className="instagram-feed">
      <div className="instagram-grid">
        {feed.slice(0, visiblePosts).map((post) => (
          <div key={post.id} className="instagram-item">
            <a href={post.permalink} target="_blank" rel="noreferrer">
              {post.media_type === "VIDEO" ? (
               <video src={post.media_url} alt="Instagram post" muted autoPlay loop />
              ) : (
                <img src={post.media_url} alt="Instagram post" />
              )}
              <div className="instagram-overlay">
                <div className="instagram-overlay-text">{post.caption}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
      {visiblePosts < feed.length && (
        <button className="instagram-load-more" onClick={loadMorePosts}>
          Voir plus
        </button>
      )}
    </div>
</div>
  )
}

export default Galerie