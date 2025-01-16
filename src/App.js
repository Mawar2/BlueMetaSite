import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Contact } from "./components/Contact";
import { Wins } from "./components/Wins";
import { Serve } from './components/Service';
import { ImageSlider } from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivatePolicy';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Banner />
                            <Serve />
                            <Wins />
                            <ImageSlider slides={SliderData} />
                            <Contact />
                        </>
                    } />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
