import Search from "./Search";
import headerImage from "../header.jpg";
import classes from "./Contact.module.css";

const Contact = () => {
    return (
        <section className="contact">
            <div className={classes.pageTopBlog}>
                        <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                            <div class="col-md-6 p-5 mt-lg-5">
                                <h1 class="display-5 animated fadeIn mb-4">Contact</h1>
                                <nav aria-label="breadcrumb animated fadeIn">
                                    <ol class="breadcrumb text-uppercase">
                                        <li class="breadcrumb-item text-body active" aria-current="page">You can contact us via Wattsapp Icon</li>
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
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-envelope"></i>
                                        <h5>Mail</h5>
                                        <h6>a.arincaslan@gmail.com</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <h5>Address</h5>
                                        <h6>Tütüncü Mehmet Efendi Cad. Kadıköy/İstanbul/Türkiye</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-phone-alt"></i>
                                        <h5>Phone</h5>
                                        <h6>+90 532 496 95 76</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-5">
                                <div className="col-lg-6">
                                    <label>Name Surname</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-6">
                                    <label>Phone</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-12">
                                    <label>Subject</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-12">
                                    <label>Message</label>
                                    <textarea type="text" className="ta-contact" rows="4"></textarea>
                                </div>
                                <div className="col-lg-12">
                                    <button onClick={() => {alert("Message Sent")}} className="btn-contact">Send Message</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact