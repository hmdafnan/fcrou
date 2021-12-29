import React from 'react';
import { Link } from 'react-router-dom';
import Map from './Map';

function Footer(props) {
    return(
        <div className="footer footer-style-main">
            <div className="container-fluid">
                <div className="row">
                    <div className="map-section col-md-3">
                        <div id="map">
                        </div>
                    </div>
                        <div className="footer-blog col-md-2">
                            <div className="footer-heading-title">
                                <h5>Future Computer Updates</h5>
                            </div>
                            <p className="design-rectangle"></p>
                            <p>Coming Soon...</p>
                            <div class="social-icons">
                                <span className="social-icon fb social-icons-onhover"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></span> 
                                <span className="social-icon tw social-icons-onhover"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></span> 
                                <span className="social-icon gp social-icons-onhover"><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></span> 
                                <span className="social-icon ig social-icons-onhover"><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></span>
                                <span className="social-icon ld social-icons-onhover"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></span>
                            </div>
                        </div>
                        <div className="footer-blog col-md-2">
                            <div className="footer-heading-title">
                                <h5>Services</h5>
                            </div>
                            <p className="design-rectangle"></p>
                            <div className="menu-list">
                                <span className="menu-list"><a className="menu-list" href="#"> Data recovery</a></span><br/>
                                <span><a className="menu-list" href="#"> Computer repair</a></span><br/>
                                <span><a className="menu-list" href="#"> Mobile service</a></span><br/>
                                <span><a className="menu-list" href="#"> Network solutions</a></span><br/>
                                <span><a className="menu-list" href="#"> Technical support</a></span><br/>
                            </div>
                        </div>
                        <div className="footer-blog col-md-2">
                            <div className="footer-heading-title">
                                <h5>Additional Links</h5>
                            </div>
                            <p className="design-rectangle"></p>
                            <div className="menu-list">
                                <span> &nbsp;<Link className="menu-list" to="/home">Home</Link></span><br/>
                                <span> &nbsp;<Link className="menu-list" to="/tally">Tally</Link></span><br/>
                                <span> &nbsp;<Link className="menu-list" to="/software">Software</Link></span><br/>
                                <span> &nbsp;<Link className="menu-list" to="/products">Products</Link></span><br/>
                                <span> &nbsp;<Link className="menu-list" to="/aboutus">About Us</Link></span><br/>
                            </div>
                        </div>
                        <div className="footer-blog col-md-3">
                            <div className="footer-heading-title">
                                <h5>Contact us</h5>
                            </div>
                            <p className="design-rectangle"></p>
                            <p style={{color:"#aff"}}>Shop No.:- 51 Pani market Uditnagar<br />
                                Rourkela-769012<br />
                                <span style={{fontSize:"18px"}}><a className="menu-list" href="tel:+919338264515">+91 9338264515</a></span></p>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default Footer;