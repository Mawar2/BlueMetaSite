import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const servicesData = {
    "software-development": {
        title: "Software Development",
        statistics: "Our software development solutions have improved operational efficiency for over 20 clients, leading to a 30% reduction in costs.",
        caseStudies: [
            { title: "Case Study 1", description: "How we improved X with software.", details: "Detailed information about the case study." },
            { title: "Case Study 2", description: "Building robust platforms for Y.", details: "Detailed information about building platforms." },
        ],
    },
    "web-design": {
        title: "Web Design",
        statistics: "Our web design services have increased client engagement by 40% on average.",
        caseStudies: [
            { title: "Case Study 1", description: "Revolutionary web design for A.", details: "More about this web design project." },
            { title: "Case Study 2", description: "Mobile-first design for B.", details: "Detailed information about mobile-first design." },
        ],
    },
    "agile-coaching": {
        title: "Agile Coaching",
        statistics: "Successfully implemented Agile practices across 15 organizations, resulting in 50% faster delivery.",
        caseStudies: [
            { title: "Case Study 1", description: "Agile coaching for better workflows.", details: "Detailed information about the coaching project." },
            { title: "Case Study 2", description: "Scrum implementation for C.", details: "Detailed information about Scrum implementation." },
        ],
    },
    "cloud-solutions": {
        title: "Cloud Solutions",
        statistics: "Migrated over 10 companies to the cloud, leading to 25% increased scalability.",
        caseStudies: [
            { title: "Case Study 1", description: "Migrating Z to the cloud.", details: "More about the cloud migration process." },
            { title: "Case Study 2", description: "Scaling cloud services for Y.", details: "How we scaled cloud services for the client." },
        ],
    },
    "data-science": {
        title: "Data Science",
        statistics: "Our data science solutions have enabled clients to make data-driven decisions, increasing revenue by 15%.",
        caseStudies: [
            { title: "Case Study 1", description: "Predictive analytics for X.", details: "More about how we implemented predictive analytics." },
            { title: "Case Study 2", description: "Data-driven insights for Y.", details: "Insights derived from data for better decision-making." },
        ],
    },
    "data-visualization": {
        title: "Data Visualization",
        statistics: "We created dashboards that reduced data analysis time by 30%.",
        caseStudies: [
            { title: "Case Study 1", description: "Interactive dashboards for A.", details: "Details about the interactive dashboard solution." },
            { title: "Case Study 2", description: "Visualizing trends for B.", details: "How we visualized key trends for better decision-making." },
        ],
    },
};

export const ServicesPage = () => {
    const { serviceName } = useParams();
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState(serviceName || "software-development");
    const [expandedCaseStudy, setExpandedCaseStudy] = useState(null); // Track which case study is expanded

    useEffect(() => {
        setSelectedService(serviceName || "software-development");
    }, [serviceName]);

    const handleServiceChange = (service) => {
        setSelectedService(service);
        navigate(`/services/${service}`);
        setExpandedCaseStudy(null); // Reset expanded case study on service change
    };

    const toggleCaseStudy = (index) => {
        setExpandedCaseStudy((prevIndex) => (prevIndex === index ? null : index)); // Toggle expansion
    };

    return (
        <div className="services-page">
            <div className="services-container">
                {/* Left-side menu with all services */}
                <div className="services-menu">
                    <ul>
                        {Object.keys(servicesData).map((key) => (
                            <li
                                key={key}
                                className={selectedService === key ? "active" : ""}
                                onClick={() => handleServiceChange(key)}
                            >
                                {servicesData[key].title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right-side content showing selected service details with transition */}
                <div className="service-details">
                    <TransitionGroup>
                        <CSSTransition
                            key={selectedService}
                            timeout={500}
                            classNames="fade"
                        >
                            <div>
                                <h2>{servicesData[selectedService].title}</h2>
                                <p className="statistics">{servicesData[selectedService].statistics}</p>
                                <div className="case-studies">
                                    {servicesData[selectedService].caseStudies.map((study, index) => (
                                        <div key={index} className="case-study-item" onClick={() => toggleCaseStudy(index)}>
                                            <h3>{study.title}</h3>
                                            <p>{study.description}</p>
                                            {expandedCaseStudy === index && (
                                                <div className="case-study-details">
                                                    <p>{study.details}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>

            <style jsx>{`
                .services-page {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    padding: 150px 50px 50px;
                    background: linear-gradient(135deg, #020024, #090979, #00d4ff);
                    color: #fff;
                    min-height: 100vh;
                }
                .services-container {
                    display: flex;
                    width: 100%;
                    max-width: 1200px;
                    margin-bottom: 50px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                }
                .services-menu {
                    flex: 1;
                    max-width: 250px;
                    margin-right: 20px;
                    background: #000;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
                }
                .services-menu ul {
                    list-style: none;
                    padding: 0;
                }
                .services-menu li {
                    padding: 15px;
                    font-size: 18px;
                    color: #aaa;
                    cursor: pointer;
                    transition: color 0.3s, transform 0.3s;
                    margin-bottom: 10px;
                    border-radius: 5px;
                    position: relative;
                }
                .services-menu li.active,
                .services-menu li:hover {
                    color: #fff;
                    background: linear-gradient(135deg, #6B02FF, #23128D);
                    transform: translateX(10px);
                }
                .service-details {
                    flex: 3;
                    background: linear-gradient(135deg, #1a1a1a, #333);
                    padding: 30px;
                    border-radius: 10px;
                    position: relative;
                    animation: fade-in 1s ease-in-out;
                }
                .statistics {
                    margin-bottom: 20px;
                    font-size: 16px;
                    color: #ccc;
                }
                .case-studies {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 20px;
                }
                .case-study-item {
                    background: linear-gradient(135deg, #6B02FF, #23128D); /* Change to blue-purple theme */
                    border-radius: 10px;
                    padding: 20px;
                    color: white;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                }
                .case-study-item:hover {
                    transform: rotate(3deg) translateY(-10px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
                }
                .case-study-details {
                    margin-top: 10px;
                    background: rgba(255, 255, 255, 0.1);
                    padding: 10px;
                    border-radius: 5px;
                    font-size: 14px;
                    color: #00d4ff; /* More visible text color on blue background */
                }

                /* Fade animation */
                .fade-enter {
                    opacity: 0;
                    transform: translateY(20px);
                }
                .fade-enter-active {
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 500ms ease-in, transform 500ms ease-in;
                }
                .fade-exit {
                    opacity: 1;
                }
                .fade-exit-active {
                    opacity: 0;
                    transition: opacity 500ms ease-out;
                }

                @keyframes fade-in {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default ServicesPage;
