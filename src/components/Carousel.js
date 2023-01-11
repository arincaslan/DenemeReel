import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import imageCarousel1 from "../carousel-1.jpg";
import imageCarousel2 from "../carousel-2.jpg";
import "../css/bootstrap.min.css";
import "../css/style.css";


const Carousel = () => {
  return (
    // className "owl-theme" is optional
    <div class="col-md-6">
      <OwlCarousel navText={["<div class='header-carousel'>‹</div>", "<div class='header-carousel'>›</div>"]} items={1} className="header-carousel" loop margin={1} >
        <div className="item">
          <img className="img-fluid" src={imageCarousel1} alt="" />
        </div>
        <div className="item">
          <img className="img-fluid" src={imageCarousel2} alt="" />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
