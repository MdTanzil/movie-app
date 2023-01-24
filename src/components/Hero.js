import React from "react";

const Hero = ({ text, header }) => {
  return (
    <div class="container-fluid  px-4 py-5 my-1">
      <div class="row align-items-center g-5 py-5 bg-dark text-white rounded">
        <div class="col-lg-12 align-items-center">
          <h1 class="fw-bold text-center mb-3">{header}</h1>
          <p class="lead">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
