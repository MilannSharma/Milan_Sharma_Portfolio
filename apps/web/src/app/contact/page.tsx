"use client";

import React, { useEffect, useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import MapBox from "@/components/contact/map-box";
import PageHeader from "@/components/page-header";
import config from "@/config";

const { title } = config;

// ✅ Your Formspree endpoint
const FORMSPREE_URL = "https://formspree.io/f/xkobwkag";

function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    submitting: boolean;
    success: boolean;
    error: string | null;
  }>({
    submitting: false,
    success: false,
    error: null,
  });

  useEffect(() => {
    document.title = `Contact | ${title}`;
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ FORM SUBMIT → FORMSPREE
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setFormData({
        fullname: "",
        email: "",
        message: "",
      });

      setStatus({ submitting: false, success: true, error: null });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: "Failed to send message. Please try again later.",
      });
    }
  };

  const isFormValid =
    formData.fullname && formData.email && formData.message;

  return (
    <article>
      <PageHeader header="Contact" />

      <section className="mb-10">
        <MapBox />

        <h3 className="text-white-2 text-2xl font-bold mb-5">
          Contact Form
        </h3>

        <form onSubmit={handleSubmit} className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleInputChange}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleInputChange}
          />

          {/* 🛡️ Spam honeypot */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <button
            className="form-btn"
            type="submit"
            disabled={!isFormValid || status.submitting}
          >
            <FaRegPaperPlane />
            <span>
              {status.submitting ? "Sending..." : "Send Message"}
            </span>
          </button>

          {/* ✅ Success / Error messages */}
          {status.success && (
            <p className="text-green-400 mt-4">
              ✅ Message sent successfully!
            </p>
          )}

          {status.error && (
            <p className="text-red-400 mt-4">
              ❌ {status.error}
            </p>
          )}
        </form>
      </section>
    </article>
  );
}

export default Contact;
