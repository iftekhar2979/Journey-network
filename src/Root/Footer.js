import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="container bg-light text-dark-50 py-5 px-sm-3 px-lg-5" style={{marginTop:"90px"}}>
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <a href="" className="navbar-brand">
                    <h1 className="text-primary"><span className="text-dark">World</span>Explore</h1>
                </a>
                
                <h6 className="text-dark text-uppercase mt-4 mb-3" style={{letterSpacing:"5px"}}>Follow Us</h6>
                {/* <div className="d-flex justify-content-start">
                    <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                </div> */}
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
               
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="text-dark text-uppercase mb-4" style={{letterSpacing:"5px"}}>Usefull Links</h5>
                <div className="d-flex flex-column justify-content-start">
                <Link to='/' className='nav-item nav-link footer-link'>
                Home
              </Link>
              <Link to='/services' className='nav-item nav-link footer-link'>
                Services
              </Link>
              <Link to='/about' className='nav-item nav-link footer-link'>
                About
              </Link>
              <Link to='/blog' className='nav-item nav-link footer-link'>
                Blog
              </Link>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="text-dark text-uppercase mb-4" style={{letterSpacing:"5px"}}>Contact Us</h5>
                <p><i className="fa fa-map-marker-alt mr-2"></i>Dhaka Mirpur-1</p>
                <p><i className="fa fa-phone-alt mr-2"></i>01837352979</p>
                <p><i className="fa fa-envelope mr-2"></i>iftekharsalmin@gmail.com</p>
                
            </div>
        </div>
    </div>
    );
};

export default Footer;