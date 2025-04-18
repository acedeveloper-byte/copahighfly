import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';


const HomeContent = () => {
  return (
    <div>
      <Container className='my-2'>
        <Row>
          <Col md={6}>
            <p className='fw-bold'>About Copahighfly </p>

            <h2 className='fs-3 fw-bold'>Bring Your Travel Dream to Reality With Copahighfly</h2>
            <p>
              At Copahighfly, we promise to fulfil your travel dreams within your expected budget.
              We are a third-party travel booking platform that helps you book Copa flights to your destination.
              Find exclusive deals on Copa Airlines flights, and travel to this gorgeous world without hurting your pocket.
              Connect with us as soon as possible to plan a trip to your fancies and whims.
            </p>
            <ul>
              <li>We believe that travel is not about reaching a destination; it's about collecting memories.</li>
              <li> With us, you will experience personalized services that suit your travel priorities. </li>
              <li> Contact our experts 24*7 for a tailor-made travel plan that you will remember forever.</li>
              <li>From easy booking to our user-friendly interface, our premium services will make your work easier.</li>
            </ul>
            <p>
              Your next travel venture starts with us today; book with us now for an amazing journey in the air. Just contact us, and share your priorities. We will craft an itinerary that will facilitate you with another level of satisfaction. So what are you waiting for? Pick your phone, and plan your journey in no time.   </p>
          </Col>

          <Col md={6}>
            <Image
              src="/images/airlines-poster.png"
              alt="Copa Airlines"
              width={550}
              height={500}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeContent
