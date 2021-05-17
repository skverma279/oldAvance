import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom'
import { Button, Form, Modal } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Nav.css';


const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
      <header className="header">
        <div className="top_bar">
          <div className="top_bar_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="top_bar_content">
                    <ul className="top_bar_contact_list d-flex align-items-center " >
                      <li >
                        <div className="question "><h5>Have any questions?</h5></div>
                      </li>
                      <li>
                        
                        <div> <FaPhone /> Call us: +91-120-4362095</div>
                      </li>
                      <li>
                        
                        <div> <FaEnvelope />  info@avancetest.com </div>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                  <div className="logo_container">
                    <Link to="/">
                      <img src="logo1.png" width="150px" alt="logo" />
                    </Link>
                  </div>
                  <nav className="main_nav_container ml-auto">
                    <ul className="main_nav m-0 p-0">

                      <li className="pl-3">
                        <NavLink exact activeClassName="active_class" to="/"> Home</NavLink></li>
                      <li className="pl-3">
                        <NavLink exact activeClassName="active_class" to="/about"> About</NavLink></li>
                      <li className="pl-3">
                        <NavLink exact activeClassName="active_class" to="/course"> Course</NavLink></li>
                      <li className="pl-3">
                        <NavLink exact activeClassName="active_class" to="/pricing"> Pricing</NavLink></li>
                      <li className="pl-3">
                        <NavLink exact activeClassName="active_class" to="/joinUs"> Join US</NavLink></li>
                      <li className="pl-3">
                        <NavLink exact activeClassName="active_class" to="/contact"> Contact</NavLink></li>
                      <li className="pl-3">
                        <NavLink exact activeClassName="active_class" to="/SignIn" variant="secondary" onClick={handleShow}> Login</NavLink></li>

                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>


      {/* Login Modal Start*/}
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header  closeButton>
          <Modal.Title >User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enter your mobile number to create an account.</p>
          <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Control
                type="tel"  
                placeholder="Enter Your Mobile No."  
                autoComplete="off"
                pattern="[0-9],{10}" 
                maxlength="10" 
                required="required"
                />
            </Form.Group>
        </Form>
        </Modal.Body>

        <Modal.Footer>
          <Link to="" >Already Have a Account?</Link>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">SignIn</Button>
        </Modal.Footer>
      </Modal>
        {/* End Login Modal */}

    </div>
  );
}

export default Header;
