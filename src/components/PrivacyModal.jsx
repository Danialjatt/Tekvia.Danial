import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import './PrivacyModal.css';

const PrivacyModal = ({ isOpen, onClose }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="privacy-modal-overlay" onClick={handleBackdropClick}>
            <div className="privacy-modal-content">
                <div className="privacy-modal-header">
                    <h2>Privacy Policy</h2>
                    <button className="close-button" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>
                <div className="privacy-modal-body">
                    <p><strong>Effective Date:</strong> December 19, 2025</p>

                    <p>This Privacy Policy explains how Tekvida collects, uses, stores, and protects information processed through its healthcare management platform. Tekvida is a healthcare software system offered by MapleOre and is used exclusively by healthcare providers and their authorized staff.</p>

                    <p>This Privacy Policy applies to all healthcare organizations, providers, staff members, and users who access or use the Tekvida platform ("Platform").</p>

                    <h3>1. Introduction</h3>
                    <p>Tekvida is designed for use by healthcare organizations to manage clinical, operational, and administrative data. MapleOre follows strong privacy and security principles aligned with industry best practices for handling medical and personal information.</p>
                    <p>By using Tekvida, you agree to the practices described in this Privacy Policy.</p>

                    <h3>2. Roles & Responsibilities</h3>
                    <p>Healthcare Organizations using Tekvida act as Data Controllers and determine how patient data is collected, used, and retained.</p>
                    <p>MapleOre acts as a Data Processor, processing data solely on behalf of healthcare organizations and according to their instructions.</p>
                    <p>Patients should direct all data-related requests to their healthcare provider.</p>

                    <h3>3. Information We Collect</h3>
                    <h4>3.1 Personal Information</h4>
                    <p>The Platform may store personal information entered by healthcare providers or patients, including:</p>
                    <ul>
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Other information entered by authorized staff</li>
                    </ul>

                    <h4>3.2 Medical / Clinical Information</h4>
                    <p>Tekvida stores clinical and healthcare-related data entered by providers, including but not limited to:</p>
                    <ul>
                        <li>Patient demographics</li>
                        <li>Appointments and scheduling data</li>
                        <li>Consultation notes</li>
                        <li>Diagnoses</li>
                        <li>Prescriptions</li>
                        <li>Uploaded documents and medical images</li>
                        <li>Billing records and invoices</li>
                        <li>Other clinical or administrative data added by healthcare staff</li>
                    </ul>

                    <h4>3.3 Automatically Collected Information</h4>
                    <p>For security and operational purposes, Tekvida automatically collects limited technical data, including:</p>
                    <ul>
                        <li>IP address</li>
                        <li>Device and browser information</li>
                        <li>Access logs</li>
                        <li>Session identifiers</li>
                    </ul>
                    <p>This information is used strictly for security, troubleshooting, auditing, and platform performance.</p>

                    <h3>4. How We Use the Information</h3>
                    <p>Data processed through Tekvida is used solely to:</p>
                    <ul>
                        <li>Manage patient records</li>
                        <li>Schedule and manage appointments</li>
                        <li>Enable clinical documentation and consultations</li>
                        <li>Handle billing and financial records</li>
                        <li>Maintain system security and access control</li>
                        <li>Monitor and improve platform reliability and performance</li>
                        <li>Comply with legal, regulatory, or contractual obligations</li>
                    </ul>
                    <p>Platform improvements are based only on aggregated and anonymized system usage data.</p>
                    <p>We do not use patient or user data for advertising, marketing, or profiling.</p>

                    <h3>5. How We Share Information</h3>
                    <h4>5.1 Data Isolation Between Organizations</h4>
                    <p>Each healthcare organization's data is logically isolated. No data is shared between different organizations using the Platform.</p>

                    <h4>5.2 Service Providers</h4>
                    <p>Tekvida relies on trusted infrastructure providers (such as cloud hosting services) strictly to operate and secure the Platform. These providers process data only under MapleOre's instructions and are contractually required to protect confidentiality and security.</p>

                    <h4>5.3 Legal Requirements</h4>
                    <p>Information may be disclosed if required by applicable law, court order, or lawful government request.</p>

                    <h4>5.4 No Data Sales</h4>
                    <p>We do not sell, rent, or monetize patient or user data.</p>

                    <h3>6. Data Storage & Security</h3>
                    <p>Tekvida is hosted on secure cloud infrastructure (AWS). We implement administrative, technical, and organizational safeguards, including:</p>
                    <ul>
                        <li>Encryption at rest for stored data</li>
                        <li>Encryption in transit using HTTPS/TLS</li>
                        <li>Role-based access control (RBAC)</li>
                        <li>Audit logging of sensitive actions</li>
                        <li>Secure authentication and session management</li>
                    </ul>
                    <p>While no system can guarantee absolute security, we take reasonable and appropriate measures to reduce risk and protect data.</p>

                    <h3>7. Data Retention</h3>
                    <p>Patient and organizational data is retained:</p>
                    <ul>
                        <li>For as long as the healthcare organization continues using Tekvida, and</li>
                        <li>In accordance with applicable healthcare laws and the organization's retention obligations</li>
                    </ul>
                    <p>Authorized organizational staff may request deletion of data, subject to legal and medical record retention requirements.</p>

                    <h3>8. User & Patient Rights</h3>
                    <p>Authorized healthcare organization personnel may request:</p>
                    <ul>
                        <li>Access to organizational or patient data</li>
                        <li>Corrections to inaccurate information</li>
                        <li>Deletion of data (subject to legal obligations)</li>
                    </ul>
                    <p>Patients must contact their healthcare provider directly to exercise rights related to their medical records.</p>

                    <h3>9. Cookies & Session Management</h3>
                    <p>Tekvida does not use advertising cookies or analytics trackers.</p>
                    <p>The Platform uses essential session mechanisms strictly for:</p>
                    <ul>
                        <li>Authentication</li>
                        <li>Authorization</li>
                        <li>Maintaining secure user sessions</li>
                    </ul>
                    <p>These mechanisms are not used for behavioral tracking or marketing.</p>

                    <h3>10. Children's Privacy</h3>
                    <p>Tekvida may store medical information related to minors only when entered by healthcare providers or authorized users. We do not knowingly collect personal information directly from children.</p>

                    <h3>11. Data Breach Notification</h3>
                    <p>In the event of a data breach affecting personal or medical information, MapleOre will notify affected healthcare organizations in accordance with applicable laws and contractual obligations.</p>

                    <h3>12. Changes to This Privacy Policy</h3>
                    <p>We may update this Privacy Policy from time to time. Material changes will be communicated to healthcare organizations through the Platform or via email.</p>

                    <h3>13. Contact Information</h3>
                    <p>For privacy-related questions or concerns, please contact:</p>
                    <p><strong>Company:</strong> MapleOre</p>
                    <p><strong>Email:</strong> info@mapleore.com</p>
                    <p><strong>Address:</strong> 58 Crew Crescent, Vaughan, Ontario L6A 3E9, Canada</p>

                    <div style={{ marginTop: '2rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem', color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                        Last Updated: December 19, 2025
                    </div>
                </div>
                <div className="privacy-modal-footer">
                    <button className="btn btn-primary" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default PrivacyModal;
