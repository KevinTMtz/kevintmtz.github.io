import React, { useState } from 'react';

import NavBar from './components/NavBar';
import AboutMe from './containers/AboutMe';
import MyProjects from './containers/MyProjects';

import './styles/general.css';
import './styles/about.css';
import './styles/projects.css';

import { ObjectByKey } from './types/types';
import { Pages } from './enums/pages';

const App = () => {
  const pages: ObjectByKey = {
    [Pages.AboutMe]: AboutMe,
    [Pages.MyProjects]: MyProjects,
  };

  const [currentPage, setCurrentPage] = useState<Pages>(Pages.AboutMe);

  return (
    <div>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {pages[`${currentPage}`]()}

      <section id='myAnimoji'>
        <img src='img/WWDC.jpeg' alt='TODO' />
      </section>
    </div>
  );
};

export default App;
