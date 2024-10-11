import React from "react";
import { Link } from 'react-router-dom';
import cloud from '../assets/img/cloud.png';
import webpicture from '../assets/img/apps.png';
import datavision from '../assets/img/graphs.png';
import datasci from '../assets/img/data.png';
import soft from '../assets/img/soft.png';
import lead from '../assets/img/leader.png';

export const Serve = () => {
      return (
          <section className="section-black">
                <div className="container">
                      <div className="row text-center">
                            <h2 className="section-title">Our Services</h2>
                            <p className="section-subtitle">Explore our range of professional services</p>
                      </div>
                      <div className="row justify-content-center">
                            {/* First Service */}
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                  <Link to="/services/software-development" className="service-link">
                                        <div className="service-item">
                                              <img src={soft} alt="Software Development" className="service-image" />
                                              <h3>Software Development</h3>
                                              <p>We construct end-to-end custom software development services to help businesses improve their operational efficiency and meet unique requirements.</p>
                                        </div>
                                  </Link>
                            </div>
                            {/* Second Service */}
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                  <Link to="/services/web-design" className="service-link">
                                        <div className="service-item">
                                              <img src={webpicture} alt="Web Design" className="service-image" />
                                              <h3>Web Design</h3>
                                              <p>Our professional web design services help businesses establish a strong online presence. Our team of experienced designers create visually appealing and user-friendly websites.</p>
                                        </div>
                                  </Link>
                            </div>
                            {/* Third Service */}
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                  <Link to="/services/agile-coaching" className="service-link">
                                        <div className="service-item">
                                              <img src={lead} alt="Agile Coaching" className="service-image" />
                                              <h3>Agile Coaching</h3>
                                              <p>We offer agile coaching services to help organizations optimize their development processes and drive innovation.</p>
                                        </div>
                                  </Link>
                            </div>
                            {/* Fourth Service */}
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                  <Link to="/services/cloud-solutions" className="service-link">
                                        <div className="service-item">
                                              <img src={cloud} alt="Cloud Solutions" className="service-image" />
                                              <h3>Cloud Solutions</h3>
                                              <p>Our comprehensive suite of cloud solutions helps businesses optimize operations and enhance digital capabilities.</p>
                                        </div>
                                  </Link>
                            </div>
                            {/* Fifth Service */}
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                  <Link to="/services/data-science" className="service-link">
                                        <div className="service-item">
                                              <img src={datasci} alt="Data Science" className="service-image" />
                                              <h3>Data Science</h3>
                                              <p>Our data-driven approach helps organizations make informed decisions and gain a competitive edge with advanced data science services.</p>
                                        </div>
                                  </Link>
                            </div>
                            {/* Sixth Service */}
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                  <Link to="/services/data-visualization" className="service-link">
                                        <div className="service-item">
                                              <img src={datavision} alt="Data Visualization" className="service-image" />
                                              <h3>Data Visualization</h3>
                                              <p>We design visually appealing and understandable visualizations using the latest tools to drive informed decision-making.</p>
                                        </div>
                                  </Link>
                            </div>
                      </div>
                </div>

                {/* Inline styles for layout, centering and hover animation */}
                <style jsx>{`
                .section-black {
                    background-color: #000;
                    color: white;
                    padding: 50px 0;
                }
                .service-item {
                    text-align: center;
                    padding: 30px;
                    border-radius: 10px;
                    margin-bottom: 30px;
                    background-color: #1a1a1a;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    height: 350px; /* Shorter height */
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin: 15px;
                    align-items: center; /* Centers all content horizontally */
                }
                .service-link {
                    text-decoration: none;
                    color: inherit;
                }
                .service-item:hover .service-image {
                    animation: jiggle 0.3s ease-in-out forwards;
                }
                .service-image {
                    width: 100px;
                    height: 100px;
                    object-fit: contain;
                    margin-bottom: 20px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
                h3 {
                    font-size: 22px;
                    font-weight: bold;
                    color: #fff;
                    margin-bottom: 10px;
                }
                p {
                    font-size: 14px;
                    color: #aaa;
                    margin-bottom: 20px;
                }
                .section-title {
                    color: #fff;
                    font-size: 36px;
                    font-weight: bold;
                    margin-bottom: 30px;
                }
                .section-subtitle {
                    color: #aaa;
                    font-size: 16px;
                    margin-bottom: 40px;
                }
                @media (max-width: 768px) {
                    .service-item {
                        height: 300px;
                    }
                    .service-image {
                        height: 80px;
                        width: 80px;
                    }
                    .section-title {
                        font-size: 28px;
                    }
                }

                /* Jiggle animation */
                @keyframes jiggle {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(3deg); }
                    50% { transform: rotate(-3deg); }
                    75% { transform: rotate(3deg); }
                    100% { transform: rotate(0deg); }
                }
            `}</style>
          </section>
      );
};
