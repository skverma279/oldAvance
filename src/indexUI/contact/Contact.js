import React,{useState} from "react";
import Breadcrumbs from "../Breadcrumbs";
import { MdLocationOn } from "react-icons/md";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Footer from '../footer/Footer'
import './Contact.css'

const Contact = () => {
  const [name ,setName] = useState("");
  const [lname, setLname] = useState("");
  const [mail ,setMail] = useState("");
  const [tel ,setTel] = useState("");

  function getFormDefault(e){
    console.warn(name, lname,mail,tel)
    e.preventDefault()
  }
  return (
    <>
      <Breadcrumbs breadcrumbsName="Contact" />
      <div className="container">
        <div className="row my-3">
          <div className="col-md-4 ">
            <div className="add  pb-4">
            <h2 className=" my-3 mt-5 py-2 text-white text-center" style={{borderBottom:'2px solid'}}>Contact Us Info</h2>
              <p className="py-1">
                <MdLocationOn /> C54 2nd floor Sector 2, Noida
              </p>
              <p className="py-1">
                <FaPhone /> +91-120-4362095
              </p>
              <p className="py-1 mb-4">
                
                <FaEnvelope /> info@avancetest.com
              </p>
            </div>
          </div>

          <div className="col-md-8 ">
            <h2 className="text-center my-3"> Enquiry</h2>
            <form onSubmit={getFormDefault} action="contact" method="post" name="contact" className="px-5" >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                    onChange={(e)=> setName(e.target.value)}
                      type="text"
                      className="form-control"
                      id="inputFname4"
                      placeholder="First Name"
                      name="user_name"
                      required="required"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                     onChange={(e)=> setLname(e.target.value)}
                      type="text"
                      className="form-control"
                      id="inputFname4"
                      placeholder=" Last Name"
                      name="user_name"
                      required="required"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                 onChange={(e)=> setMail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="info@gmail.com"
                  name="email"
                  required="required"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                 onChange={(e)=> setTel(e.target.value)}
                  type="tel"
                  className="form-control"
                  id="inputnum2"
                  placeholder="Mobile N."
                  name="mobile"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required="required"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="description"
                  rows="3"
                  required="required"
                ></textarea>
              </div>
              <div className="col-4  ml-auto">
              <button
                type="submit"
                name="btn_send"
                id="btSubmit"
                className="btn btn-success w-100 " >
                SEND
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="contact_info_location">
        <div className="contact_map">
          <div className="map">
            <div id="google_map" className="google_map">  
              <div className="map_container">
                <div id="map">
                <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5903765687153!2d77.30871481508144!3d28.58206068243781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45e3fffffff%3A0x3b4b09816a282dc0!2sAvance+Global!5e0!3m2!1sen!2sin!4v1510306545740" style= {{width:"100%" , height:"450px"}} frameBorder="1"  allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
