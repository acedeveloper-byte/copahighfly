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
          <h1 className='my-3 fw-bold fs-2'>  Terms & Conditions</h1>
        </div>
        <hr />
         <h2 className='fs-4'>1. Introduction</h2>
        <p>Welcome to Copahighfly! By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
         <h2 className='fs-4'>2. Services Offered</h2>
        <p>Copahighfly provides information and booking services related to Copa Airlines flights. We are an independent third-party site and do not have any direct affiliation with Copa Airlines. Our services include:</p>
        <ul>
          <li >Flight search and comparison</li>
          <li >Booking assistance</li>
          <li >Customer support</li>
        </ul>
         <h2 className='fs-4'>3. User Responsibilities</h2>
        <p>By using our services, you agree to:</p>
        <ul>
          <li >Provide accurate and complete information when booking flights.</li>
          <li >Comply with all applicable laws and regulations.</li>
          <li >Use our services for personal, non-commercial purposes only.<br /><br /></li>
        </ul>
         <h2 className='fs-4'>4. Disclaimer</h2>
        <p>Copahighfly is not responsible for any errors, omissions, or inaccuracies in the information provided. We make no representations or warranties regarding the availability, pricing, or quality of Copa Airlines services. All bookings are subject to Copa Airlines' terms and conditions.</p>
         <h2 className='fs-4'>5. Payments</h2>
        <p>All payments for bookings are processed through secure third-party payment gateways. By making a payment, you agree to the terms of the payment processor. Copahighfly is not responsible for any payment issues or disputes that may arise.</p>
         <h2 className='fs-4'>6. Cancellations and Refunds</h2>
        <p>Cancellations and refund policies are determined by Copa Airlines. Copahighfly cannot guarantee refunds or changes to bookings. Please refer to Copa Airlines' official policies for more information.</p>
         <h2 className='fs-4'>7. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Copahighfly shall not be responsible for any indirect, direct, consequential, or incidental damages arising from the use or inability to use our services.</p>
         <h2 className='fs-4'>8. Indemnification</h2>
        <p>The user agrees to indemnify and hold harmless Copahighfly, its affiliates, and their respective officers, directors, and employees from any claims, losses, damages, liabilities, or expenses arising out of your use of our services.</p>
         <h2 className='fs-4'>9. Changes to Terms</h2>
        <p>Copahighfly reserves the right to modify these Terms and Conditions at any time. Changes will be effective upon posting on our website. Your continued use of Copahighfly and its services indicates your acceptance of the modified terms.</p>
          <h2 className='fs-4'>10.  Third-Party Links</h2>
        <p>Copahighfly may contain links to third-party services and websites. However, we shall not be held liable for the content, reliability, or accuracy of these independent parties. Users shall access these sites at their own risk.</p>
         <h2 className='fs-4'>11. Governing Law</h2>
        <p>These mentioned Terms of Service shall be governed by and interpreted in accordance with the laws of the United States. The relevant courts will resolve any disputes arising from these terms.</p>
           <h2 className='fs-4'>12. Termination of Use</h2>
        <p>Copahighfly reserves the right to suspend or terminate access to our site and services if violations of these terms are detected. Users who violate these terms may face a ban from accessing our services in the future.</p>
         <h2 className='fs-4'>13. Contact Information</h2>
        <p>Get in touch with us at XXXX if you have questions or concerns regarding these Terms and Conditions.</p>
        <p>By using Copahighfly services, you accept these terms and conditions. Thank you for choosing Copahighfly for your next travel adventure!</p>   </Container>
      
      <br />
      <Footer />
    </>
  )
}

export default page
