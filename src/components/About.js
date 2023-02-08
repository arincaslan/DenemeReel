import headerImage from "../header.jpg";
import TeamPage from "./TeamList";
import classes from "./About.module.css";
import Search from "./Search";
import aboutImage from "../about.jpg";

const About = () => {

    return (
        <section className="blog">
            <div className={classes.pageTopBlog}>
                        <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                            <div class="col-md-6 p-5 mt-lg-5">
                                <h1 class="display-5 animated fadeIn mb-4">About Us</h1>
                                <nav aria-label="breadcrumb animated fadeIn">
                                    <ol class="breadcrumb text-uppercase">
                                        <li class="breadcrumb-item text-body active" aria-current="page">About</li>
                                    </ol>
                                </nav>
                            </div>
                            <div class="col-md-6 animated fadeIn">
                                <img class="img-fluid" src={headerImage} alt=""/>
                            </div>
                </div>
                <div style={{ "marginTop": "10px" }}>
                    <Search />
                </div>
            </div>
            <div className={classes.pageContent}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6" >
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <img className="img-fluid w-100" src={aboutImage} />
                            </div>
                        </div>
                        <div className="col-lg-6 " >
                            <h1 className={classes.aboutText}>#1 Place To Find The Perfect Property</h1>
                            <p className="mb-4">
                                In the crowded field of Turkish investment and property,
                                IG-Reel Estate stands out above the rest of its competition.
                                Our success in Turkish real estate and investment over the past 20+ years has cemented our position
                                as industry leaders and experts. Client-focused, knowledgeable and thorough,
                                we’re simply the most effective investment consultants for property in Turkey.
                            </p>
                            <p><i className="fa fa-check text-primary me-3"></i>We Bargain For You</p>
                            <p><i className="fa fa-check text-primary me-3"></i>We Advertise For You</p>
                            <p><i className="fa fa-check text-primary me-3"></i>We Offer Best Investments For You</p>

                        </div>
                    </div>
                    <TeamPage />
                </div>
            </div>
        </section>
    )
}

export default About;