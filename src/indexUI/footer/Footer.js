import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitterSquare } from 'react-icons/fa';
import { MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <> 
            <section className="info_section layout_padding2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 info_col">
                            <div className="info_contact">
                                <h4>Address</h4>
                                <div className="contact_link_box">
                                    <Link to=""><span> <MdLocationOn /> Add : C-54, 2nd Floor, Sector 2, Noida(UP)-201301 </span></Link>
                                    <Link to=""><span> <FaPhone />  Call : 120 4362095 </span></Link>
                                    <Link to=""> <span> <FaEnvelope /> Email : Info@avancetest.com </span></Link>

                                </div>
                            </div>
                            <div className="info_social">
                                <Link to=""><FaFacebook /></Link>
                                <Link to=""><FaTwitterSquare /></Link>
                                <Link to=""> <FaLinkedin /></Link>
                                <Link to=""> <FaInstagram /></Link>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 info_col">
                            <div className="info_detail">
                                <h4> Info </h4>
                                <p> In the Internet age, So many things have happened since we increasing usage of Internet  </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-2 mx-auto info_col">
                            <div className="info_link_box">
                                <h4> Links</h4>
                                <div className="info_links">
                                    <Link to="/">Home </Link>
                                    <Link to="/about">About </Link>
                                    <Link to="/course">Course </Link>
                                    <Link to="/contact">Contact </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 info_col ">
                            <h4> Email </h4>
                            <form action="#">
                                <input type="text" placeholder="Enter your email id" />
                                <button type="submit">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="row py-2" style={{ borderTop: '1px solid #fff', }}>
                        <div className="col-md ml-3">
                            <p> Copyright ©2021 All rights reserved | Design & Developed by <strong> AvanceGlobalTech. </strong> </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
