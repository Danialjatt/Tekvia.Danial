import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
    return (
        <div
            className="faq-item"
            style={{
                borderBottom: '1px solid var(--color-border)',
                marginBottom: '1rem',
                paddingBottom: '1rem'
            }}
        >
            <button
                onClick={toggle}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '1rem 0',
                    textAlign: 'left',
                    color: 'var(--color-text-main)',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    fontFamily: 'var(--font-main)'
                }}
            >
                <span>{question}</span>
                {isOpen ? <ChevronUp size={20} color="var(--color-primary)" /> : <ChevronDown size={20} color="var(--color-grey)" />}
            </button>
            <div
                style={{
                    maxHeight: isOpen ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isOpen ? 1 : 0
                }}
            >
                <p style={{
                    paddingBottom: '1rem',
                    color: 'var(--color-text-light)',
                    lineHeight: '1.6'
                }}>
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
        <section id="faq" style={{ backgroundColor: '#fff', padding: '6rem 0' }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                alignItems: 'start'
            }}>

                {/* Left Side - Header */}
                <div className="faq-header">
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        marginBottom: '1.5rem',
                        color: 'var(--color-text-main)',
                        position: 'relative'
                    }}>
                        Frequently Asked<br />
                        <span className="text-gradient">Questions</span>
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-light)',
                        marginBottom: '2rem',
                        maxWidth: '400px'
                    }}>
                        Find answers to common questions about our clinic management software. Can't find what you're looking for? Contact our support team.
                    </p>
                    <button className="btn btn-primary">
                        Contact Support
                    </button>
                </div>

                {/* Right Side - Accordion */}
                <div className="faq-accordion" style={{
                    backgroundColor: 'var(--color-bg-light)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-soft)'
                }}>
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
