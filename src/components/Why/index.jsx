import './Why.css'
import Wave from '../../assets/icons/wave.svg?react';
import WhyImage from '../../assets/images/why.svg?react'
import TextDecor from "../../assets/icons/text-decor.svg?react";
import data from "../../data/why.json"
import Card, { CardContent, CardHeader } from '../../components/Card';
import Check from '../../assets/icons/check.svg?react';

const Why = () => {
  return (
    <>
      <section className="Why">
        <div className="Why--info">
          <div className="why--info-heading">
            <p className="heading">Why Choose Us</p>
            <Wave className="Why--wave" />
          </div>
          <h2>
            <TextDecor className="why-highlight highlight" />
            Creating A Community Of Life Long Learners
          </h2>
          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris..
          </p>
          <div className='why--cards'>
            {data.map((item, index) => {
              return (
                <Card className="why--card" key={index}>
                  <CardHeader>
                    <div className='why--card-header'>
                      <Check />
                      <p>{item.title}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="why--card-content">
                    <p>{item.content}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        <WhyImage className="Why--image" />
      </section>
    </>
  );
}

export default Why