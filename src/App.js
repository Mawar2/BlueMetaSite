import './App.css';
import { useEffect, useState } from 'react';
import { logEvent } from 'firebase/analytics';
import { analytics, db } from './firebase-config'; // Import Firestore instance
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore methods
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Wins } from './components/Wins';
import { Serve } from './components/Service';
import { ImageSlider } from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import { Footer } from './components/Footer';
import PopupForm from './components/PopupForm'; // Import the popup form
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import { ServicesPage } from './components/ServicesPage'; // Import ServicesPage
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [showPopup, setShowPopup] = useState(true); // State to manage popup visibility
    const [isSubmitting, setIsSubmitting] = useState(false); // State to manage form submission status

    useEffect(() => {
        if (analytics) {
            // Log initial page view
            logEvent(analytics, 'page_view', { section: 'app' });
        }
    }, []);

    useEffect(() => {
        if (analytics) {
            logEvent(analytics, 'view_section', { section: 'NavBar' });
        }
    }, []);

    useEffect(() => {
        if (analytics) {
            logEvent(analytics, 'view_section', { section: 'Banner' });
        }
    }, []);

    useEffect(() => {
        if (analytics) {
            logEvent(analytics, 'view_section', { section: 'Service' });
        }
    }, []);

    useEffect(() => {
        if (analytics) {
            logEvent(analytics, 'view_section', { section: 'Wins' });
        }
    }, []);

    useEffect(() => {
        if (analytics) {
            logEvent(analytics, 'view_section', { section: 'ImageSlider' });
        }
    }, []);

    useEffect(() => {
        if (analytics) {
            logEvent(analytics, 'view_section', { section: 'Contact' });
        }
    }, []);

    useEffect(() => {
        if (analytics) {
            logEvent(analytics, 'view_section', { section: 'Footer' });
        }
    }, []);

    const handleFormSubmit = async (formData) => {
        setIsSubmitting(true); // Set submitting state to true
        try {
            // Add a new document in the "users" collection
            await addDoc(collection(db, 'users'), formData);
            console.log('User Data:', formData);
            alert('Information submitted successfully!');
            setShowPopup(false); // Close the popup after successful submission
        } catch (e) {
            console.error('Error adding document: ', e);
            alert('There was an error submitting your information. Please try again.');
        } finally {
            setIsSubmitting(false); // Reset submitting state
        }
    };

    const handlePopupClose = () => {
        if (!isSubmitting) {
            setShowPopup(false);
        }
    };

    return (
        <Router>
            <div className="App">
                {showPopup && (
                    <PopupForm
                        onClose={handlePopupClose}
                        onSubmit={handleFormSubmit}
                    />
                )}
                <NavBar />

                {/* Define routes here */}
                <Routes>
                    {/* Main page route */}
                    <Route path="/" element={
                        <>
                            <Banner />
                            <Serve />
                            <Wins />
                            <ImageSlider slides={SliderData} />
                            <Contact />
                        </>
                    } />

                    {/* Services Page Route */}
                    <Route path="/services/:serviceName" element={<ServicesPage />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
