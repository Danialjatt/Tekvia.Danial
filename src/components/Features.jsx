import React from 'react';
import { Calendar, Users, FileText, BarChart2, ShieldCheck, Zap } from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: <Calendar size={24} />,
        title: "Smart Scheduling",
        description: "Intelligent appointment booking with automated reminders and conflict detection.",
        color: "blue"
    },
    {
        icon: <Users size={24} />,
        title: "Patient Management",
        description: "Comprehensive profiles with history, insurance details, and communication preferences.",
        color: "purple"
    },
    {
        icon: <FileText size={24} />,
        title: "Digital Health Records",
        description: "Secure, HIPAA-compliant electronic health records with treatment plans and prescriptions.",
        color: "green"
    },
    {
        icon: <BarChart2 size={24} />,
        title: "Analytics & Insights",
        description: "Real-time performance metrics and patient trends to grow your practice.",
        color: "orange"
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Enterprise Security",
        description: "Bank-level encryption and regular security audits for total peace of mind.",
        color: "red"
    },
    {
        icon: <Zap size={24} />,
        title: "Lightning Fast",
        description: "Optimized performance with 99.9% uptime guarantee and seamless navigation.",
        color: "yellow"
    }
];

const Features = () => {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="features-header text-center">
                    <h2 className="section-title">
                        Powerful features for <span className="text-gradient">modern clinics</span>.
                    </h2>
                    <p className="section-subtitle">
                        Everything you need to manage your practice, all in one platform.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className={`feature-icon-wrapper bg-${feature.color}`}>
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
