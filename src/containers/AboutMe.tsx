import React from 'react';

const AboutMe = () => (
  <>
    <div id='bigScreen'></div>
    <p id='bigQuote'>Think Big</p>
    <div className='limiterDiv'>
      <p
        id='myDescription'
        style={{ textAlign: 'center', fontSize: '20px', paddingTop: '10px' }}
      >
        Computer Science Student of Tec de Monterrey (ITESM) with more than two
        years of experience in the application of different technologies and
        tools focused on software development.
      </p>

      <h2 className='myInfoTitle'>Languages & Technologies</h2>
      <section className='myInfo' id='skillsSection'>
        <div>
          <p>Swift</p>
          <img src='img/logos/swift.svg' alt='TODO' />
        </div>
        <div>
          <p>Java</p>
          <img src='img/logos/java.svg' alt='TODO' />
        </div>
        <div>
          <p>C++</p>
          <img src='img/logos/cplusplus.svg' alt='TODO' />
        </div>
        <div>
          <p>MySQL</p>
          <img src='img/logos/mysql.svg' alt='TODO' />
        </div>
        <div>
          <p>Xcode</p>
          <img src='img/logos/xcode.svg' alt='TODO' />
        </div>
        <div>
          <p>Unity</p>
          <img src='img/logos/unity.svg' alt='TODO' />
        </div>
      </section>

      <h2 className='myInfoTitle'>Currently learning</h2>
      <section className='myInfo' id='skillsSection'>
        <div>
          <p>Clojure</p>
          <img src='img/logos/clojure.svg' alt='TODO' />
        </div>
        <div>
          <p>React</p>
          <img src='img/logos/react.svg' alt='TODO' />
        </div>
        <div>
          <p>Tensorflow</p>
          <img src='img/logos/tensorflow.svg' alt='TODO' />
        </div>
      </section>

      <h2 className='myInfoTitle'>Education</h2>
      <section className='myInfo' id='educationSection'>
        <div>
          <h3>Tecnológico de Monterrey, 2018-2022 (expected)</h3>
          <p>
            Bachelor of Engineering,
            <strong>Computer Science and Technology.</strong> Major GPA: 4.0.
          </p>
          <ul>
            <li>
              Relevant coursework: Data structures, Computational mathematics,
              Advanced data bases, Operating systems.
            </li>
            <li>Groups: Competitive programming club</li>
          </ul>
        </div>

        <div>
          <h3>Instituto Politécnico Nacional, 2015-2018</h3>
          <p>
            High school,
            <strong>Electrical and Electronic technician.</strong> Major GPA:
            4.0.
          </p>
          <ul>
            <li>Highest honors</li>
            <li>Investigator Training Stimulus Grant (BEIFI in spanish)</li>
          </ul>
        </div>
      </section>

      <h2 className='myInfoTitle'>Honors & Awards</h2>
      <section className='myInfo' id='honorsSection'>
        <div>
          <h3>First place on Banorte's Challenge at HackMTY, 2019</h3>
          <p>
            Developed an iOS app that detects and blocks phishing and
            advertisements.
          </p>
          <ul>
            <li>Blocks links & adds</li>
          </ul>
        </div>

        <div>
          <h3>Honorable Mention at Gran Premio de México, 2019</h3>
          <p>ICPC (Internacional Collegiate Programming Contest) Foundation.</p>
          <ul>
            <li>Used C++ and Java</li>
          </ul>
        </div>

        <div>
          <h3>Winner of the Lázaro Cárdenas prize, 2019</h3>
          <p>
            The highest award granted by the Instituto Politécnico Nacional.
          </p>
          <ul>
            <li>Better GPA in math and physics area schools</li>
          </ul>
        </div>

        <div>
          <h3>Winner in the Solutions for the Future contest, 2018</h3>
          <p>
            Sponsored by Samsung Electronics. Developed an electro-mechanical
            system that maintains a photovoltaic panel pointing to the sun
            throughout the day for the power supply of a house.
          </p>
        </div>

        <div>
          <h3>Bronze medal in the Math Olympiad of Mexico City, 2017</h3>
          <p>
            By the Institute of Mathematics of the Universidad Nacional Autónoma
            de México (UNAM).
          </p>
        </div>

        <div>
          <h3>Bronze medal in the Math Olympiad of Mexico City, 2014</h3>
          <p>
            By the Institute of Mathematics of the Universidad Nacional Autónoma
            de México (UNAM).
          </p>
        </div>
      </section>

      <h2 className='myInfoTitle'>Activities & Leadership</h2>
      <section className='myInfo' id='activitiesSection'>
        <div>
          <h3>Competitive programming, 2018-Present</h3>
          <p>
            I write most of my code in C++. I like to solve problems of any
            topic, but specially of math.
          </p>
          <ul>
            <li>Hackerrank, SPOJ, CodeForces</li>
            <li>Competitive programming club of my school</li>
            <li>Online competitions like ICPC & CodeForces Rounds</li>
          </ul>
        </div>

        <div>
          <h3>
            Instructor in a Modeling-Graphing course for the teaching of
            mathematics, 2018
          </h3>
          <p>
            Centro de Estudios Científicos y Tecnológicos No. 7, Software
            training and strategies for teachers
          </p>
          <ul>
            <li>
              Implemented a mathematical analysis activity through interactive
              software for the className work plan of the institution's teachers
            </li>
          </ul>
        </div>

        <div>
          <h3>
            Research project focused on curricular redesign for high school and
            university, 2017-2018.
          </h3>
          <p>
            Instituto Politécnico Nacional, Institutional Investigator Training
            Stimulus Grant (BEIFI in spanish).
          </p>
          <ul>
            <li>
              Generated a new methodology for teaching mathematics in schools
              through interactive software.
            </li>
          </ul>
        </div>
      </section>

      <section id='myAnimoji'>
        <img src='img/WWDC.jpeg' alt='TODO' />
      </section>
    </div>
  </>
);

export default AboutMe;
