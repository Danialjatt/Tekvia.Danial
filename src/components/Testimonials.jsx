import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container text-center">
                <p className="testimonial-quote">
                    "Moving to Tekvida was the best decision for our clinic. The support is incredible and the software just works."
                </p>
                <p className="testimonial-author">
                    — <span className="author-name">Dr. Sarah Chen</span>, Founder of Wellness Collective
                </p>
            </div>
        </section>
    );
};

export default Testimonials;
