import React from 'react';
import './aboutcollege.css';
import Image from 'next/image'; 
import founder from '../founder.jpg';

const Aboutcollege = () => { 
  return ( 
    <div>
      <br />
      <div className="about-container"> 
        <div className="about-content"> 
          <center><h1>History</h1></center>
          <p> SVECW, a higher-education institution set up exclusively for women students, provides an excellent opportunity to them for acquiring specific skills and knowledge, fostering their creativity and nurturing their innovative prowess leading to their intellectual development. The holistic development of the students would ultimately bolster women empowerment. The near 100 acre campus is pollution free and is set in salubrious environs accentuated by its lushness and vibrancy.</p>
          <center><Image src={founder} alt="Founder" width={400} height={400} /></center>
          <p>Dr. B.V. Raju, the Founder Chairman of Sri Vishnu Educational Society and Dr. B.V. Raju Foundation was born in a humble agricultural family at Kumudavalli, a village near Bhimavaram, to ultimately become the doyen of the Indian cement industry.</p>
          <center><h1>Values</h1></center>
          <strong>Values:</strong>
          <ul className='ul1'>
            <li>1. We strive for excellence in all that we do in order to model success for our students</li>
            <li>2. We focus on students' success and satisfaction and meeting the needs of the community</li>
            <li>3. We take pride in the quality of our organization and work, and we value originality, integrity, consistency, and attention to detail</li>
            <li>4. We stay abreast of ever-changing youth culture, emerging communication technologies, and design trends</li>
            <li>5. We set benchmarks and model high-quality standards for students, faculty, staff, and community partners</li>
            <li>6. We lay utmost importance on discipline, punctuality, personal values, and healthy practices</li>
            <li>7. We create an innovative environment for students and staff to develop an integrated personality</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutcollege;
