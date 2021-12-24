import React, { useState } from "react";
import Header from "./Header";
import heroImg from "../images/illustration-1.svg";

const Hero = () => {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);

  const validateEmail = (email) => {
    const rejex =
      /^[(a-zA-Z0-9\+\-\_\.)]+\@[(a-zA-Z0-9)]+\.+[(a-zA-Z0-9) {2,4}]+$/;
    return email.match(rejex) ? setIsError(false) : setIsError(true);
  };

  return (
    <>
      <section className="hero">
        <Header />
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="hero__info">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <form className="hero__form">
              <input
                className="input input--hero"
                type="email"
                placeholder="Enter your email..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={
                  isError
                    ? { border: "1px solid rgb(255, 80, 80)" }
                    : { border: "1px solid hsl(238, 22%, 44%)" }
                }
              />
              <button
                className="btn btn--hero"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  validateEmail(input);
                }}
              >
                Get Started
              </button>
              <p
                className="hero__error"
                style={isError ? { display: "block" } : { display: "none" }}
              >
                Please check your email
              </p>
            </form>
          </div>
          <img className="hero__img" src={heroImg} alt="Hero illustration." />
        </div>
      </section>
    </>
  );
};

export default Hero;
