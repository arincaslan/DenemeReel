import React from "react";
import img1 from "../property-1.jpg";
import img2 from "../property-2.jpg";
import img3 from "../property-3.jpg";
import img4 from "../property-4.jpg";
import img5 from "../property-5.jpg";
import img6 from "../property-6.jpg";
const Footer = () => {
    return (

        <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h5 style={{"fontWeight" : "700"}} class="text-white mb-4">Get In Touch</h5>
                        <p class="mb-2">Tütüncü Mehmet Efendi Cad. / Kadıköy / İstanbul / Turkiye</p>
                        <p class="mb-2">+090 532 496 95 76</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@igestate.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 style={{"fontWeight" : "700"}} class="text-white mb-4">Quick Links</h5>
                        <a class="btn btn-link text-white-50" href="/about">About Us</a>
                        <a class="btn btn-link text-white-50" href="/contact">Contact Us</a>
                        <a class="btn btn-link text-white-50" href="/flatList">Our Services</a>
                        <a class="btn btn-link text-white-50" href="">Privacy Policy</a>
                        <a class="btn btn-link text-white-50" href="">Terms & Condition</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 style={{"fontWeight" : "700"}} class="text-white mb-4">Photo Gallery</h5>
                        <div class="row g-2 pt-2">
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src={img1} alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src={img2} alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src={img3} alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src={img4} alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src={img5} alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src={img6} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 style={{"fontWeight" : "700"}} class="text-white mb-4 fw-5">Disclaimer</h5>
                        <p> IG-Reel Estate is an product of İğdir İnşaat A.Ş. 
                            The information contained in this website is for general information purposes only. 
                            Any reliance you place on such information is therefore strictly at your own risk.</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">IG-Reel Estate</a>, All Right Reserved. 
							
							
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer