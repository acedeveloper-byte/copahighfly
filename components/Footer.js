'use client';
import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5 pb-3 position-relative">
      <Container>
        <Row>
          {/* About Us */}
          <Col md={4} className="mb-4 text-start">
            <Image src="/logo/logo.png" alt="Copa High Fly" width={170} height={50} className="mb-2 footer-logo" />
            <p>
              At Copahighfly, we believe that everyone should enjoy air travel within their budget. We offer flights to various destinations worldwide at discounted fares. Connect with us to find affordable Copa Airlines flights, and bring your travel dream to reality. Start planning your dream trip today with us!
            </p>

            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white fs-5"><FaFacebookF /></a>
              <a href="#" className="text-white fs-5"><FaXTwitter /></a>
              <a href="#" className="text-white fs-5"><FaInstagram /></a>
              <a href="#" className="text-white fs-5"><FaLinkedinIn /></a>
            </div>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="mb-4 text-center">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@copahighfly.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: New York, USA</li>
            </ul>
          </Col>

          {/* Links */}
          <Col md={4}>
            <Row>
              <Col xs={6}>
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                  <li><a href="/about-us" className="text-white text-decoration-none">About us</a></li>
                  <li><a href="/contact-us" className="text-white text-decoration-none">Contact us</a></li>
                </ul>
              </Col>
              <Col xs={6}>
                <h5>Help Links</h5>
                <ul className="list-unstyled">
                  <li><a href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</a></li>
                  <li><a href="/terms-and-conditions" className="text-white text-decoration-none">Terms & Condition</a></li>
                  <li><a href="/disclaimer" className="text-white text-decoration-none">Disclaimer</a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="border-top mt-4 pt-3">
          <p className="text-white small mb-1">
            <strong>Disclaimer:</strong> Copahighfly is your one-stop platform to book affordable Copa Airlines flights, but we are not directly associated with the airline. We are a third-party site offering Copa Airlines services at low fares.

          </p>
          <hr />
          <p className="text-white small mb-0 text-center">
            © 2025 Copahighfly. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
