// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { BsTwitterX } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const date = new Date();
    
    return (
        <footer>
            <p>&copy; Copyright {date.getFullYear()}</p>
            <p>Dev & Design by Roman Scandariato, Izzy Figueroa, Razieh Zarrabi, and Matt Oshea</p>
            <p>
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'inherit', textDecoration: 'none' }}>
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a> | 
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'inherit', textDecoration: 'none' }}>
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
            </p>

        </footer>
    )
}

export default Footer