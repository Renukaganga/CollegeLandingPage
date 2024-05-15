import React from 'react';
import Image from 'next/image'; 
import './governance.css';
import gov from '../gov.jpg'

const Governance = () => {
  return (
    <div>
      <div className="image-section">
        <br />
        <center>
            <Image src={gov} alt="Accreditation" width={800} height={600}/>
        </center>
      </div>
    </div>
  );
};

export default Governance;
