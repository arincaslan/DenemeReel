import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import classes from "./Head.module.css";

const Head = () => {
  return (
    <div className={classes.containerFluid}>
      <div className={classes.containerAlign}>
        <div className={classes.containerMid}>
          <h1 className={classes.textH1}>
            Find A <span className={classes.textSpan}>Perfect Home</span> To
            Live With Your Family
          </h1>
          <p className={classes.textP}>
            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
            Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
          </p>
          <a href="" className={classes.aButton}>
            Get Started
          </a>
        </div>
        <div className={classes.animationContainer}>
          <div className="owl-carousel header-carousel owl-loaded owl-drag">
            <div class="owl-carousel header-carousel">
              <div class="owl-carousel-item">
                <img class="img-fluid" src="img/carousel-1.jpg" alt="" />
              </div>
              <div class="owl-carousel-item">
                <img class="img-fluid" src="img/carousel-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
