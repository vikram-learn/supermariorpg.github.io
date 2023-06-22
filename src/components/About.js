import React from 'react'

function About() {
    document.title = "About Us"
    return (
        <>
            <div className="container mt-5">
                <h1>Welcome to Histure.in!</h1>



                <section>
                    <h2>Our Mission</h2>
                    <p>At Histure.in, we believe that history is not just a collection of facts and events but a rich tapestry that connects us to our past, shapes our present, and guides our future. We are passionate about exploring and sharing the captivating stories, events, and individuals that have shaped the world we live in today.</p>
                </section>

                <section>
                    <h2>What We Offer</h2>
                    <ul>
                        <li>Articles and Blog Posts</li>
                        <li>Timelines and Chronologies</li>
                        <li>Interactive Content</li>
                        <li>Community Engagement</li>
                    </ul>
                </section>

                <section>
                    <h2>Join Us</h2>
                    <p>Whether you are a student, a history buff, or someone curious about the world's past, we invite you to join us on this exciting journey through time. Subscribe to our newsletter to stay updated on the latest articles, explore our resources, and embark on a voyage of discovery.</p>
                </section>

                <section>
                    <h2>Contact Us</h2>
                    <p>If you have any questions, suggestions, or feedback, we would love to hear from you. Visit our <a href="contact.html">Contact page</a> to get in touch with our team.</p>
                </section>


                <footer>
                    <p>Thank you for visiting Histure.in. Let's unravel the mysteries of the past and explore the wonders of history together!</p>
                </footer>
            </div>




        </>
    )
}

export default About