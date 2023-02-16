import React from 'react'
import '../css/style.css';
import { FaGooglePlus, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export default function Footer() {
  return (
    <>
      <footer id="footer">

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-4 col-md-6 footer-contact">
                <h3>Mentor</h3>
                <p>
                  536, STATION ROAD
                  BHAGWATIGANJ, <br />
                  BALRAMPUR
                  UTTAR PRADEH, <br />
                  INDIA-271201 <br /><br />
                  <strong>Phone:</strong> +91 589 55488 55<br />
                  <strong>Email:</strong> Arocoirishelp@gmail.com<br />
                </p>
              </div>

              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li> <a href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li> <a href="#">Services</a></li>
                  <li><a href="#">Terms of service</a></li>
                  <li><a href="#">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li> <a>Web Design</a></li>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Product Management</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="#">Graphic Design</a></li>
                </ul>
              </div>

              {/* <div className="col-lg-4 col-md-6 footer-newsletter">
        <h4>Join Our Newsletter</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <form action="" method="post">
              <input type="email" name="email"/>
              <input type="submit" value="Subscribe"/>
            </form>
      </div> */}

            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">

          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              © Copyright <strong><span>Career</span></strong>. All Rights Reserved
            </div>
            <div className="credits">

              Designed by <a>Arocoiris Technology Ed- Tech Limited</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a className="twitter"><FaTwitter /></a>
            <a className="facebook"><FaFacebook /></a>
            <a className="instagram"><FaInstagram /></a>
            <a className="google-plus"><FaGooglePlus /></a>
            <a className="linkedin"><FaLinkedin /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
