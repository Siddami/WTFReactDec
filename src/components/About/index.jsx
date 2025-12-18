import './About.css'
import TextDecor from "../../assets/icons/text-decor.svg?react"
import Button from '../Button';
import Arrow from "../../assets/icons/arrow.svg?react";


const About = () => {
  return (
    <>
      <section className="about">
        <img src="/images/about.svg" alt="about" />
        <div className="about--info">
          <p className="about--heading">Our About Us</p>
          <h2>
            <TextDecor className="highlight" />
            Learn & Grow your skills From anywhere{" "}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris..
          </p>
          <div className="about--extra">
            <div>
              <h4>Flexible classNamees</h4>
              <p>
                Suspendisse ultrice gravida dictum fusce placerat ultricies
                integer quis auctor elit sed vulputate mi sit.
              </p>
            </div>
            <div>
              <h4>Flexible classNamees</h4>
              <p>
                Suspendisse ultrice gravida dictum fusce placerat ultricies
                integer quis auctor elit sed vulputate mi sit.
              </p>
            </div>
          </div>
          <div className="btn-container">
            <Button
              suffix={<Arrow />}
              rounded={true}
              size="lg"
              variant="primary"
              radius="rounded-md"
            >
              Load More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;