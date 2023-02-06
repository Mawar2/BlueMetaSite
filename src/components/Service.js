import React from "react";
import cloud from '../assets/img/cloud.png';
import webpicture from '../assets/img/apps.png';
import datavision from '../assets/img/graphs.png';
import datasci from '../assets/img/data.png';
import soft from '../assets/img/soft.png';
import lead from '../assets/img/leader.png';

export const Serve = () => {

      return (
            <section class="section-black">
                  <div class="container">
                        <div class="row">

                              <div class="col-md-12 text-center">

                                    <h2 class="section-title">Our Services</h2>

                                    <p class="section-subtitle"></p>

                              </div>

                              <div class="col-sm-6 col-md-4">

                                    <div class="service-item">
                                          <img src={soft} alt="Image" />

                                          <h3>Software Development</h3>
                                          <div class="service-info"><p></p></div>
                                          <p>We construct end-to-end custom software
                                                development services to help businesses improve their
                                                operational efficiency and meet unique requirements.
                                                Our team of experienced developers leverages the
                                                latest technology to deliver solutions that are scalable,
                                                secure, and user-friendly.</p>

                                    </div>
                              </div>

                              <div class="col-sm-6 col-md-4">

                                    <div class="service-item">
                                          <img src={webpicture} alt="Image" />

                                          <h3>Web Design</h3>

                                          <div class="service-info"><p></p></div>

                                          <p>Our professional web design services help businesses establish a strong online
                                                presence and reach their target audience. Our team of
                                                experienced designers create visually appealing and
                                                user-friendly websites that are optimized for search
                                                engines and mobile devices.
                                          </p>


                                    </div>

                              </div>
                              <div class="col-sm-6 col-md-4">

                                    <div class="service-item">
                                          <img src={lead} alt="Image" />

                                          <h3>Agile Coaching</h3>

                                          <div class="service-info"><p></p></div>


                                          <p>We offer agile coaching services to help
                                                organizations optimize their development processes
                                                and drive innovation. Our team of certified Agile
                                                coaches have extensive experience in implementing
                                                methodologies in various industries and can help
                                                businesses achieve their goals.</p>


                                    </div>

                              </div>

                              <div class="col-sm-6 col-md-4">

                                    <div class="service-item">
                                          <img src={cloud} alt="Image" />

                                          <h3>Cloud Solutions</h3>

                                          <div class="service-info"><p></p></div>

                                          <p>Our comprehensive suite of cloud
                                                solutions are designed to help businesses optimize their
                                                operations and enhance their digital capabilities. Our
                                                team of certified experts leverages the latest cloud
                                                technology to provide tailored solutions that meet the
                                                unique needs of each client.</p>


                                    </div>

                              </div>

                              <div class="col-sm-6 col-md-4">

                                    <div class="service-item">
                                          <img src={datasci} alt="Image" />

                                          <h3>Data Science</h3>

                                          <div class="service-info"><p></p></div>

                                          <p>Whether you need to extract insights from large datasets, 
                                                build predictive models, or develop complex algorithms, 
                                                our team has the skills and experience to help you succeed. We use a 
                                                data-driven approach to help organizations make informed decisions and gain a competitive edge. </p>
                                    </div>

                              </div>

                              <div class="col-sm-6 col-md-4">

                                    <div class="service-item">
                                          <img src={datavision} alt="Image" />

                                          <h3>Data visualization</h3>

                                          <div class="service-info"><p></p></div>

                                          <p> Our team of experts work with you to design visually appealing and understandable 
                                                visualizations using the latest tools and techniques. Get the insights you 
                                                need to make informed decisions and drive positive change with our expert 
                                                data visualization services.</p>
                                                 


                                    </div>

                              </div>

                        </div>

                  </div>

            </section>
      )
}