import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    tekvida
                </Link>

                <div className="desktop-menu">
                    <ul className="nav-links">
                        <li className="nav-item">
                            <a href="/#features">Features <ChevronDown size={14} /></a>
                        </li>
                        <li className="nav-item"><a href="/#pricing">Pricing</a></li>
                        <li className="nav-item"><a href="/#clinics">For Clinics</a></li>
                        <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
                    </ul>

                    <div className="nav-actions">
                        <a href="#login" className="login-link">Sign In</a>
                        <a href="#demo" className="btn btn-outline small-btn">Book a Demo</a>
                        <a href="#signup" className="btn btn-primary small-btn">Sign Up</a>
                    </div>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <ul className="mobile-nav-links">
                            <li><a href="/#features">Features</a></li>
                            <li><a href="/#pricing">Pricing</a></li>
                            <li><a href="/#clinics">For Clinics</a></li>
                            <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
                            <li className="mobile-actions">
                                <a href="#login">Sign In</a>
                                <a href="#signup" className="btn btn-primary">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
