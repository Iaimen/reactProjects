import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can integrate API call here. For now, just showing the form data.
        console.log('Form submitted:', formData);

        // Example: Set success message
        setStatus('Thank you! Your message has been sent.');

        // Clear form
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <div>
            {/* contact section */}
            <section className="contact_section layout_padding">
                <div className="container px-0">
                    <div className="heading_container">
                        <h2>Contact Us</h2>
                    </div>
                </div>
                <div className="container container-bg">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 px-0">
                            <div className="map_container">
                                <div className="map-responsive">
                                    <iframe
                                        title="map"
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                                        width="600"
                                        height="300"
                                        frameBorder="0"
                                        style={{ border: "0", width: "100%", height: "100%" }}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5 px-0">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="message"
                                        className="message-box"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="d-flex">
                                    <button type="submit">
                                        SEND
                                    </button>
                                </div>
                                {status && <p style={{ marginTop: "10px", color: "white", background: 'black' }}>{status}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* end contact section */}
        </div>
    );
}

export default Contact;
