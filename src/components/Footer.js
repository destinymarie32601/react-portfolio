import React from 'react';
import {FaGithub, FaLinkedin, FaStackOverflow} from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="social-icons">
                    <a href = "https://github.com/destinymarie32601" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href = "www.linkedin.com/in/destiny-dardon-4b395b238" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href = "U04JJC90FNK" target="_blank" rel="noopener noreferrer">
                        <FaStackOverflow />
                    </a>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;