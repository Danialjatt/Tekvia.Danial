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
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item"><a href="/#pricing">Pricing</a></li>
                        <li className="nav-item"><Link to="/clinics">For Clinics</Link></li>
                        <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
                    </ul>

                    <div className="nav-actions">
                        <Link to="/login" className="login-link">Sign In</Link>
                        <a href="#demo" className="btn btn-outline small-btn">Book a Demo</a>
                        <Link to="/signup" className="btn btn-primary small-btn">Sign Up</Link>
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
                            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                            <li><a href="/#pricing">Pricing</a></li>
                            <li><Link to="/clinics" onClick={() => setIsMobileMenuOpen(false)}>For Clinics</Link></li>
                            <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
                            <li className="mobile-actions">
                                <Link to="/login">Sign In</Link>
                                <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
