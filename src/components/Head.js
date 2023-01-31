import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import classes from "./Head.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/bootstrap.min.css';
import '../css/style.css';
import Carousel from './Carousel';

const Head = () => {
  return (


    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">
            Find A <span className={classes.textSpan}>Perfect Home</span> To
            Live With Your Family
          </h1>
          <p className="animated fadeIn mb-4 pb-2">
            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
            Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
          </p>
          <a href="/flatList" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">
            Get Started
          </a>
        </div>
        <Carousel />
      </div>
    </div>

  );
};

export default Head;
