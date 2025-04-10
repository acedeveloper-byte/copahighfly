'use client'
import { React, useState } from 'react'
import "../app/globals.css";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlaneDeparture, FaPlaneArrival, FaExchangeAlt, FaCalendarAlt, FaUser } from "react-icons/fa";




const SearchEngine = () => {

    const [flightClass, setFlightClass] = useState("business");


    return (
        <>
            <div style={{ position: 'relative', width: 'auto', height: '612px' }}>
                <Image
                    src="/home-poster.png"
                    alt="Poster"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className='container home-text '>
                <div className='col-md-5'>
                    <h1 >Book Your Next Trip For Less
                    </h1>
                    <p>Get exclusive deals on Copa flights, and fly off on a budget. At Copahighfly, we promise to connect you to your destination at discounted fares.
                    </p>
                </div>

            </div>



            <div className="container p-4 bg-white rounded-4 shadow-sm search-form" style={{ maxWidth: '1000px' }}>
                {/* Flight Class Tabs */}
                <div className="d-flex justify-content-between mb-4 px-2">
                    {["economy", "business", "fast"].map(type => (
                        <button
                            key={type}
                            className={`btn ${flightClass === type ? "btn-primary" : "btn-light"} flex-fill mx-2`}
                            onClick={() => setFlightClass(type)}
                        >
                            {type === "economy" && "Economy"}
                            {type === "business" && "Business Class"}
                            {type === "fast" && "Fast Class"}
                        </button>
                    ))}
                </div>

                {/* Input Row */}
                <div className="row g-3 align-items-center">
                    {/* From - To */}
                    <div className="col-md-4 d-flex align-items-center bg-light rounded p-2">
                        <FaPlaneDeparture className="me-2 text-primary" />
                        <span className="me-2">Jakarta</span>
                        <FaExchangeAlt className="ms-auto me-2 text-primary" />
                        <FaPlaneArrival className="me-2 text-primary" />
                        <span>Singapore</span>
                    </div>

                    {/* Date */}
                    <div className="col-md-2 d-flex align-items-center bg-light rounded p-2">
                        <FaCalendarAlt className="me-2 text-primary" />
                        <span>Date</span>
                        <span className="ms-auto">▼</span>
                    </div>

                    {/* Budget */}
                    <div className="col-md-2 d-flex align-items-center bg-light rounded p-2">
                        <FaCalendarAlt className="me-2 text-primary" />
                        <span>Budget</span>
                        <span className="ms-auto">▼</span>
                    </div>

                    {/* Guest */}
                    <div className="col-md-2 d-flex align-items-center bg-light rounded p-2">
                        <FaUser className="me-2 text-primary" />
                        <span>Guest</span>
                        <span className="ms-auto">▼</span>
                    </div>

                    {/* Search Button */}
                    <div className="col-md-2">
                        <button className="btn btn-primary w-100" >Search</button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default SearchEngine
