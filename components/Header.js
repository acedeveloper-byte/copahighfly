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
            <Nav.Link as={Link} href="/" className="mx-2 fw-bold">Home</Nav.Link>
            <Nav.Link as={Link} href="/about-us" className="mx-2 fw-bold">About Us</Nav.Link>
            <Nav.Link as={Link} href="/blog" className="mx-2 fw-bold">Blog</Nav.Link>
            <Nav.Link as={Link} href="/destinations" className="mx-2 fw-bold">Destinations</Nav.Link>
            <Nav.Link as={Link} href="/contact-us" className="mx-2 fw-bold">Contact Us</Nav.Link>
          </Nav>

          {/* Right-Aligned Button */}
          <div className="">
            <Link href="tel: +1" >
              <Button variant="primary" className="fw-bold  toll-free"><FaPhoneVolume /> +1 (111) 0000 111</Button>
            </Link>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
