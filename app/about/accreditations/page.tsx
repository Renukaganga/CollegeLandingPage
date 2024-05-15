import React from 'react';
import Image from 'next/image'; 
import './accreditations.css'; 
import naac from '../naac.jpg'
import nirf from '../nirf.webp'

const Accreditations = () => { 
  return ( 
    <div>
      <div className="image-section">
        <br />
        <center>
        
        <Image src={naac} alt="Accreditation" width={500} height={400} />
        </center>
      </div> 
      <div className="image-section">
        <br />
        <center>
          
          <Image src={nirf} alt="Accreditation" width={500} height={400} />
        </center>
      </div> 
    </div>
  ); 
} 

export default Accreditations;
