import React, { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formData.message) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error for the field being changed
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSending(true);
    setSuccessMessage("");

    fetch("http://172.17.2.155:86/api/Training/CreateTraining", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send message");
        }
        return response.json();
      })
      .then((data) => {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        setErrors({ form: "Failed to send message. Please try again." });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="get_touch_sec">
      <div className="ngt_row">
        <div className="ngt_col-lg-6 rating_col">
          <div className="rating_sec">
            <div className="rating_content">
              <h3>Get in Touch Now</h3>
              <img src="/Training/rating.svg" alt="Rating" />
              <h4>Join Over 500+ employees</h4>
              <p>
                Transform your career with NGTSol's expert training. Acquire
                essential skills and knowledge to stay ahead in your
                professional career.
              </p>
            </div>
          </div>
          <div className="ngt_logo_sec">
            <img src="/Training/ngt_logo.svg" alt="NGT Logo" />
          </div>
        </div>
        <div className="ngt_col-lg-6">
          <div className="form_get_in_touch">
            <div className="form_fields_get_touch">
              <form className="contact-form contact_fields ngt_row" onSubmit={handleSubmit}>
                <div className="form-group ngt_col-lg-6">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                </div>
                <div className="form-group ngt_col-lg-6">
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>

                <div className="form-group ngt_col-lg-12 mb-0">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    className="mb-0"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
                </div>
                {errors.form && <p className="error_message" style={{ color: "red" }}>{errors.form}</p>}
                {successMessage && <p className="success_message" style={{ color: "green" }}>{successMessage}</p>}
                <div className="flex justify-center form_btn_sec">
                  <button type="submit" className="send-message-button" disabled={isSending}>
                    {isSending ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
