import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import './MeetTekvida.css';

const MeetTekvida = () => {
    return (
        <section className="meet-tekvida">
            <div className="container meet-container">
                <div className="meet-content">
                    <h2 className="section-title">
                        Meet <span className="text-gradient">Tekvida</span>.
                    </h2>
                    <p className="meet-subtitle">
                        Book, chart, schedule, invoice, process payments, and run your whole practice online.
                    </p>
                    <div className="meet-actions">
                        <a href="#signup" className="btn btn-primary">Sign Up</a>
                        <a href="#compare" className="btn btn-outline">Compare Plans</a>
                    </div>
                    <a href="#video" className="video-link">
                        <Play size={16} className="play-icon" />
                        Discover what Tekvida can do (2:30)
                    </a>
                </div>
                <div className="meet-visual">
                    <div className="video-placeholder">
                        <div className="play-button-large">
                            <Play size={40} fill="white" className="ml-1" />
                        </div>
                        {/* Abstract decorative elements */}
                        <div className="deco-circle c1"></div>
                        <div className="deco-circle c2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetTekvida;
