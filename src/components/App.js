import React from "react";
import Hero from "./Hero";
import Aside from "./Aside";
import SignUp from "./SignUp";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <main>
        <Hero />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3c9f8f0a"
            fillOpacity="1"
            d="M0,192L120,165.3C240,139,480,85,720,85.3C960,85,1200,139,1320,165.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <Aside />
        <SignUp />
        <Footer />
      </main>
    </>
  );
};

export default App;
