import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign, FileText } from 'lucide-react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <div className="container text-center">
                    <h1 className="contact-title">Get in <span className="text-gradient">Touch</span></h1>
                    <p className="contact-subtitle">We'd love to hear from you. Our friendly team is always here to chat.</p>
                </div>
            </div>

            <div className="container contact-content">
                <div className="contact-grid">
                    {/* Contact Information */}
                    <div className="contact-info-card">
                        <h2>Contact Information</h2>
                        <p className="info-desc">Fill up the form and our Team will get back to you within 24 hours.</p>

                        <div className="info-items">
                            <a href="mailto:hello@tekvida.com" className="info-item link-item">
                                <div className="icon-box p-blue">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <p>hello@tekvida.com</p>
                                </div>
                            </a>

                            <a href="tel:+15551234567" className="info-item link-item">
                                <div className="icon-box p-purple">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </a>

                            <a href="https://maps.google.com/?q=123+Innovation+Dr,+Tech+City,+TC+90210" target="_blank" rel="noopener noreferrer" className="info-item link-item">
                                <div className="icon-box p-green">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3>Office</h3>
                                    <p>123 Innovation Dr,<br />Tech City, TC 90210</p>
                                </div>
                            </a>
                        </div>

                        <div className="social-links">
                            {/* Add social icons if needed */}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-card">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name"><User size={18} /> Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email"><AtSign size={18} /> Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject"><FileText size={18} /> Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="How can we help?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message"><MessageSquare size={18} /> Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
