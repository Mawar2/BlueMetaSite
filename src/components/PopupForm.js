import React, { useState } from 'react';

function PopupForm({ onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission status

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set submitting state to true

        await onSubmit(formData); // Wait for the submission process
        setIsSubmitting(false); // Reset submitting state
        setFormData({ // Clear the form after submission
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: ''
        });
        onClose(); // Close the popup after submission
    };

    // Basic validation to check if all required fields are filled
    const isFormValid = formData.firstName && formData.lastName && formData.email && formData.phone;

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Enter Your Information</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleChange}
                    />
                    <button type="submit" disabled={!isFormValid || isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
                <button className="close-btn" onClick={onClose} disabled={isSubmitting}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default PopupForm;
