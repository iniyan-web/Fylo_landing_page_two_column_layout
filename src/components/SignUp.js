import React, { useState } from "react";

const SignUp = () => {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);

  const validateEmail = (email) => {
    const rejex =
      /^[(a-zA-Z0-9\+\-\_\.)]+\@[(a-zA-Z0-9)]+\.+[(a-zA-Z0-9) {2,4}]+$/;
    return email.match(rejex) ? setIsError(false) : setIsError(true);
  };

  return (
    <>
      <section className="sign-up">
        <div className="sign-up__text">
          <h2 className="sign-up__title">Get early access today</h2>
          <p className="sign-up__info">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <form className="sign-up__form">
          <input
            className="input input--sign-up"
            type="email"
            placeholder="email@example.com"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={
              isError
                ? { border: "1px solid rgb(255, 80, 80)" }
                : { border: "1px solid hsl(238, 22%, 44%)" }
            }
          />
          <p
            className="sign-up__error"
            style={isError ? { display: "block" } : { display: "none" }}
          >
            Please check your email
          </p>
          <button
            className="btn btn--sign-up"
            onClick={(e) => {
              e.preventDefault();
              validateEmail(input);
            }}
          >
            Get Started For Free
          </button>
        </form>
      </section>
    </>
  );
};

export default SignUp;
