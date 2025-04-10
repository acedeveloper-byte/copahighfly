import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import "@/app/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Page = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <h1 className='my-3 fw-bold fs-2'>Disclaimer</h1>
        </div>
        <hr />

        <ol>
           <li className='fs-4'>Introduction</li>
          <p>
            The information provided by Copahighfly is for general informational purposes only.
            We are an independent third-party service and do not have any direct affiliation with Copa Airlines.
            By using our website, you acknowledge and accept this disclaimer.
          </p>

           <li className='fs-4'>No Affiliation</li>
          <p>
            Copahighfly operates as a third-party site offering services related to Copa Airlines.
            We do not represent Copa Airlines, and any information or services provided on this site
            do not imply an endorsement or partnership with the airline.
          </p>

           <li className='fs-4'>Accuracy of Information</li>
          <p>
            While we strive to provide accurate and up-to-date information regarding flight availability,
            pricing, and schedules, we cannot guarantee the accuracy or completeness of this information.
            All details are subject to change without notice.
          </p>

           <li className='fs-4'>Booking and Payments</li>
          <p>
            All bookings made through Copahighfly are subject to the terms and conditions of Copa Airlines.
            We are not responsible for any errors or issues that may arise during the booking process,
            including payment disputes or changes to flight schedules.
          </p>

           <li className='fs-4'>Limitation of Liability</li>
          <p>
            Copahighfly shall not be liable for any indirect, direct, consequential, or incidental damages
            arising from the use of our website or services. This includes, but is not limited to, damages
            resulting from reliance on information provided on our site.
          </p>

           <li className='fs-4'>Third-Party Links</li>
          <p>
            Our website may contain links to third-party websites. We do not control these sites and are
            not responsible for their content, privacy policies, or practices. We encourage users to review
            the terms and conditions and privacy terms of the sites they visit.
          </p>

           <li className='fs-4'>Changes to This Disclaimer</li>
          <p>
            Copahighfly reserves the right to modify this disclaimer at any time. Changes will be effective
            upon posting on our website. Continued use of Copahighfly services constitutes user’s acceptance
            of the updated disclaimer.
          </p>

           <li className='fs-4'>Contact Information</li>
          <p>
            Please contact us at XXXX for any questions or concerns regarding this disclaimer.
          </p>
        </ol>
      </Container>
      <br />
      <Footer />
    </>
  )
}

export default Page;
