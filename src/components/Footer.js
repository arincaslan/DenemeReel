import React from "react"
const Footer = () => {
    return (
        <section className="footer">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <i className="fas fa-home"></i>
                        <span className="footer-other-text d-block mt-4 mb-3">
                            IG-Reel Estate is an product of İğdir İnşaat A.Ş. 
                            The information contained in this website is for general information purposes only. 
                            The information is provided by [İğdir İnşaat A.Ş] and while we endeavour to keep the information up to date and correct, 
                            we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability 
                            with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. 
                            Any reliance you place on such information is therefore strictly at your own risk.
                        </span>
                        <div className="footer-social">
                            <div className="footer-social-item"><i className="fab fa-facebook"></i></div>
                            <div className="footer-social-item"><i className="fab fa-twitter"></i></div>
                            <div className="footer-social-item"> <i className="fab fa-instagram"></i></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                    <div className="col-lg-6 col-md-6">
                        <p className="footer-title">Menu</p>
                        <ul className="footer-ul">
                            <li href = "/">Home</li>
                            <li href="/blog">Blog</li>
                            <li  href="/about">About</li>
                            <li href="/contact">Contact</li>
                        </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 ">
                        <p className="footer-title">Contact</p>
                        <ul className="footer-ul">
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-clock"></i></div> <span>08:00-18:00</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item" ><i className="fas fa-envelope"></i></div> <span>a.arincaslan@gmail.com</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-map-marker-alt"></i></div> <span>Tütüncü Mehmet Efendi Cad. İstanbul/Türkiye</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-phone-alt"></i></div> <span>0532 496 95 76</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    {/*<div className="col-lg-3 col-md-6">
                        <p className="footer-title">Subscribe</p>
                        <span className="footer-other-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna
                        </span>
                        <div className="subscribe-area mb-2 mt-2">
                            <input type="text" placeholder="Email" className="inp-footer w-100" />
                        </div>
                        <button className="btn-subscribe">Subscribe</button>
                    </div>*/}

                </div>
            </div>
        </section>
    )
}

export default Footer