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
            <Image src="/logo/logo.png" alt="Copa High Fly" width={170} height={50} className="mb-2" />
            <p>
              We believe travel is the best way to relax your mind and body. At Delta Fly Hub, we understand the demands of modern life and aim to provide affordable and enjoyable flying experiences.
            </p>
            <p>
              We provide a large selection of Delta Airlines destinations with different schedules and flight fare classes.
            </p>
            <div className="d-flex gap-3 mt-3">
              <Link href="#" className="text-white fs-5"><FaFacebookF /></Link>
              <Link href="#" className="text-white fs-5"><FaXTwitter /></Link>
              <Link href="#" className="text-white fs-5"><FaInstagram /></Link>
              <Link href="#" className="text-white fs-5"><FaLinkedinIn /></Link>
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
                  <li><Link href="/" className="text-white text-decoration-none">Home</Link></li>
                  <li><Link href="/about-us" className="text-white text-decoration-none">About us</Link></li>
                  <li><Link href="/destination" className="text-white text-decoration-none">Destination</Link></li>
                  <li><Link href="/contact-us" className="text-white text-decoration-none">Contact us</Link></li>
                </ul>
              </Col>
              <Col xs={6}>
                <h5>Help Links</h5>
                <ul className="list-unstyled">
                  <li><Link href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-white text-decoration-none">Term & Condition</Link></li>
                  <li><Link href="/disclaimer" className="text-white text-decoration-none">Disclaimer</Link></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="border-top mt-4 pt-3">
          <p className="text-white small mb-1">
            <strong>Disclaimer:</strong> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.
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
