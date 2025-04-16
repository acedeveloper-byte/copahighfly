// app/cancellation-policy/[slug]/page.js

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container } from 'react-bootstrap';

export async function generateStaticParams() {
    return [
        { slug: 'what-is-the-copa-airlines-cancellation-policy' },
    ];
}

// Optional: add metadata for SEO
export const metadata = {
    title: 'Copa Airlines Cancellation Policy',
    description: 'Learn about Copa Airlines’ 24-hour cancellation policy, refund rules, cancellation fees, and how to cancel your flight.',
};

export default function CancellationPolicySlugPage({ params }) {
    const { slug } = params;

    // Match content based on slug
    if (slug === 'what-is-the-copa-airlines-cancellation-policy') {
        return (
            <>
                <Header />
                <div>
                    <h1 className="my-3 fw-bold fs-2 text-center">What is the Copa Airlines Cancellation Policy?</h1>
                </div>
                <hr />

                <Container>
                    <p>Life is uncertain, and so are our travel plans because of the unexpected emergencies. Sometimes we may need to cancel our flights as no alternative is available. If you have a flight with Copa Airlines that needs to be cancelled, then don&rsquo;t worry. The airline has an easy-to-understand Copa Airlines cancellation policy that provides you with the maximum flexibility in your travel plan. By going through this policy, one can cancel their bookings without any complications. Read the following blog for all the detailed information.&nbsp;</p>
                    <h2>Does Copa Airlines has a 24-Hour Cancellation Policy?</h2>
                    <p>Yes, like many other airlines, Copa has a 24-hour cancellation policy. The airline continuously strives to offer the best services to its flyers. And this Copa Airlines 24 hour cancellation policy is one such policy that offers the maximum flexibility to all travelers. According to this policy, travelers can cancel their bookings without any deduction within 24 hours of the booking. Check out the following points for more details.</p>

                    <ul>
                        <li >The 24-hour cancellation policy applies to bookings made on copa.com.</li>
                        <li >This policy is also applicable to &ldquo;Book and Hold&rdquo; payments in My Trips.</li>
                        <li >You can&rsquo;t cancel tickets for a full refund that are purchased less than 7 days prior to the flight departure.</li>
                        <li >If there is any additional service, no automatic refund will be processed. Travelers should fill in the refund form on the airline&rsquo;s official site.</li>
                        <li >The 24-hour timestamp starts exactly when the ticket is issued.</li>
                        <li >As per the Copa Airlines cancelation policy, refunds will be 100%, including taxes.</li>
                        <li >Copa Airlines will issue the refund in the original form of currency and payment as the original flight ticket.</li>
                        <li >The 24-hour cancellation policy does not apply to bookings with travel certificates and miles.</li>
                    </ul>

                    <h3>Additional Information on Copa Airlines Cancellation Policy</h3>
                    <p>Life does not always work as we plan, and we may need to cancel our travel. It is crucial to check out the airline&rsquo;s cancellation policy in advance if you are thinking about cancelling your scheduled flight. Copa Airlines has set its rules regarding cancellation and refunds. Find the airline&rsquo;s cancellation policy in detail.</p>

                    <ul>
                        <li >Within 24 hours of your purchase, you can cancel your flight for a full refund.</li>
                        <li >After this grace period, Copa Airlines will deduct the cancellation fee and send the remaining amount as travel credits.</li>
                        <li >In the event of the severe illness of the flyer and death of the immediate family member, you can claim a full refund from Copa.</li>
                        <li >If Copa cancels your flight or delays it for more than 4 hours, you have the right to claim your refund or request rebooking on an alternate flight.</li>
                        <li >According to the Copa Airline cancellation policy, you get a full refund from the airline if you are denied boarding due to overbooking.</li>
                        <li >Tickets that have been used are not refundable.</li>
                        <li >You may receive a refund on the partially used tickets based on the fare rules.</li>
                        <li >If you purchased any service from a third-party, request the refund directly from them.</li>
                        <li >To cancel your Copa Airlines booking, you can either go to the airline&rsquo;s official site or connect with an airline agent.</li>
                    </ul>

                    <p>If you have any queries regarding this policy, ask for the expert&rsquo;s assistance. Share your concerns, and seek instant help.</p>

                    <h3>How do I Cancel a Flight on Copa Airlines?</h3>
                    <p>Want to cancel your current Copa Airlines flight? The airline ensures that all its policies and services are customer-friendly. Therefore, it offers multiple ways to confirm the flight cancellation. Here are the possible ways to cancel your flight.</p>

                    <ul>
                        <li >Visit the Copa Airlines official site</li>
                        <li >Install the Copa mobile app</li>
                        <li >Call the agents of Copa Airlines</li>
                        <li >Go to the Copa ticket counter at the airport</li>
                    </ul>

                    <p>Use any of these methods to cancel your existing Copa Airlines flight, and confirm your flight cancellation in no time.</p>

                    <h3>Step-by-Step Process to Cancel a Copa Flight Online</h3>
                    <p>The most used way to cancel your current flight is the airline&rsquo;s official site. By following the steps below, you can cancel your flight from your comfort zone.</p>

                    <ul>
                        <li >Visit the Copa Airlines official site.</li>
                        <li >Click on the &ldquo;My Trips&rdquo; option.</li>
                        <li >Add your E-ticket number or reservation code.</li>
                        <li >Mention your last name.</li>
                        <li >Click on the &ldquo;Find Your Reservation.&rdquo;</li>
                        <li >Find the &ldquo;Cancel Flight&rdquo; option.</li>
                        <li >Click it, and follow along the on-screen prompts.</li>
                        <li >Pay the cancellation fee, if needed.</li>
                        <li >Cancel your current Copa flight with ease.&nbsp;</li>
                    </ul>

                    <p>Passengers are also allowed to cancel their flight on the airline&rsquo;s mobile app, which is absolutely free to install.</p>

                    <h3>How can I Cancel My Copa Flight Via Call?</h3>
                    <p>Not able to cancel your flight online? Fret not, as you can confirm the cancellation by calling the airline agents. Here are the steps for the same.</p>

                    <ul>
                        <li >Call the Copa Airlines phone number.</li>
                        <li >Select your preferred language.</li>
                        <li >Listen to the IVR instructions on the call.</li>
                        <li >Select the option to connect with a Copa Airlines agent.</li>
                        <li >After that, request a flight cancellation.&nbsp;</li>
                        <li >Share the details of your current flight.</li>
                        <li >Provide other necessary details.</li>
                        <li >The Copa agent will assist you immediately.</li>
                        <li >Pay the Copa Airlines cancellation fee.</li>
                        <li >Cancel your flight on the go.</li>
                    </ul>

                    <h3>How Much is the Copa Airlines Cancellation Fee?</h3>
                    <p>You may have to pay a specific fee to cancel your existing Copa Airlines flight. This fee depends upon certain factors, and these factors will decide how much you have to pay as a cancellation fee. These factors are your travel route, fare type, and the time of cancellation. You must check your cancellation fee before cancelling your flight to avoid any surprises at the last minute.</p>

                    <p>Get in touch with the agents of the airline, and ask about the fee to cancel your existing flight. They will guide you promptly. Additionally, you should also ask about your refund eligibility. If you are entitled to a refund, claim it.</p>

                    <h3>Does Copa Airlines Allow Free Cancellations?</h3>
                    <p>Yes, Copa Airlines allows free flight cancellations within 24 hours of your ticket purchase. The Copa Airlines cancellation policy 24 hours has been launched to offer the utmost flexibility to all travelers. With this time frame, all passengers can cancel their flights without any additional fee. Moreover, some fares also allow you to cancel your flight for a full refund.</p>

                    <h3>Is Copa Airlines refundable?</h3>
                    <p>Yes, Copa Airlines is refundable if you fulfill the given conditions. To get a full refund on the flight cancellation, cancel your flight within 24 hours of your original booking. Your flight should be at least 7 or more days away from the scheduled departure of the flight to receive a full refund from the airline.</p>

                    <p>Copa Airlines also offers a full refund on some fares. Check out your fare rules in advance to know whether you are eligible for a full refund.</p>
                    <h3>What happens if Copa Cancels my flight?</h3>
                    <p>Copa Airlines is one of the punctual airlines in the aviation industry. However, it may need to cancel your flight due to some issues. If the airline cancels or delays your flight, read the following points.&nbsp;</p>

                    <ul>
                        <li >If the cancellation occurs from the Copa Airlines side, you are eligible for a full refund.</li>
                        <li >The airline also offers rebooking if it cancels your flight. If you don&rsquo;t want to rebook, you can request a refund.</li>
                        <li >You are eligible for a full refund if your scheduled Copa Airlines flight is delayed for more than 4 hours.</li>
                        <li >To get your refund, you need to fill out the &ldquo;Claims and Complaints&rdquo; form on the official site.</li>
                        <li >You can also talk to a live agent at Copa Airlines to claim your refund on the cancelled flight.</li>
                        <li >Please note that some countries are an exception.</li>
                    </ul>

                    <h3>Highlights of Copa Airlines Refund Policy</h3>
                    <p>Same as the cancellation policy, Copa Airlines offers a refund policy for your convenience. Check out the following Copa Airlines refund rules.&nbsp;</p>

                    <ul>
                        <li >The refund rule depends upon your fare rules.</li>
                        <li >Copa Airlines will send you a refund in the original payment and currency mode.</li>
                        <li >You may have to pay an additional fee for refund processing.</li>
                        <li >Please note that used tickets are non-refundable.</li>
                        <li >The fare rules of partially used tickets will decide whether you are eligible for a refund or not.</li>
                        <li >Some additional services may be non-refundable (such as luggage and seats), and they are subject to the terms and conditions of your purchase.</li>
                        <li >You can check your refund status on the airline&rsquo;s official site.</li>
                        <li >For third-party purchases, contact them directly to claim a refund.</li>
                    </ul>

                    <h3>Sum It Up</h3>
                    <p>Being one of the best airlines, Copa offers a flexible cancellation policy that has been designed while keeping passengers&rsquo; comfort in consideration. The Copa Airlines cancellation policy allows you to cancel your existing flight for a full refund. Go to the &ldquo;My Trips&rdquo; section on the official site to cancel your flight and claim a refund. Get in touch with a Copa Airlines agent if you still have any queries regarding this cancellation policy.</p>
                </Container>

                <Footer />
            </>
        );
    }

    // Fallback for unsupported slugs
    return (
        <>
            <Header />
            <Container className="py-5 text-center">
                <h2 className="fw-bold">Page Not Found</h2>
                <p>Sorry, the requested cancellation policy does not exist.</p>
            </Container>
            <Footer />
        </>
    );
}
