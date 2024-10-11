import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft, FaPlay, FaPause } from 'react-icons/fa';

export const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const length = slides.length;
    const autoScrollInterval = 3000; // 3 seconds for auto scroll

    const nextSlide = () => {
        setCurrent((current + 1) % length);
    };

    const prevSlide = () => {
        setCurrent((current - 1 + length) % length);
    };

    const toggleAutoPlay = () => {
        setAutoPlay(!autoPlay);
    };

    // Auto Scroll Effect
    useEffect(() => {
        let slider;
        if (autoPlay) {
            slider = setInterval(nextSlide, autoScrollInterval);
        }
        return () => clearInterval(slider);
    }, [current, autoPlay]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="image-slider">
            {/* Slider Content */}
            <div className="slider-content-wrapper">
                {/* Current Slide */}
                <div className="slide">
                    <div className="image-container">
                        <img
                            src={slides[current].image}
                            alt={slides[current].title || 'Slide Image'}
                            className="image"
                        />
                    </div>
                    <div className="text-content">
                        <h2>{slides[current].title}</h2>
                        <p>{slides[current].description}</p>
                        {slides[current].link && (
                            <a href={slides[current].link} className="read-more">
                                Read more
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Controls Section */}
            <div className="custom-controls">
                {/* Play/Pause Button */}
                <div className="pause-button">
                    <button onClick={toggleAutoPlay} aria-label="Play/Pause">
                        {autoPlay ? <FaPause /> : <FaPlay />}
                    </button>
                </div>

                {/* Navigation Arrows */}
                <div className="navigation">
                    <button onClick={prevSlide} className="custom-arrow" aria-label="Previous Slide">
                        <FaArrowLeft />
                    </button>
                    <button onClick={nextSlide} className="custom-arrow" aria-label="Next Slide">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};
