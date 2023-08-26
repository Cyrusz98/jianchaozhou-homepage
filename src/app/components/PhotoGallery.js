// pages/PhotoGallery.js

import React from 'react';
import Main from '../components/main';

function PhotoGallery() {
  return (
    <Main>
      <h2>Photo Gallery</h2>
      <div className="photo-container">
        <img src="chile.jpg" alt="Photo 1" />
        <img src="breath.jpg" alt="Photo 2" />
        <img src="boat.jpg" alt="Photo 3" />
        {/* Add more photos */}
      </div>
    </Main>
  );
}

export default PhotoGallery;
