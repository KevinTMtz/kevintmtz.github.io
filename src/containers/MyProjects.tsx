import React from 'react';

import Project from '../components/Project';

const MyProjects = () => {
  const projects = [
    {
      name: 'Sentinel',
      imagePath: 'img/projects/sentinel/main.jpg',
      description:
        'Data analysis platform for statistical and sentiment analysis for tweets in Mexico.',
      points: [
        'Reports generated in real time by search or periodical subscription',
        'Statistics report with interactive charts and maps',
      ],
      technologies:
        'Front-end: React & Typescript, hosted in Heroku. Back-end: NodeJS & Express.',
      githubUrl: 'https://github.com/KevinTMtz/Sentinel',
      webpageUrl: 'https://sentinel-web-app.herokuapp.com',
    },
    {
      name: 'Waste Tracker',
      imagePath: 'img/projects/wasteTracker/main.jpg',
      description:
        'Android app for the reduction of waste generation in homes.',
      points: [
        'Waste type identification with an image recognition machine learning model',
        'Calculate individual yearly waste production from a questionnaire',
      ],
      technologies: 'Kotlin & Android Studio.',
      githubUrl: 'https://github.com/KevinTMtz/WasteTracker',
    },
    {
      name: 'MedCLIP - AI model',
      imagePath: 'img/projects/medCLIPmodel/main.jpeg',
      description:
        'Deep learning model for medical imaging diagnosis (X-Ray, CT and MRI).',
      points: [
        'Model architecture with multiple encoders and attention mechanism',
        'MedPix and CheXpert databases used for training the model',
      ],
      technologies:
        'Model API developed in Python and hosted in Heroku for MedCLIP web portal. Developed with Tensorflow.',
      githubUrl: 'https://github.com/KevinTMtz/MedCLIPModel',
    },
    {
      name: 'MedCLIP',
      imagePath: 'img/projects/medCLIP/main.jpg',
      description:
        'Web portal for uploading and sharing of medical cases, and automatic diagnosis using the MedCLIP model API.',
      points: [
        'User account system & publications with different privacy levels',
      ],
      technologies:
        'Front-end: React & Typescript, hosted in Microsoft Azure. Back-end: NodeJS & MySQL database.',
      githubUrl: 'https://github.com/KevinTMtz/MedCLIP',
    },
    {
      name: 'Dauverre Web',
      imagePath: 'img/projects/dauverre/main.jpg',
      description:
        'Web app for the promotion of Davuerre A.C. (foster home for elders) & Web application for the administration of the website and the residents of the institution.',
      points: [
        'User account system',
        'Creation, edition & deletion of posts',
        'Registration, edition & deletion of residents',
        'Creation of mood reports',
      ],
      technologies: 'React & Typescript, hosted in Firebase.',
      githubUrl: 'https://github.com/KevinTMtz/DauverreWeb',
      webpageUrl: 'https://dauverre-ac.web.app',
    },
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
      technologies: 'JS, JQuery, CSS3 & HTML5.',
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
      technologies: 'C# & Unity.',
      githubUrl: 'https://github.com/KevinTMtz/UnityProjects',
    },
    {
      name: 'Competitive Programming',
      imagePath: 'img/projects/competitiveProgramming/main.jpg',
      description:
        'Solutions to competitive programming problems that I have done in my school club, websites and online competitions.',
      points: ['Hackerrank, SPOJ, CodeForces, ICPC'],
      technologies: 'C++, Java & Python.',
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
