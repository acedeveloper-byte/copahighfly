import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


const destinations = [
  {
    id: 1,
    title: "Travel To New York",
    price: 249,
    image: "/images/new-york.png",
  },
  {
    id: 2,
    title: "Travel To Miami",
    price: 199,
    image: "/images/miami.png",
  },
  {
    id: 3,
    title: "Travel To Boston",
    price: 299,
    image: "/images/boston.png",
  },

];

const Destination = () => {
  return (
    <>
      <div className='container'>
        <h2 className="destination-text text-capitalize">
        Popular Destinations

        </h2>

        <p className='text-center'>From hidden gems to classic destinations, we offer flight services to various destinations around the world.
        </p>

        <div className=" my-5 row  justify-content-center">
          {destinations.map(({ id, title, price, image }) => (
            <div key={id} className="col-md-4 d-flex justify-content-center">
              <div className="" >
                <img
                  src={image}
                  alt={title}
                  width={800}
                  height={400}
                  style={{ height: '300px', width: '360px !important' }}
                />
                <div className="text-center p-3 cards-text-dest">
                  <h5 className="mb-1 fw-bold">{title}</h5>
                  <p className="text-white mb-3">Starting From : <strong>${price.toFixed(2)}</strong></p>
                  <button className="btn btn-outline-success d-flex justify-content-center align-items-center gap-2 mx-auto">
                    Book Now <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <img src='/images/travel.png' style={{ width: 'auto !important' }} />

        </div>




      </div>

    </>
  );
};

export default Destination;
