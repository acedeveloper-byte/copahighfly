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
          <h1 className='my-3 fw-bold fs-2'>  About us</h1>
        </div>
        <hr />

        <p>Copahighfly is your one-stop platform to book cheap Copa Airlines flights to your dream destination. If you are looking for ultimate travel deals for your next travel plan, we are here to help. Contact us to find ongoing travel deals and make your next Copa Airlines booking at discounted fares.&nbsp;</p>

        <p>We are a third-party booking platform that is available to help you with the booking process or any other travel-related issues. We are not directly associated with Copa Airlines and don&rsquo;t even have an indirect partnership with the airline. At Copahighfly, we are here to connect you to your dream destination on budget.&nbsp;</p >

        <h3 className='fs-4'>Get Exclusive Deals on Copa Flights!</h3 >
        <p>We offer special deals and discounts so you can plan your journey in your budget. These deals will make your journey even more affordable. To find the ongoing offer on your flight booking, you should get in touch with our experts.&nbsp;</p >

        <p>At Copahighfly, we will make sure that you have the journey of your dreams in your budget. Our experts will make a tailor-made plan for you that will suit not only your budget, but also your preferences. Share your priorities, and add a personal touch to your itinerary.&nbsp;</p >

        <h3 className='fs-4'>Why Choose Copahighfly As Your Travel Companion?</h3 >
        <p>Copahighfly is your perfect travel partner that guarantees to make your journey an unforgettable experience. Some reasons that make us stand out among others are-</p >

        <ul>
          <li>With us, you can make a Copa Airlines booking in just a few clicks.</li>
          <li>We help you find exclusive deals and discounts for a budget-friendly trip.</li >
          <li>Our experts are reachable 24*7 to assist you with all your travel-related queries.</li >
          <li>We make sure that your data is safe and secure with us.</li >
          <li>Copahighfly believes in 100% transparency. You will not find any hidden charges or fees.</li >
        </ul >

        <h3 className='fs-4'>Book With Copahighfly Now!</h3 >
        <p>Get in touch with Copahighfly experts to book your tickets with no extra effort, and have an enjoyable travel experience. We will try our best to help you craft an itinerary to your requirements. Connect with us now!</p >
    
    <br/>
      </Container >
      <Footer />

      <br />

    </>
  )
}

export default page
