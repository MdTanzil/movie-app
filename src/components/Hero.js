import React from "react";

const Hero = ({ text, header }) => {
  return (
    <div
      class="container-fluid  px-4 py-5 "
      style={{ backgroundColor: "#00425A" }}
    >
      <div class="row  g-5 py-5 text-white rounded">
        <div class="col-lg-12 ">
          <h1 class="fw-bold  mb-3">{header}</h1>
          <p class="lead">{text}</p>
        </div>
      </div>
    </div>
  
  );
};

export default Hero;
