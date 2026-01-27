import React from 'react';
import { CheckCircle2 } from 'lucide-react';
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
                <div className="disciplines-header">
                    <h2 className="section-title">
                        Tekvida works for <br />
                        <span className="text-gradient">clinics of every type.</span>
                    </h2>
                    <p className="disciplines-desc">
                        Whether you're a solo practitioner or a multi-disciplinary wellness center, Tekvida adapts to your workflow.
                    </p>
                </div>

                <div className="disciplines-cards">
                    {disciplines.map((item, index) => (
                        <div key={index} className="discipline-card">
                            <CheckCircle2 className="card-icon" size={24} />
                            <span className="card-text">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="disciplines-cta">
                    <a href="#demo" className="btn btn-primary">See how it works for you</a>
                </div>
            </div>
        </section>
    );
};

export default Disciplines;
