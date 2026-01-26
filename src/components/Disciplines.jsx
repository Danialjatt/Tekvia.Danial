import React from 'react';
import './Disciplines.css';

const disciplines = [
    "Physiotherapists",
    "Chiropractors",
    "Massage Therapists",
    "Psychologists",
    "Social Workers",
    "Counsellors",
    "Acupuncturists",
    "Naturopaths",
    "Osteopaths",
    "Dietitians",
    "Speech Pathologists",
    "Occupational Therapists"
];

const Disciplines = () => {
    return (
        <section className="disciplines">
            <div className="container">
                <div className="disciplines-grid">
                    <div className="disciplines-content">
                        <h2 className="section-title">
                            Tekvida works for <br />
                            <span className="text-gradient">clinics of every type.</span>
                        </h2>
                        <p className="disciplines-desc">
                            Whether you're a solo practitioner or a multi-disciplinary wellness center, Tekvida adapts to your workflow.
                        </p>
                        <a href="#demo" className="btn btn-primary">See how it works for you</a>
                    </div>

                    <div className="disciplines-list-container">
                        <ul className="disciplines-list">
                            {disciplines.map((item, index) => (
                                <li key={index} className="discipline-item">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Disciplines;
