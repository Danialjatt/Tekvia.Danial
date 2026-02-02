import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, AlertCircle } from 'lucide-react';
import './Auth.css';
import PrivacyModal from './PrivacyModal';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        clinicName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPrivacy, setShowPrivacy] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        // Basic Validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        // Simulate API call
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            // Redirect to home/dashboard on success
            console.log("Registered:", formData);
            navigate('/');
        }, 1500);
    };

    return (
        <div className="auth-page">
            {/* Left Panel - Branding */}
            <div className="auth-brand">
                <div className="brand-circle circle-1"></div>
                <div className="brand-circle circle-2"></div>

                <div className="brand-content">
                    <Link to="/" className="brand-logo">tekvida</Link>
                    <h1 className="brand-heading">Join the future of clinic management.</h1>
                    <p className="brand-desc">
                        Unlock powerful tools to streamline appointments, charting, and billing.
                        Join over 5,000 clinics growing with Tekvida today.
                    </p>
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="auth-form-container">
                <div className="auth-form-wrapper">
                    {/* Back Link */}
                    <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 inline-flex items-center" style={{ marginBottom: '2rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                        <ArrowLeft size={16} /> Back to Home
                    </Link>

                    <div className="form-header">
                        <h2 className="form-title">Create your account</h2>
                        <p className="form-subtitle">
                            Already have an account? <Link to="/login">Log in</Link>
                        </p>
                    </div>

                    {error && (
                        <div style={{
                            backgroundColor: '#fee2e2',
                            color: '#b91c1c',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.9rem'
                        }}>
                            <AlertCircle size={18} />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="form-input"
                                placeholder="Dr. Sarah Smith"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="clinicName">Clinic Name</label>
                            <input
                                type="text"
                                id="clinicName"
                                name="clinicName"
                                className="form-input"
                                placeholder="Smith Family Practice"
                                value={formData.clinicName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Work Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="name@clinic.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-input"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="form-input"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-checkbox">
                            <input
                                type="checkbox"
                                id="agreeToTerms"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="agreeToTerms" className="checkbox-label">
                                I agree to the <a href="#terms" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Terms of Service</a> and <button type="button" onClick={() => setShowPrivacy(true)} style={{ color: 'var(--color-primary)', textDecoration: 'underline', background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer', display: 'inline' }}>Privacy Policy</button>.
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-submit" disabled={isLoading}>
                            {isLoading ? 'Creating Account...' : 'Get Started'}
                        </button>
                    </form>

                    <div className="social-divider">
                        <span className="divider-text">or sign up with</span>
                    </div>

                    <button type="button" className="btn-google">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google
                    </button>
                </div>
            </div>
            <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
        </div>
    );
};

export default SignUp;
