import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import PrivacyModal from './PrivacyModal';
import './Footer.css';

const Footer = () => {
    const [showPrivacy, setShowPrivacy] = useState(false);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="/" className="logo">tekvida</a>
                        <p className="footer-desc">
                            The friendly practice management software for health and wellness clinics.
                        </p>
                        <div className="social-links">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Updates</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Guide</a></li>
                            <li><a href="#">API</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li>
                                <button
                                    className="footer-link-btn"
                                    onClick={() => setShowPrivacy(true)}
                                >
                                    Privacy Policy
                                </button>
                            </li>
                            <li><a href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Tekvida Inc. Made with <Heart size={14} className="inline-icon" /> for you.</p>
                </div>
            </div>

            <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
        </footer>
    );
};

export default Footer;
