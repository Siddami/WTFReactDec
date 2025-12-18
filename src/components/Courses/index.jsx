import "./Courses.css";
import Button from "../Button";
import Arrow from "../../assets/icons/arrow.svg?react";
import data from "../../data/courses.json";
import Card, { CardContent, CardHeader, CardTitle, CardFooter } from "../Card";
import Star from "../../assets/icons/star.svg?react";
import CardBg from "../../assets/images/card-bg.svg?react";
import Note from "../../assets/icons/note.svg?react";
import Clock from "../../assets/icons/clock.svg?react";
import User from "../../assets/icons/user.svg?react";
import LongArrow from "../../assets/icons/long-arrow.svg?react";
import TextDecor from "../../assets/icons/text-decor.svg?react"

const Courses = () => {
  return (
    <>
      <section className="Courses">
        <p className="Courses--heading">Top Popular Course</p>
        <div className="Courses--intro">
          <h2>
            <TextDecor className="highlight"/>
            Edunity Course Student Can Join With Us.
          </h2>
          <Button
            variant="primary"
            rounded={true}
            radius="rounded-md"
            size="lg"
            suffix={<Arrow />}
          >
            Load More Course
          </Button>
        </div>
        <div className="Courses--cards">
          {data.map((course) => (
            <Card key={course.id} className="Courses--card">
              <CardBg className="Courses--card-bg" />
              <CardHeader>
                <img src={course.image} alt={course.title} />
                <div className="Courses--card-meta">
                  <div className="rating">
                    <Star />
                    <span>4.5k</span>
                  </div>
                  <p className="price">$50.00</p>
                </div>
                <CardTitle className="Courses--card-title">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="Courses--card-info">
                <div className="Courses--card-content">
                  <div className="lesson">
                    <Note />
                    <p>Lesson 10</p>
                    <Clock />
                  </div>
                  <div className="user">
                    <p>19h 30m</p>
                    <User />
                  </div>
                  <p className="student">Students20+</p>
                </div>
              </CardContent>
              <CardFooter className="Courses--card-footer">
                <div className="user-details">
                  <img src={course.profile} alt={course.name} />
                  <p>{course.name}</p>
                </div>
                <Button
                  size="sm"
                  variant="primary"
                  suffix={<LongArrow />}
                  radius="rounded-md"
                >
                  Enroll
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;
