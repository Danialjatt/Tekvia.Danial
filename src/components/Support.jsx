import React from 'react';
import { LifeBuoy, BookOpen, Video } from 'lucide-react';
import './Support.css';

const Support = () => {
    return (
        <section className="support">
            <div className="container">
                <div className="support-header text-center">
                    <h2 className="section-title">
                        We're here to <span className="text-gradient">help</span>.
                    </h2>
                    <p className="support-subtitle">
                        Unlimited, free support to help you get started and keep running smoothly.
                    </p>
                </div>

                <div className="support-grid">
                    <a href="#guide" className="support-card">
                        <div className="support-icon p-blue">
                            <BookOpen size={32} />
                        </div>
                        <h3>The Guide</h3>
                        <p>Step-by-step documentation for every feature.</p>
                    </a>

                    <a href="#videos" className="support-card">
                        <div className="support-icon p-purple">
                            <Video size={32} />
                        </div>
                        <h3>Video Library</h3>
                        <p>Watch short tutorials to become a pro.</p>
                    </a>

                    <a href="#contact" className="support-card">
                        <div className="support-icon p-green">
                            <LifeBuoy size={32} />
                        </div>
                        <h3>Contact Us</h3>
                        <p>Talk to our friendly support team anytime.</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Support;
