import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
    return (
        <div className="faq-item">
            <button
                className="faq-question"
                onClick={toggle}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                {isOpen ? <Minus size={20} color="var(--color-primary)" /> : <Plus size={20} color="var(--color-grey)" />}
            </button>
            <div
                className="faq-answer-wrapper"
                style={{
                    maxHeight: isOpen ? '500px' : '0',
                    opacity: isOpen ? 1 : 0
                }}
            >
                <p className="faq-answer">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is TekVida?",
            answer: "TekVida is a comprehensive Clinic Management System designed to streamline healthcare operations. It helps clinics manage patient records, appointments, billing, and inventory efficiently."
        },
        {
            question: "Is my data secure with TekVida?",
            answer: "Yes, security is our top priority. We use advanced encryption and follow industry best practices to ensure your clinic's data and patient information are always protected."
        },
        {
            question: "Can I access TekVida on mobile devices?",
            answer: "Absolutely. TekVida is fully responsive and optimized for use on desktops, tablets, and smartphones, allowing you to manage your clinic from anywhere."
        },
        {
            question: "Do you offer customer support?",
            answer: "We provide dedicated customer support to assist you with any questions or technical issues. Our team is available to ensure your experience with TekVida is smooth."
        },
        {
            question: "How does the pricing work?",
            answer: "We offer flexible pricing plans tailored to clinics of different sizes. Please contact our sales team for a detailed quote based on your specific needs."
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container faq-container">

                {/* Left Side - Header */}
                <div className="faq-header">
                    <h2 className="faq-title">
                        Frequently Asked<br />
                        <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="faq-desc">
                        Find answers to common questions about our clinic management software. Can't find what you're looking for? Contact our support team.
                    </p>
                    <button className="btn btn-primary">
                        Contact Support
                    </button>
                </div>

                {/* Right Side - Accordion */}
                <div className="faq-accordion">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            toggle={() => handleToggle(index)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
