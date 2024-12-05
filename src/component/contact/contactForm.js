import React, { useState } from "react";
import Lottie from "lottie-react";
import axios from "axios";
import ContactUs from "../../contact-heading-new.json";

const ContactForm = () => {
    const [selectedOption, setSelectedOption] = useState("career");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [errors, setErrors] = useState({});

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setResponseMessage("");

        if (!validateForm()) return;

        setIsLoading(true);

        // New API request
        axios.post("http://172.17.2.155:86/api/ContactUs/CreateContactUs", {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            isAPP: true
        })
        .then(() => {
            setResponseMessage("Email sent successfully!");
            setFormData({ name: "", email: "", phone: "", message: "" });
            setErrors({});
        })
        .catch((error) => {
            setResponseMessage("Failed to send email.");
            console.error("Error sending email:", error);
        })
        .finally(() => setIsLoading(false));
    };

    return (
        <section className="ngt_offers-section">
            <div className="ngt_container">
                <div className="ngt_row">
                    <div className="ngt_col-lg-6 ngt_offer_heading">
                        <div className="relative pt-12 mb-20 main_animation_sec">
                            <div className="lottie_animation_main">
                                <Lottie animationData={ContactUs.animation} loop={true} />
                            </div>
                        </div>
                    </div>
                </div>
                <form className="contact-form contact_fields" onSubmit={handleSubmit}>
                    <div className="ngt_row">
                        <div className="ngt_col-lg-6">
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.name && <p className="error-message">{errors.name}</p>}
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <p className="error-message">{errors.email}</p>}
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="ngt_col-lg-6">
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                {errors.message && <p className="error-message">{errors.message}</p>}
                            </div>
                            <div className="flex justify-between form_btn_sec">
                                <div className="checkbox-section">
                                    <input type="checkbox" id="privacy-policy" required />
                                    <label htmlFor="privacy-policy">
                                        I accept the Privacy Policy
                                    </label>
                                </div>
                                <button type="submit" className="send-message-button" disabled={isLoading}>
                                    {isLoading ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </div>
                    </div>

                    {responseMessage && (
                        <p className={`response-message ${responseMessage.includes("successfully") ? "success" : "error"}`}>
                            {responseMessage}
                        </p>
                    )}
                </form>
            </div>

            <style jsx>{`
                .error-message {
                    color: red;
                    font-size: 0.875rem;
                }
                .response-message {
                    font-size: 1rem;
                    margin-top: 1rem;
                }
                .response-message.success {
                    color: green;
                    font-weight: bold;
                }
                .response-message.error {
                    color: red;
                    font-weight: bold;
                }
            `}</style>
        </section>
    );
};

export default ContactForm;
