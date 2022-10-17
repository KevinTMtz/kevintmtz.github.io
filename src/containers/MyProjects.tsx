import React from 'react';

import Project from '../components/Project';

const MyProjects = () => {
  const projects = [
    {
      name: 'iOS Apps',
      imagePath: 'img/projects/iosApps/main.png',
      description:
        'Multiple iOS apps for different purposes with a variety of technologies and frameworks.',
      points: [
        'Some apps: Messenger, Weather, Hacker News, Calculator, Twitter Feelings, To Do List and more',
      ],
      technologies: 'Swift, Xcode, CoreML, ARKit, Realm, Firebase and others.',
      githubUrl: 'https://github.com/KevinTMtz/iOSApps',
    },
    {
      name: 'Gunned Down',
      imagePath: 'img/projects/gunnedDown/main.png',
      description:
        'Roguelike 2D game with Multiple levels, enemies, characters, weapons, traps and items.',
      points: [
        'Implemented A* pathfinding to determine the movement of the enemies',
        'Save & load functionality',
        'Sound effects',
        'Pixel art graphics with shaders and animations',
      ],
      technologies: 'C#, Unity and A* pathfinding.',
      githubUrl: 'https://github.com/KevinTMtz/GunnedDown',
    },
    {
      name: 'Infinity Web & App',
      imagePath: 'img/projects/infinityWebPage/main.jpg',
      description:
        'Webpage and App for the promotion of an electronic device called Knocki. The app prototype has local data save to simulate the interaction with the device and its functionality.',
      points: ['Beautiful interface focused on human-computer interaction'],
      technologies: 'JS, JQuery, CSS3 and HTML5.',
      githubUrl: 'https://github.com/KevinTMtz/InfinityWebPage',
      webpageUrl: 'https://kevintmtz.github.io/InfinityWebPage/',
    },
    {
      name: 'Unity Projects',
      imagePath: 'img/projects/unityProjects/main.jpg',
      description:
        'Collection of casual games that I made in Unity. They all have different gameplay, design, mechanics, functionalities and genre.',
      points: [
        'Some videogames: 2D Platformer, Space Shooter, Game Maker, 3D Chicken Hunter, Hypercasual and more',
      ],
      technologies: 'C# and Unity.',
      githubUrl: 'https://github.com/KevinTMtz/UnityProjects',
    },
    {
      name: 'Competitive Programming',
      imagePath: 'img/projects/competitiveProgramming/main.jpg',
      description:
        'Solutions to competitive programming problems that I have done in my school club, websites and online competitions.',
      points: ['Hackerrank, SPOJ, CodeForces, ICPC'],
      technologies: 'C++, Java and Python.',
      githubUrl: 'https://github.com/KevinTMtz/CompetitiveProgramming',
    },
  ];

  return (
    <div className='limiterDiv'>
      <section className='projectInfo'>
        {projects.map((project, index) => (
          <Project project={project} key={`Project-${index}`} />
        ))}
      </section>
    </div>
  );
};

export default MyProjects;
