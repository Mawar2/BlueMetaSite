import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import bluemetalogo from "../assets/img/bluemetalogo.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); // Index of the current word
    const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting state
    const [text, setText] = useState(''); // Current text to display
    const [delta, setDelta] = useState(150); // Typing speed
    const [animationClass, setAnimationClass] = useState(''); // Animation class
    const [waitBeforeDelete, setWaitBeforeDelete] = useState(false); // Pause before deleting
    const period = 1500; // Time before deletion starts after typing the full word
    const toRotate = [
        { text: 'Software Development', className: 'software-development' },
        { text: 'Web Design', className: 'web-design' },
        { text: 'Agile Coaching', className: 'agile-coaching' }
    ]; // Words with corresponding classes

    useEffect(() => {
        const ticker = setTimeout(() => {
            tick();
        }, delta);

        return () => clearTimeout(ticker);
    }, [text, isDeleting, waitBeforeDelete]); // Update effect when these states change

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i].text;

        if (isDeleting) {
            // Deleting characters
            const updatedText = fullText.substring(0, text.length - 1);
            setText(updatedText);
            setDelta(75); // Deleting speed
            if (updatedText === '') {
                // Word fully deleted
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setAnimationClass('');
                setDelta(150); // Reset typing speed
            }
        } else {
            if (text === fullText) {
                // Word fully typed
                if (!waitBeforeDelete) {
                    // Start pause before deleting
                    setWaitBeforeDelete(true);
                    setAnimationClass(toRotate[i].className); // Apply animation class
                    setDelta(period); // Pause duration
                } else {
                    // Pause completed, start deleting
                    setWaitBeforeDelete(false);
                    setIsDeleting(true);
                    setDelta(75); // Deleting speed
                }
            } else {
                // Typing characters
                const updatedText = fullText.substring(0, text.length + 1);
                setText(updatedText);
                setDelta(150); // Typing speed
            }
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>
                            {"BlueMeta "}
                            <div className="secondHeader">
                                <h1 style={{ color: '#6C63FF', fontWeight: 'bold' }}>{"Technologies"}</h1>
                            </div>
                            <span className={`wrap ${animationClass}`}>{text}</span>
                        </h1>
                        <p> We build software to empower the things that matter. </p>
                        <button className="cta-button" onClick={() => window.location.href = 'tel:12407152769'}>
                            Call Us <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={bluemetalogo} alt="Header Img" />
                    </Col>
                </Row>
            </Container>

            {/* Styles */}
            <style jsx>{`
                .banner {
                    padding: 50px 0;
                    text-align: left;
                    color: white;
                    background: #000;
                }
                h1 {
                    font-size: 48px;
                    font-weight: bold;
                    color: white;
                }
                .secondHeader h1 {
                    font-size: 38px;
                    color: #6C63FF;
                }
                .wrap {
                    display: inline-block;
                    color: #ffffff;
                    font-size: 28px;
                    transition: all 0.3s ease;
                }

                /* Software Development Effects */
                .software-development {
                    color: #6C63FF;
                    text-shadow: 0 0 10px #6C63FF, 0 0 20px #6C63FF;
                    animation: rotate3D 4s ease-in-out, neonGlow 2s infinite alternate;
                }

                @keyframes rotate3D {
                    0% { transform: perspective(400px) rotateY(0deg); }
                    50% { transform: perspective(400px) rotateY(180deg); }
                    100% { transform: perspective(400px) rotateY(360deg); }
                }

                @keyframes neonGlow {
                    0% {
                        text-shadow: 0 0 10px #6C63FF;
                    }
                    100% {
                        text-shadow: 0 0 20px #6C63FF;
                    }
                }

                /* Web Design Effects */
                .web-design {
                    background: linear-gradient(90deg, #FF63A5, #FFD700);
                    -webkit-background-clip: text;
                    color: transparent;
                    animation: wave 3s ease-in-out infinite, glowGradient 2s infinite alternate;
                }

                @keyframes wave {
                    0% { transform: translateX(0%); }
                    50% { transform: translateX(-10%); }
                    100% { transform: translateX(0%); }
                }

                @keyframes glowGradient {
                    0% { filter: brightness(1); }
                    100% { filter: brightness(1.3); }
                }

                /* Agile Coaching Effects */
                .agile-coaching {
                    color: #63FF76;
                    border-bottom: 2px solid #63FF76;
                    animation: morph 3s infinite alternate, glowBorder 2s infinite alternate;
                }

                @keyframes morph {
                    0% { letter-spacing: 1px; }
                    100% { letter-spacing: 4px; }
                }

                @keyframes glowBorder {
                    0% { box-shadow: 0 2px 10px #63FF76; }
                    100% { box-shadow: 0 2px 20px #63FF76; }
                }

                .cta-button {
                    background-color: #6C63FF;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 50px;
                    transition: transform 0.3s ease, background 0.3s ease;
                }
                .cta-button:hover {
                    background: linear-gradient(45deg, #6C63FF, #FF63A5);
                    transform: scale(1.05);
                }

                @media (max-width: 768px) {
                    h1 {
                        font-size: 36px;
                    }
                    .wrap {
                        font-size: 22px;
                    }
                }
            `}</style>
        </section>
    );
};
