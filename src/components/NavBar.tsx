import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAboutMe = location.pathname === '/about-me';

  return (
    <header
      className='top'
      style={{
        height: isAboutMe ? '100vh' : undefined,
      }}
    >
      <div className='limiterDiv'>
        <div id='myName'>
          <h1 id='bigName'>Kevin Torres Martínez</h1>
          <h1 id='middleName'>Kevin Torres</h1>
          <h1 id='smallName'>Kevin</h1>

          <div id='accounts'>
            {/* <a>
              <img className='iconsAccounts' src='img/iconCV.svg' />
            </a> */}
            <a
              href='https://github.com/KevinTMtz'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='iconsAccounts'
                src='img/iconGithub.svg'
                alt='TODO'
              />
            </a>
            <a
              href='http://www.linkedin.com/in/kevintorresmtz'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='iconsAccounts'
                src='img/iconLinkedin.svg'
                alt='TODO'
              />
            </a>
            <a
              href='https://codeforces.com/profile/KevinTMtz'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='iconsAccounts'
                src='img/iconCodeforces.svg'
                alt='TODO'
              />
            </a>
            <a
              href='https://www.hackerrank.com/KevinTMtz'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='iconsAccounts'
                src='img/iconHackerrank.svg'
                alt='TODO'
              />
            </a>
            {/* <a href='https://twitter.com' target='_blank'>
              <img
                className='iconsAccounts'
                src='img/iconTwitter.svg'
                height='45px'
              />
            </a> */}
          </div>
        </div>
      </div>

      <div id='optionsBar'>
        <button
          onClick={() => navigate('/about-me')}
          style={{ color: isAboutMe ? 'white' : undefined }}
        >
          About Me
        </button>
        <button
          onClick={() => navigate('/my-projects')}
          style={{ color: !isAboutMe ? 'white' : undefined }}
        >
          My Projects
        </button>
      </div>

      {isAboutMe && (
        <section id='scrollIndicator'>
          <span></span>
        </section>
      )}
    </header>
  );
};

export default NavBar;
