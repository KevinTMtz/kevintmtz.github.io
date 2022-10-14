import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import AboutMe from './containers/AboutMe';
import MyProjects from './containers/MyProjects';

import './styles/general.css';
import './styles/about.css';
import './styles/projects.css';

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='about-me' element={<AboutMe />} />
        <Route path='my-projects' element={<MyProjects />} />

        <Route path='*' element={<Navigate to='about-me' replace />} />
      </Routes>
    </div>
  );
};

export default App;
