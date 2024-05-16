

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './contact.css'


export default function Contact() {
    return (
        <div>
           
            <div className="contactPage">
                <div className="header">
                    <h1>Contact Us</h1>
                    <p>We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.</p>
                </div>

                <div className="contactInfo">
                    <div className="contactItem">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                        <span>Vishnupur,Bhimavaram,West Godavari,pincode:534202</span>
                    </div>
                    <div className="contactItem">
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                       Phone: 088162 50864
                    </div>
                    <div className="contactItem">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <span>info@svecw.edu.in</span>
                    </div>
                </div>

                <form className="contactForm">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>

                <div className="socialMedia">
                    <p>Follow Us on </p>
                    <span><a href="https://www.facebook.com/ShriVishnuEngineeringCollegeforWomen/"><FontAwesomeIcon icon={faFacebookF} /></a></span>
                   <span><a href="https://twitter.com/?lang=en-in"><FontAwesomeIcon icon={faTwitter} /></a></span> 
                   <span><a href="https://www.linkedin.com/school/vishnusvecw/"><FontAwesomeIcon icon={faLinkedinIn} /></a></span> 
                    <span><a href="https://www.instagram.com/vishnu_svecw/"><FontAwesomeIcon icon={faInstagram} /></a></span>
                </div>
            </div>
        </div>
    )
}
