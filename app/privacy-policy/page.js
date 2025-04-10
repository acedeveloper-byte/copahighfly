import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import "@/app/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const page = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <h1 className='my-3 fw-bold fs-2'>Privacy Policy </h1>

        </div>
        <hr />
        <ol>
          <li> Introduction</li>
        </ol>
        <p>At Copahighfly, we are entirely committed to protecting your privacy. This Privacy Policy clearly highlights how we gather, use, and protect your personal information when you use Copahighfly and its services. By using our website, you consent to the practices described in this policy.</p>
        <p>Please Note: Copahighfly is an independent third-party booking service and is not affiliated with Copa Airlines.</p>
        <ol start="2">
          <li> Information We Collect</li>
        </ol>
        <p>Copahighfly may gather the following types of information:</p>
        <ul>
          <li >Personal Information: This includes your name, email address, phone number, and payment information that you provide when booking flights.</li>
          <li >Non-Personal Information: We may collect data about your interactions with our website, including the browser you are using, IP addresses, and pages visited.<br /><br /></li>
        </ul>
        <ol start="3">
          <li> How We Use Your Information</li>
        </ol>
        <p>We use your information for various purposes, including:</p>
        <ul>
          <li >Processing and managing your flight bookings.</li>
          <li >Communicating with you about your reservations.</li>
          <li >Improving our services and website functionality.</li>
          <li >Sending promotional materials and updates (with your consent).<br /><br /></li>
        </ul>
        <ol start="4">
          <li> Sharing Your Information</li>
        </ol>
        <p>Copahighfly doesn&rsquo;t sell or rent your personal details or data to third parties. We may disclose your information to:</p>
        <ul>
          <li >Service Providers: Third-party vendors who assist us in providing services (e.g., payment processors).</li>
          <li >Legal Authorities: Only to protect our rights if required by the law.<br /><br /></li>
        </ul>
        <ol start="5">
          <li> Data Security</li>
        </ol>
        <p>As we aim to protect your data, we apply industry-standard security measures to safeguard your personal data from unauthorized disclosure, access, or misuse. However, please note that no method of online data transmission is completely secure. We advise you to be extra careful when sharing your information.</p>
        <ol start="6">
          <li> Cookies</li>
        </ol>
        <p>Our website uses cookies to enhance your user experience. Cookies help us understand how you interact with our site and what your preferences are. The user can go to the browser settings to accept or decline cookies.</p>
        <ol start="7">
          <li> Your Rights</li>
        </ol>
        <p>You have the right to:</p>
        <ul>
          <li >Access your personal information.</li>
          <li >Request corrections to any inaccuracies.</li>
          <li >Opt-out of promotional communications.<br /><br /></li>
        </ul>
        <p>To exercise these rights, please contact us using the information below.</p>
        <ol start="8">
          <li> Modifications to This Privacy Policy</li>
        </ol>
        <p>We may apply changes to this Privacy Policy from time to time to reflect the changes in our business practises. We will update you about these changes by posting them on this page. Your continued use of our services after any modifications reflects that you accept this revised policy.</p>
        <ol start="9">
          <li> Contact Us</li>
        </ol>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at XXXXX.</p>
      </Container>
      <Footer />
    </>
  )
}

export default page
