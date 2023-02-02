import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";


export const Wins = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="win" id="wins">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="win-bx wow zoomIn">
                        <h2>Our Wins</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                
                                <h5>Justice40 tracker</h5>
                                <p>Justice40 Initiative to confront and address decades of underinvestment in disadvantaged communities</p>
                            </div>
                            <div className="item">
                                
                                <h5>CEJST (Climate Economic Justice Screening Tool) </h5>
                                <p>We added racial data to the existing CEJST (Climate Economic Justice Screening Tool) tool to help better 
                                  identify disadvantaged communities throughout the United States.
                                </p>
                            </div>
                            <div className="item">

                                <h5>*</h5>
                                <p>We worked with Tennessee State University to track and visualize environmental data
                                  for Tennessee and Louisianan.
                                </p>
                            </div>
                            <div className="item">
          
                                <h5>Hutch Studios</h5>
                                <p>We have partnered with <a href="https://hutchstudio.io/">Hutch Studios</a> and <a href="https://fearless.tech/">Fearless Solutions</a></p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}