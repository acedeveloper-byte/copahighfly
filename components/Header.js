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
        <Navbar.Brand as={Link} href="/">
          <Image src="/logo/logo.png" width={170} height={50} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
           <a  href="/" className="mx-2 fw-medium text-decoration-none text-dark">Home</a>
           <a  href="/about-us" className="mx-2 fw-medium text-decoration-none text-dark">About Us</a>
           <a  href="/blog" className="mx-2 fw-medium text-decoration-none text-dark">Blog</a>
           <a  href="/contact-us" className="mx-2 fw-medium text-decoration-none text-dark">Contact Us</a>
          </Nav>

          {/* Right-Aligned Button */}
          <div className="">
            <Link href="tel: +1" >
              <Button variant="primary" className="  toll-free"><FaPhoneVolume /> +1 (111) 0000 111</Button>
            </Link>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
