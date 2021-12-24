import React from "react";
import userImg from "../images/avatar-testimonial.jpg";

const TestimonialCard = () => {
  return (
    <>
      <div className="testimonial-card">
        <p className="card__info">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="card__user">
          <img className="user__img" src={userImg} alt="User profile." />
          <div className="user__details">
            <p className="user__name">Kyle Burton</p>
            <p className="user__designation">Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
