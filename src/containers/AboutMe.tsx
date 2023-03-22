import React from 'react';

import Badge from '../components/Badge';
import InformationBox from '../components/InformationBox';
import { Information } from '../types/types';

const AboutMe = () => {
  const languages = [
    { text: 'TypeScript', imagePath: 'img/logos/typescript.svg', alt: 'TODO' },
    { text: 'JavaScript', imagePath: 'img/logos/javascript.svg', alt: 'TODO' },
    { text: 'Java', imagePath: 'img/logos/java.svg', alt: 'TODO' },
    { text: 'C#', imagePath: 'img/logos/csharp.svg', alt: 'TODO' },
    { text: 'Python', imagePath: 'img/logos/python.svg', alt: 'TODO' },
    { text: 'Kotlin', imagePath: 'img/logos/kotlin.svg', alt: 'TODO' },
    { text: 'Swift', imagePath: 'img/logos/swift.svg', alt: 'TODO' },
    { text: 'C++', imagePath: 'img/logos/cplusplus.svg', alt: 'TODO' },
    { text: 'MySQL', imagePath: 'img/logos/mysql.svg', alt: 'TODO' },
    { text: 'HTML5', imagePath: 'img/logos/html5.svg', alt: 'TODO' },
  ];

  const technologies = [
    { text: 'React', imagePath: 'img/logos/react.svg', alt: 'TODO' },
    { text: 'Azure', imagePath: 'img/logos/microsoftazure.svg', alt: 'TODO' },
    {
      text: 'Android Studio',
      imagePath: 'img/logos/androidstudio.svg',
      alt: 'TODO',
    },
    { text: 'Xcode', imagePath: 'img/logos/xcode.svg', alt: 'TODO' },
    { text: 'Firebase', imagePath: 'img/logos/firebase.svg', alt: 'TODO' },
    { text: 'Anaconda', imagePath: 'img/logos/anaconda.svg', alt: 'TODO' },
    { text: 'Unity', imagePath: 'img/logos/unity.svg', alt: 'TODO' },
    { text: 'Docker', imagePath: 'img/logos/docker.svg', alt: 'TODO' },
    { text: 'Postman', imagePath: 'img/logos/postman.svg', alt: 'TODO' },
    { text: 'Heroku', imagePath: 'img/logos/heroku.svg', alt: 'TODO' },
    { text: 'Git', imagePath: 'img/logos/git.svg', alt: 'TODO' },
    {
      text: 'Github Actions',
      imagePath: 'img/logos/githubactions.svg',
      alt: 'TODO',
    },
  ];

  const learning = [
    {
      text: 'ML & Data Science',
      imagePath: 'img/logos/openai.svg',
      alt: 'TODO',
    },
    { text: 'Tensorflow', imagePath: 'img/logos/tensorflow.svg', alt: 'TODO' },
  ];

  const experience: Information[] = [
    {
      title: 'Microsoft, Software Engineer, October 2022 - March 2023',
      description:
        'Worked in the Supply Chain Data and Analytics team to enable more visibility across the supply chain of products such as Xbox and Surface.',
      points: [
        'Integrated multiple data sources within a single platform, and Automated weekly reports to monitor the usage of multiple key performance indicators of my organization, like databases, services and users in the last 52 weeks, with Azure Cubes, Azure Logs, Kusto and MySQL',
        'Provided query and user level visibility with PowerBI on the usage of all our tables across multiple databases, and assisted on the efforts of detecting and removing hundreds of unused tables across our databases in the Azure MySQL Server of my organization',
        "Fixed and mitigated multiple bugs in my team's production systems, and .NET & Azure data pipelines covering a wide range of business cases",
      ],
    },
    {
      title: 'Microsoft, Software Engineer Intern, June - August 2021',
      description:
        'Worked on an internal web portal for the establishment of data flows between databases and multiple teams located in different departments.',
      points: [
        'Remade and tested the whole UI with a new front-end framework that met accessibility and consistency requirements of Microsoft products',
        'Implemented account management and authentication for employees with Azure Active Directory',
        'Developed with ASP.NET, React & JavaScript following the MVC design pattern',
      ],
    },
  ];

  const education: Information[] = [
    {
      title: 'Tecnológico de Monterrey, 2018-2022',
      description:
        'Bachelor of Science, Computer Science and Technology. Major GPA: 3.9, Summa Cum Laude.',
      points: [
        'Relevant coursework: Machine Learning, Deep Learning, Intelligent Systems, Computational mathematics, Advanced Data Bases, Operating systems, Mobile and Web applications, Algorithm Analysis and Software Quality & Testing',
        'Groups: Competitive programming club',
      ],
    },
    {
      title: 'Instituto Politécnico Nacional, 2015-2018',
      description:
        'High school, Electrical and Electronic technician. Major GPA: 4.0.',
      points: [
        'Highest honors',
        'Investigator Training Stimulus Grant (BEIFI in spanish)',
      ],
    },
  ];

  const awards: Information[] = [
    {
      title: 'Honorable Mention at Gran Premio de México Finals, 2021',
      description:
        'ICPC (Internacional Collegiate Programming Contest) Foundation.',
      points: ['Solved multiple problems with C++ and Java'],
    },
    {
      title: "First place on Banorte's Challenge at HackMTY, 2019",
      description:
        'Developed an iOS app that detects and blocks phishing and advertisements.',
      points: ['Blocks dangerous Urls & adds'],
    },
    {
      title: 'Winner of the Lázaro Cárdenas prize, 2019',
      description:
        'The highest award granted by the Instituto Politécnico Nacional.',
      points: ['Better GPA in math and physics area schools'],
    },
    {
      title: 'Winner in the Solutions for the Future contest, 2018',
      description:
        'Sponsored by Samsung Electronics. Developed an electro-mechanical system that maintains a photovoltaic panel pointing to the sun throughout the day for the power supply of a house.',
      points: [],
    },
    {
      title: 'Bronze medal in the Math Olympiad of Mexico City, 2017',
      description:
        'By the Institute of Mathematics of the Universidad Nacional Autónoma de México (UNAM).',
      points: [],
    },
    {
      title: 'Bronze medal in the Math Olympiad of Mexico City, 2014',
      description:
        'By the Institute of Mathematics of the Universidad Nacional Autónoma de México (UNAM).',
      points: [],
    },
  ];

  const leadership: Information[] = [
    {
      title: 'Competitive programming, 2018-2021',
      description:
        'I like to solve problems of any topic, but specially of math. I write most of my code in C++, Python and Java.',
      points: [
        'Competitive programming club of my school as student and teaching assistant',
        'Competitive programming club of my school',
        'Online competitions like ICPC & CodeForces Rounds',
      ],
    },
    {
      title:
        'Instructor in a Modeling-Graphing course for the teaching of mathematics, 2018',
      description:
        'Centro de Estudios Científicos y Tecnológicos No. 7, Software training and strategies for teachers',
      points: [
        "Implemented a mathematical analysis activity through interactive software for the className work plan of the institution's teachers",
      ],
    },
    {
      title:
        'Research project focused on curricular redesign for high school and university, 2017-2018',
      description:
        'Instituto Politécnico Nacional, Institutional Investigator Training Stimulus Grant (BEIFI in spanish).',
      points: [
        'Generated a new methodology for teaching mathematics in schools through interactive software',
      ],
    },
  ];

  return (
    <>
      <div id='bigScreen'></div>
      <p id='bigQuote'>Think Big</p>
      <div className='limiterDiv'>
        <p
          id='myDescription'
          style={{ textAlign: 'center', fontSize: '22px', paddingTop: '10px' }}
        >
          Software engineer enthusiastic about machine learning, data science,
          web and mobile development.
        </p>

        <h2 className='myInfoTitle'>Languages</h2>
        <section className='myInfo' id='skillsSection'>
          {languages.map((language, index) => (
            <Badge
              text={language.text}
              imagePath={language.imagePath}
              alt={language.alt}
              key={`LangAndTech-${index}`}
            />
          ))}
        </section>

        <h2 className='myInfoTitle'>Technologies</h2>
        <section className='myInfo' id='skillsSection'>
          {technologies.map((technology, index) => (
            <Badge
              text={technology.text}
              imagePath={technology.imagePath}
              alt={technology.alt}
              key={`LangAndTech-${index}`}
            />
          ))}
        </section>

        <h2 className='myInfoTitle'>Currently learning</h2>
        <section className='myInfo' id='skillsSection'>
          {learning.map((skill, index) => (
            <Badge
              text={skill.text}
              imagePath={skill.imagePath}
              alt={skill.alt}
              key={`Learning-${index}`}
            />
          ))}
        </section>

        <h2 className='myInfoTitle'>Experience</h2>
        <section className='myInfo' id='experienceSection'>
          {experience.map((info, index) => (
            <InformationBox information={info} key={`Education-${index}`} />
          ))}
        </section>

        <h2 className='myInfoTitle'>Education</h2>
        <section className='myInfo' id='educationSection'>
          {education.map((info, index) => (
            <InformationBox information={info} key={`Education-${index}`} />
          ))}
        </section>

        <h2 className='myInfoTitle'>Honors & Awards</h2>
        <section className='myInfo' id='honorsSection'>
          {awards.map((info, index) => (
            <InformationBox information={info} key={`Awards-${index}`} />
          ))}
        </section>

        <h2 className='myInfoTitle'>Activities & Leadership</h2>
        <section className='myInfo' id='activitiesSection'>
          {leadership.map((info, index) => (
            <InformationBox information={info} key={`Leadership-${index}`} />
          ))}
        </section>
      </div>
    </>
  );
};

export default AboutMe;
