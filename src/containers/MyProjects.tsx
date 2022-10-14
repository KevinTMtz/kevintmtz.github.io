import React from 'react';

const MyProjects = () => (
  <div className='limiterDiv'>
    <section className='projectInfo'>
      <div className='projectDiv'>
        <div
          className='projectNameDiv'
          style={{ backgroundImage: 'url("img/projects/iosApps/main.png")' }}
        >
          <div className='projectTitleDiv'>
            <h2 className='projectName'>iOS Apps</h2>
          </div>
        </div>
        <div className='projectDescription'>
          <p>
            Multiple iOS apps for different purposes with a variety of
            technologies and frameworks.
          </p>
          <ul>
            <li>
              Some apps: Messenger, Weather, Hacker News, Calculator, Twitter
              Feelings, To Do List and more
            </li>
          </ul>
          <p>
            Technologies: Swift, Xcode, CoreML, ARKit, Realm, Firebase and
            others.
          </p>
          <div className='projectLinks'>
            <a
              href='https://github.com/KevinTMtz/iOSApps'
              target='_blank'
              rel='noreferrer'
              style={{ width: '100%' }}
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <div className='projectDiv'>
        <div
          className='projectNameDiv'
          style={{ backgroundImage: 'url("img/projects/gunnedDown/main.png")' }}
        >
          <div className='projectTitleDiv'>
            <h2 className='projectName'>Gunned Down</h2>
          </div>
        </div>
        <div className='projectDescription'>
          <p>
            Roguelike 2D game with Multiple levels, enemies, characters,
            weapons, traps and items.
          </p>
          <ul>
            <li>
              Implemented A* pathfinding to determine the movement of the
              enemies
            </li>
            <li>Save & load functionality</li>
            <li>Sound effects</li>
            <li>Pixel art graphics with shaders and animations</li>
          </ul>
          <p>Technologies: C#, Unity and A* pathfinding.</p>
          <div className='projectLinks'>
            <a
              href='https://github.com/KevinTMtz/GunnedDown'
              target='_blank'
              rel='noreferrer'
              style={{ width: '100%' }}
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <div className='projectDiv'>
        <div
          className='projectNameDiv'
          style={{
            backgroundImage: 'url("img/projects/infinityWebPage/main.jpg")',
          }}
        >
          <div className='projectTitleDiv'>
            <h2 className='projectName'>Infinity Web & App</h2>
          </div>
        </div>
        <div className='projectDescription'>
          <p>
            Webpage and App for the promotion of an electronic device called
            Knocki. The app prototype has local data save to simulate the
            interaction with the device and its functionality.
          </p>
          <ul>
            <li>Beautiful interface focused on human-computer interaction</li>
          </ul>
          <p>Technologies: JS, JQuery, CSS3 and HTML5.</p>
          <div className='projectLinks'>
            <a
              href='https://github.com/KevinTMtz/InfinityWebPage'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='https://kevintmtz.github.io/InfinityWebPage/'
              target='_blank'
              rel='noreferrer'
            >
              Website
            </a>
          </div>
        </div>
      </div>

      <div className='projectDiv'>
        <div
          className='projectNameDiv'
          style={{
            backgroundImage: 'url("img/projects/unityProjects/main.jpg")',
          }}
        >
          <div className='projectTitleDiv'>
            <h2 className='projectName'>Unity Projects</h2>
          </div>
        </div>
        <div className='projectDescription'>
          <p>
            Collection of casual games that I made in Unity. They all have
            different gameplay, design, mechanics, functionalities and genre.
          </p>
          <ul>
            <li>
              Some videogames: 2D Platformer, Space Shooter, Game Maker, 3D
              Chicken Hunter, Hypercasual and more
            </li>
          </ul>
          <p>Technologies: C# and Unity.</p>
          <div className='projectLinks'>
            <a
              href='https://github.com/KevinTMtz/UnityProjects'
              target='_blank'
              rel='noreferrer'
              style={{ width: '100%' }}
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <div className='projectDiv'>
        <div
          className='projectNameDiv'
          style={{
            backgroundImage:
              'url("img/projects/competitiveProgramming/main.jpg")',
          }}
        >
          <div className='projectTitleDiv'>
            <h2 className='projectName'>Competitive Programming</h2>
          </div>
        </div>
        <div className='projectDescription'>
          <p>
            Solutions to competitive programming problems that I have done in my
            school club, websites and online competitions.
          </p>
          <ul>
            <li>Hackerrank, SPOJ, CodeForces, ICPC</li>
          </ul>
          <p>Technologies: C++, Java and Python.</p>
          <div className='projectLinks'>
            <a
              href='https://github.com/KevinTMtz/CompetitiveProgramming'
              target='_blank'
              rel='noreferrer'
              style={{ width: '100%' }}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default MyProjects;
