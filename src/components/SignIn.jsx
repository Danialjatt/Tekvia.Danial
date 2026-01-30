import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import './Auth.css';

const SignIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate Login
        setTimeout(() => {
            setIsLoading(false);
            console.log("Logged In:", formData);
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
                    <h1 className="brand-heading">Welcome back to Tekvida.</h1>
                    <p className="brand-desc">
                        Manage your clinic with ease. Access your schedule, patient records, and performance insights.
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
                        <h2 className="form-title">Sign in to your account</h2>
                        <p className="form-subtitle">
                            Don't have an account? <Link to="/signup">Sign up for free</Link>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
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
                            <div className="flex-between">
                                <label className="form-label" htmlFor="password">Password</label>
                                <a href="#forgot" className="forgot-link">Forgot password?</a>
                            </div>
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

                        <div className="form-checkbox">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            />
                            <label htmlFor="rememberMe" className="checkbox-label">
                                Remember me for 30 days
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-submit" disabled={isLoading}>
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="social-divider">
                        <span className="divider-text">or sign in with</span>
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
        </div>
    );
};

export default SignIn;
