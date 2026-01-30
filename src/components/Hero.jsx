import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Modern Clinic <br />
                        <span className="text-gradient">Management Platform</span>
                    </h1>
                    <p className="hero-subtitle">
                        Streamline patient care, eliminate paperwork, and grow your practice with Tekvida — the complete healthcare management solution.
                    </p>

                    <div className="hero-actions">
                        <Link to="/signup" className="btn btn-primary big-btn">
                            Get Started <ArrowRight size={20} className="ml-2" />
                        </Link>
                        <a href="#demo" className="btn btn-outline big-btn">
                            Book a Demo
                        </a>
                    </div>

                    <div className="hero-trust">
                        <div className="trust-item">
                            <Check size={16} className="trust-icon" />
                            <span>HIPAA Compliant</span>
                        </div>
                        <div className="trust-item">
                            <Check size={16} className="trust-icon" />
                            <span>99.9% Uptime</span>
                        </div>
                        <div className="trust-item">
                            <Check size={16} className="trust-icon" />
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="mockup-container">
                        <div className="mockup-screen">
                            <div className="mockup-header">
                                <div className="dot red"></div>
                                <div className="dot yellow"></div>
                                <div className="dot green"></div>
                            </div>
                            <div className="mockup-body">
                                <div className="skeleton-sidebar"></div>
                                <div className="skeleton-content">
                                    <div className="skeleton-header"></div>
                                    <div className="skeleton-stats-grid">
                                        <div className="stat-card blue"></div>
                                        <div className="stat-card purple"></div>
                                        <div className="stat-card green"></div>
                                    </div>
                                    <div className="skeleton-list">
                                        <div className="list-item"></div>
                                        <div className="list-item"></div>
                                        <div className="list-item"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative background blobs */}
                        <div className="blob blob-1"></div>
                        <div className="blob blob-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
