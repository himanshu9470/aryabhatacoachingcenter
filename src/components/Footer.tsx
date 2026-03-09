import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-brand-logo">
                            <img src="/Essay-on-Aryabhata.jpg" alt="Aryabhata" className="footer-brand-logo-img" />
                            <span>Aryabhata Coaching Center</span>
                        </div>
                        <p>
                            Shaping the future of Class 10th and 12th students with expert
                            guidance, modern teaching methods, and personal attention.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="footer-social-link" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="footer-social-link" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" className="footer-social-link" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="#" className="footer-social-link" aria-label="YouTube">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#facilities">Facilities</a></li>
                            <li><a href="#testimonials">Results</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div className="footer-column">
                        <h4>Our Courses</h4>
                        <ul>
                            <li><a href="#courses">Class 10th Preparation</a></li>
                            <li><a href="#courses">Class 12th Science</a></li>
                            <li><a href="#courses">Mathematics Special</a></li>
                            <li><a href="#courses">Physics & Chemistry</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-column">
                        <h4>Contact Info</h4>
                        <div className="footer-contact-item">
                            <HiLocationMarker className="footer-contact-icon" />
                            <p>Patut Bikram Road,<br />Bihar, India</p>
                        </div>
                        <div className="footer-contact-item">
                            <HiPhone className="footer-contact-icon" />
                            <p>+91 98765 43210</p>
                        </div>
                        <div className="footer-contact-item">
                            <HiMail className="footer-contact-icon" />
                            <p>info@aryabhatacoaching.com</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Aryabhata Coaching Center. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
