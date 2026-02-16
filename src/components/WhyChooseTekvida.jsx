import React from 'react';
import { Check, Zap, ShieldCheck, Headphones, TrendingUp, ArrowRight } from 'lucide-react';
import './WhyChooseTekvida.css';

const WhyChooseTekvida = () => {
    return (
        <section className="why-choose-section">
            <div className="container why-choose-container">
                {/* Left Column */}
                <div className="why-choose-content">

                    <h2 className="section-title">
                        The Complete Healthcare <br />
                        <span>Management Solution</span>
                    </h2>

                    <p className="section-description">
                        Join hundreds of clinics already transforming their operations with our
                        comprehensive platform designed specifically for modern healthcare providers.
                    </p>

                    <div className="benefits-list">
                        <div className="benefit-card">
                            <div className="icon-wrapper icon-green">
                                <Check size={24} />
                            </div>
                            <div className="benefit-info">
                                <h3>Save 5+ Hours Weekly</h3>
                                <p>Automate administrative tasks and focus on what matters most - your patients</p>
                            </div>
                        </div>

                        <div className="benefit-card">
                            <div className="icon-wrapper icon-blue">
                                <Zap size={24} />
                            </div>
                            <div className="benefit-info">
                                <h3>Reduce No-Shows by 40%</h3>
                                <p>Intelligent reminders and automated follow-ups keep patients engaged</p>
                            </div>
                        </div>

                        <div className="benefit-card">
                            <div className="icon-wrapper icon-purple">
                                <ShieldCheck size={24} />
                            </div>
                            <div className="benefit-info">
                                <h3>Security-Focused</h3>
                                <p>Enterprise-grade security with end-to-end encryption and regular audits</p>
                            </div>
                        </div>

                        <div className="benefit-card">
                            <div className="icon-wrapper icon-orange">
                                <Headphones size={24} />
                            </div>
                            <div className="benefit-info">
                                <h3>24/7 Expert Support</h3>
                                <p>Dedicated healthcare specialists available whenever you need assistance</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="why-choose-visual">
                    {/* Decorative Elements */}
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>

                    <div className="transform-card">
                        <div className="card-header-icon">
                            <TrendingUp size={32} color="white" />
                        </div>

                        <h3>Ready to Transform Your Clinic?</h3>
                        <p className="card-subtext">
                            Start your free trial today and see the difference Tekvida makes in your first week.
                        </p>

                        <div className="feature-checklist">
                            <div className="check-item item-green">
                                <span>Free 30-Day Trial</span>
                                <Check size={18} />
                            </div>
                            <div className="check-item item-blue">
                                <span>No Setup Fees</span>
                                <Check size={18} />
                            </div>
                            <div className="check-item item-purple">
                                <span>Cancel Anytime</span>
                                <Check size={18} />
                            </div>
                        </div>

                        <button className="btn btn-primary full-width-btn">
                            Start Your Free Trial <ArrowRight size={20} className="btn-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseTekvida;
