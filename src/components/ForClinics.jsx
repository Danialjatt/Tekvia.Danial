import React, { useEffect } from 'react';
import { ArrowRight, Calendar, CreditCard, FileText, CheckCircle, Smartphone, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ForClinics.css';

const ForClinics = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="clinics-page">
            {/* Hero Section */}
            <section className="clinics-hero">
                <div className="container">
                    <div className="clinics-hero-content">
                        <div className="clinics-text-col">
                            <span className="clinics-badge">Built for Modern Practices</span>
                            <h1 className="clinics-hero-title">
                                The Operating System for <span className="text-gradient">Thriving Clinics</span>
                            </h1>
                            <p className="clinics-hero-subtitle">
                                From booking to billing, Tekvida streamlines every aspect of your clinic so you can focus on what matters most: your patients.
                            </p>
                            <div className="clinics-hero-actions">
                                <Link to="/signup" className="btn btn-primary big-btn">
                                    Start Free Trial <ArrowRight size={18} className="ml-2" />
                                </Link>
                                <a href="#demo" className="btn btn-outline big-btn">
                                    Book a Demo
                                </a>
                            </div>
                        </div>
                        <div className="clinics-image-col">
                            <div className="clinics-hero-image-wrapper">
                                {/* Using a placeholder that represents a clean, modern clinic dashboard or environment 
                                    In a real app, this would be a specific asset. 
                                    Generating a gradient placeholder for now to keep it clean. */}
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#64748b'
                                }}>
                                    <LayoutDashboard size={64} opacity={0.5} />
                                    <span style={{ marginLeft: '12px', fontWeight: 500 }}>Clinic Dashboard Preview</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Props Grid */}
            <section className="clinics-features">
                <div className="container">
                    <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 className="section-title">Everything you need to run a <span className="text-gradient">better clinic</span></h2>
                        <p className="section-subtitle">Powerful tools designed to reduce admin work and improve patient experience.</p>
                    </div>

                    <div className="features-grid-clinics">
                        <div className="clinic-feature-card">
                            <div className="clinic-icon-wrapper">
                                <Calendar size={28} />
                            </div>
                            <h3 className="clinic-card-title">Smart Scheduling</h3>
                            <p className="clinic-card-desc">
                                Eliminate double-bookings and reduce no-shows with automated reminders and an intuitive drag-and-drop calendar.
                            </p>
                        </div>

                        <div className="clinic-feature-card">
                            <div className="clinic-icon-wrapper">
                                <FileText size={28} />
                            </div>
                            <h3 className="clinic-card-title">Paperless Charting</h3>
                            <p className="clinic-card-desc">
                                Customizable chart templates that make documentation a breeze. HIPAA-compliant and secure by design.
                            </p>
                        </div>

                        <div className="clinic-feature-card">
                            <div className="clinic-icon-wrapper">
                                <CreditCard size={28} />
                            </div>
                            <h3 className="clinic-card-title">Integrated Payments</h3>
                            <p className="clinic-card-desc">
                                Store cards on file, automate invoicing, and get paid faster without the front-desk bottleneck.
                            </p>
                        </div>

                        <div className="clinic-feature-card">
                            <div className="clinic-icon-wrapper">
                                <Smartphone size={28} />
                            </div>
                            <h3 className="clinic-card-title">Telehealth Ready</h3>
                            <p className="clinic-card-desc">
                                Launch secure video consultations directly from the appointment book. No third-party apps required.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="clinics-testimonial">
                <div className="container testimonial-container">
                    <span className="quote-icon">"</span>
                    <h3 className="testimonial-text">
                        Tekvida transformed how we run our practice. We save about 10 hours of admin time every week, and our patients love the online booking experience.
                    </h3>
                    <div className="testimonial-author">Dr. Sarah Chen</div>
                    <span className="testimonial-role">Clinic Director, Eucalyptus Health</span>
                </div>
            </section>

            {/* Final CTA */}
            <section className="clinics-cta">
                <div className="container cta-box">
                    <h2 className="cta-title">Ready to upgrade your clinic?</h2>
                    <p className="hero-subtitle" style={{ margin: '0 auto 2rem' }}>
                        Join thousands of practitioners who trust Tekvida. No credit card required.
                    </p>
                    <a href="#signup" className="btn btn-primary big-btn">
                        Get Started for Free
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ForClinics;
