'use client'
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Link from 'next/link';
import "../app/globals.css";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-bg-color">
      <Container>
        <Navbar.Brand >
          <a href="https://www.copahighfly.com/">  <Image src="/logo/logo.png" width={170} height={50} alt="Logo" /></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <a href="/" className=" fw-medium text-decoration-none text-dark mx-3">Home</a>
            <a href="/about-us" className=" fw-medium text-decoration-none text-dark mx-3">About Us</a>
            <a href="/blog" className=" fw-medium text-decoration-none text-dark mx-3">Blog</a>
            <a href="/contact-us" className=" fw-medium text-decoration-none text-dark mx-3">Contact Us</a>


          </Nav>

          {/* Right-Aligned Button */}
          <div className="ms-5">
            <Link href="tel: 1-855-497-3456" >
              <Button variant="primary" className="  toll-free"><FaPhoneVolume /> 1-855-497-3456
              </Button>
            </Link>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
