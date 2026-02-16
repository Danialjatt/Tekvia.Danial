import React from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
    // Placeholder data - can be easily updated later
    const plans = [
        {
            name: "Starter",
            price: "$0",
            period: "/month",
            description: "Perfect for small clinics just getting started.",
            features: [
                "Up to 2 practitioners",
                "500 patient records",
                "Basic appointment scheduling",
                "Email notifications",
                "Standard support"
            ],
            buttonText: "Start Free",
            buttonLink: "/signup",
            isPopular: false
        },
        {
            name: "Professional",
            price: "$99",
            period: "/month",
            description: "Everything you need to grow your practice.",
            features: [
                "Up to 10 practitioners",
                "Unlimited patient records",
                "Advanced scheduling & reminders",
                "Billing & Invoicing",
                "Inventory Management",
                "Priority support"
            ],
            buttonText: "Get Started",
            buttonLink: "/signup",
            isPopular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "Advanced features for large clinics and hospitals.",
            features: [
                "Unlimited practitioners",
                "Multi-location support",
                "Custom integrations",
                "Advanced analytics",
                "Dedicated account manager",
                "24/7 Phone support"
            ],
            buttonText: "Contact Sales",
            buttonLink: "/contact",
            isPopular: false
        }
    ];

    return (
        <div className="pricing-page">
            <div className="pricing-header">
                <div className="container">
                    <h1 className="pricing-title">Simple, Transparent Pricing</h1>
                    <p className="pricing-subtitle">
                        Choose the plan that fits your clinic's needs. clear pricing, no hidden fees.
                    </p>
                </div>
            </div>

            <div className="container pricing-content">
                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
                            {plan.isPopular && <div className="popular-badge">Most Popular</div>}

                            <h3 className="plan-name">{plan.name}</h3>
                            <div className="plan-price">
                                {plan.price}
                                <span className="plan-period">{plan.period}</span>
                            </div>
                            <p className="plan-description">{plan.description}</p>

                            <div className="plan-features">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="feature-item">
                                        <Check size={18} className="feature-icon" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to={plan.buttonLink}
                                className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-outline'} pricing-btn`}
                            >
                                {plan.buttonText}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
