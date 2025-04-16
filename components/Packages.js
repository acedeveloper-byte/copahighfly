import React from 'react'
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


const destinations = [
  {
    id: 1,
    title: "Tour Hawaii",
    price: 99,
    image: "/images/huwai.png",
  },
  {
    id: 2,
    title: "Tour Las Vegas",
    price: 130,
    image: "/images/laswegas.png",
  },
  {
    id: 3,
    title: "Tour Chicago",
    price: 199,
    image: "/images/boston.png",
  },

];

const Packages = () => {
  return (
    <div>

      <div className='container mt-5'>

        <h3 className="destination-text text-capitalize mt-3">
          Trending Vacation Packages

        </h3>

        <p className='text-center'>Book a vacation package with us, and stay away from all the hassle of travel planning.
        </p>

        <div className="  row  justify-content-center">
          {destinations.map(({ id, title, price, image }) => (
            <div key={id} className="col-md-4 d-flex justify-content-center">
              <div className="" >
                <Image
                  src={image}
                  alt={title}
                  width={300}
                  height={400}
                  className=" object-fit-cover"
                  style={{ height: '300px', width: '360px !important' }}

                />
                <div className="text-center p-3 cards-text-dest">
                  <h5 className="mb-1 fw-bold">{title}</h5>
                  <p className="text-white mb-3">Starting From : <strong>${price.toFixed(2)}</strong></p>
                  <button className="btn btn-outline-success d-flex justify-content-center align-items-center gap-2 mx-auto">
                    <a href="tel: 1-855-497-3456" className='text-decoration-none text-white'>Book Now <FaArrowRight /></a>

                  </button>
                </div>
              </div>
            </div>
          ))}


        </div>




      </div>
    </div>
  )
}

export default Packages
