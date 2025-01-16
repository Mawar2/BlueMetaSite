// src/components/PrivacyPolicy.js

import React from 'react';

export const PrivacyPolicy = () => {
    return (
        <section className="privacy-policy">
            <div className="container">
                <h2>Privacy Policy</h2>
                <p><strong>Last Updated: January 14, 2025</strong></p>

                <p>
                    BlueMeta Technologies (“we,” “us,” or “our”) values your privacy and is committed to protecting the personal information you provide while using the “MyBlockCounts” mobile application (“App”). This Privacy Policy explains how we collect, use, and share your information, as well as your rights regarding your data. By using the App, you consent to the practices described in this Privacy Policy.
                </p>

                <h5>1. Information We Collect</h5>
                <ul>
                    <li><strong>Personal Information:</strong> First name, last name, email address, and password during account registration.</li>
                    <li><strong>Location Data:</strong> IP and GPS-based location data when using the App to pinpoint and track specific locations.</li>
                    <li><strong>User-Generated Content:</strong> Data submitted through surveys, including form responses and photos.</li>
                </ul>
                <p>Note: We do not track user behavior or app usage patterns.</p>

                <h5>2. How We Use Your Information</h5>
                <ul>
                    <li>Build and display maps that highlight locations aligning with environmental surveys.</li>
                    <li>Enable users to contribute to and edit survey submissions.</li>
                    <li>Maintain the security and functionality of the App.</li>
                </ul>
                <p>We do not use your information for marketing purposes, push notifications, or email campaigns.</p>

                <h5>3. Data Sharing</h5>
                <p>
                    We share collected data with the University of Maryland’s CEEJH Lab to support research and community engagement initiatives. Your data is not sold or shared with third parties for marketing purposes.
                </p>

                <h5>4. User Rights and Choices</h5>
                <ul>
                    <li><strong>Access and Edit:</strong> Users can view and edit their survey data within the App.</li>
                    <li><strong>Delete Data:</strong> Users can delete their account and associated data. Once an account is deleted, all personal data and submissions will be removed from our systems.</li>
                    <li><strong>Location Data Consent:</strong> By using the App, you consent to the collection and use of your location data.</li>
                </ul>

                <h5>5. Data Retention</h5>
                <ul>
                    <li>User data, including survey responses and photos, is retained indefinitely unless the user deletes their account.</li>
                    <li>We may implement additional data retention guidelines in the future as required.</li>
                </ul>

                <h5>6. Data Security</h5>
                <p>
                    We use industry-standard measures to protect your data, including:<br />
                    • Encryption of data in transit and at rest.<br />
                    • Secure authentication processes to prevent unauthorized access.<br />
                    The App uses Firebase, and data is stored exclusively in the United States.
                </p>

                <h5>7. Minors</h5>
                <p>
                    The App is designed for users aged 13 and older. We do not knowingly collect personal information from children under 13.
                </p>

                <h5>8. Updates to This Privacy Policy</h5>
                <p>
                    We may update this Privacy Policy to reflect changes to our practices or for operational, legal, or regulatory reasons. If changes are made, we will notify users by updating the “Last Updated” date at the top of this page. Continued use of the App after any updates indicates acceptance of the revised policy.
                </p>

                <h5>9. Contact Us</h5>
                <p>
                    For questions, concerns, or requests regarding your data or this Privacy Policy, please contact us at:<br />
                    Email: <a href="mailto:malik@bluemetatech.com">malik@bluemetatech.com</a>
                </p>
            </div>
        </section>
    );
};
