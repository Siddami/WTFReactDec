import './Hero.css';
import Arrow from '../../assets/icons/arrow.svg?react';
import Notebook from '../../assets/images/bg-image1.svg?react';
import Dot from '../../assets/images/bg-image2.svg?react';
import HeroImage from '../../assets/images/hero-image.svg?url'
import CurvyArrow from '../../assets/icons/curvy-arrow.svg?react';
import OverHeadInfo from '../../assets/images/overhead-info.svg?react';
import Button from '../Button';

const Hero = () => {
  return (
    <section className="Hero">
      <Notebook className="bg-image bg-image1" />
      <Dot className="bg-image bg-image2" />
      <div className="Hero__container">
        <div className="Hero__text">
          <p className="hero__greeting">Welcome Edunity online courses</p>
          <h1 className="hero__heading">
            Achieving Your Dreams Through Education
          </h1>
          <p className="hero__paragraph">
            We are experienced in educational platform and skilled strategies
            for the success of our online learning.
          </p>
          <div className='button-container'>
            <Button
              as='a'
              href='#'
              variant="blue"
              size="lg"
              suffix={<Arrow />}
              rounded={true}
              radius="rounded-md"
            >
              Find Courses
            </Button>
          </div>
        </div>
        <img src={HeroImage} alt="hero image" className='hero__image' />
        </div>
        <CurvyArrow className="overhead__image" />
        <OverHeadInfo className="overhead__info"/>
    </section>
  );
}

export default Hero