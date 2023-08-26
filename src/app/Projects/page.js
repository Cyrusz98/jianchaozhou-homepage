// pages/Projects.js

import React from 'react';
import Main from '../components/main';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <Main>
      <h1>Projects</h1>
      <Link to="/projects/gallery">View Photo Gallery</Link>
      {/* ... */}
    </Main>
  );
}

export default Projects;
