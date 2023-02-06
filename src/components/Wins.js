
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
              <p>We have worked with our partners to create technologies that bring quality of life improvements both at a local and national level.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">

                  <h5>Justice40 Fund Tracker</h5>
                  <p>Justice40 Initiative to confront and address decades of underinvestment in disadvantaged communities</p>
                </div>
                <div className="item">

                  <h5>Climate Economic Justice Screening Tool (CEJST)</h5>
                  <p>We added racial data to the existing CEJST tool to help better
                    identify disadvantaged communities throughout the United States.
                  </p>
                </div>
                <div className="item">

                  <h5>Justice40 Technical Support</h5>
                  <p>Led by the Bullard Center and Texas Southern University. To ensure covered programs and covered investments
                    flow to the needs of disadvantaged communities we have built a strong and authentic social network infrastructure for the
                    fair implementation of the Justice40 initiative.
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