import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send Message');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        // Simulate an API call
        setTimeout(() => {
            setButtonText('Send Message');
            setFormDetails(formInitialDetails);
            setStatus({ success: true, message: 'Message sent successfully!' });
        }, 2000);
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <div className="contact-bx">
                            <h2>Get In Touch</h2>
                            <p>
                                We'd love to hear from you! Please fill out the form below and we'll get back to you as
                                soon as possible.
                            </p>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col sm={6} className="form-group">
                                        <input
                                            type="text"
                                            value={formDetails.firstName}
                                            placeholder="First Name"
                                            onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                            required
                                        />
                                    </Col>
                                    <Col sm={6} className="form-group">
                                        <input
                                            type="text"
                                            value={formDetails.lastName}
                                            placeholder="Last Name"
                                            onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                            required
                                        />
                                    </Col>
                                    <Col sm={6} className="form-group">
                                        <input
                                            type="email"
                                            value={formDetails.email}
                                            placeholder="Email Address"
                                            onChange={(e) => onFormUpdate('email', e.target.value)}
                                            required
                                        />
                                    </Col>
                                    <Col sm={6} className="form-group">
                                        <input
                                            type="tel"
                                            value={formDetails.phone}
                                            placeholder="Phone Number"
                                            onChange={(e) => onFormUpdate('phone', e.target.value)}
                                        />
                                    </Col>
                                    <Col className="form-group">
                    <textarea
                        rows="6"
                        value={formDetails.message}
                        placeholder="Your Message"
                        onChange={(e) => onFormUpdate('message', e.target.value)}
                        required
                    ></textarea>
                                    </Col>
                                    <Col className="text-center">
                                        <button type="submit">
                                            <span>{buttonText}</span>
                                        </button>
                                    </Col>
                                    {status.message && (
                                        <Col className="status-message">
                                            {status.success ? (
                                                <p className="success">
                                                    <FaCheckCircle /> {status.message}
                                                </p>
                                            ) : (
                                                <p className="error">
                                                    <FaExclamationCircle /> {status.message}
                                                </p>
                                            )}
                                        </Col>
                                    )}
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
