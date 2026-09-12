import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram,  faYoutube } from "@fortawesome/free-brands-svg-icons";
import '../design/footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <p>© 2026 Wonder Reads App. All rights reserved.</p>
                      <div className="social-icons">
                             <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                            </a>
                             <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                            </a>
                             <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>

            </footer>
        </div>
    );
};

export default Footer;
