import React, { useState } from 'react'

function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();

        // Simulate a successful subscription
        console.log('Subscribed Email:', email);
        setSubscribed(true);
        setEmail(''); // Clear input
    };

    return (
        <div>
            <section className="info_section  layout_padding2-top">
                <div className="social_container">
                    <div className="social_box">
                        <a href="/">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="/">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="/">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="/">
                            <i className="fa fa-youtube" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="info_container ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <h6>
                                    ABOUT US
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="info_form">
                                    <h5>Newsletter</h5>
                                    <form onSubmit={handleSubscribe}>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <button type="submit">Subscribe</button>
                                    </form>
                                    {subscribed && (
                                        <p style={{ color: 'white', background: 'green', marginTop: '10px', padding: '5px' }}>
                                            Thank you for subscribing!
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h6>
                                    NEED HELP
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h6>
                                    CONTACT US
                                </h6>
                                <div className="info_link-box">
                                    <a href="/">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span> Gb road 123 london Uk </span>
                                    </a>
                                    <a href="/">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span>+01 12345678901</span>
                                    </a>
                                    <a href="/">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span> demo@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer section */}
                <footer className=" footer_section">
                    <div className="container">
                        <p>
                            &copy; <span id="displayYear"></span> All Rights Reserved By Us
                        </p>
                    </div>
                </footer>
                {/* footer section */}

            </section>

            {/* end info section */}
        </div>
    )
}

export default Footer