"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
const FaqPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    query: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  // Explicitly type 'e' as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Type 'e' as React.FormEvent<HTMLFormElement> for the form submission event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and user ID
    emailjs
      .send(
        "service_ftyb7rg", // e.g., "service_xyz"
        "template_cb6mnx3", // Template ID
        {
          title: formData.title,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          query: formData.query,
        },
        "8IrSdKjIYTRKJlNIW" // e.g., "user_ABC123"
      )
      .then(() => {
        setShowPopup(true);
        setFormData({
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          query: "",
        });
      })
      .catch((error) => console.error("Failed to send email:", error));
  };
  return (
    <div
      className="px-4 md:px-8 lg:px-6 xl:px-10 2xl:px-24 w-full flex flex-col items-center overflow-hidden"
      style={{ fontFamily: '"Alumni Sans Pinstripe", serif' }}
    >
      {" "}
      <div
        className="w-screen h-screen xl:flex-row bg-cover bg-center fade-in"
        style={{
          backgroundImage: "url('/consultationdesk.jpg')",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-8 p-6 w-full h-full bg-black bg-opacity-40">
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-white font-thin text-white"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            Fragrance Consultation Tips
          </h1>
        </div>
      </div>
      <div>
        <div className="py-6 flex flex-col justify-center items-center">
          <p className="text-xl text-[#FFFFF0] ">
            Choosing the perfect fragrance is a personal journey, and at Al
            Badar, we’re here to guide you every step of the way. Our fragrance
            consultation tips are designed to help you discover scents that
            resonate with your unique preferences and lifestyle. Whether you’re
            new to attars or a seasoned enthusiast, our expert advice will help
            you find a fragrance that complements your personality, mood, and
            occasion. Let us help you explore the world of natural perfumes and
            unlock a scent experience tailored just for you.
          </p>
          <form className="w-full max-w-lg p-6" onSubmit={handleSubmit}>
            {/* Title */}
            <label className="block text-[#B68D3B] mb-2">Title</label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full mb-4 p-2 border-b bg-transparent text-[#B68D3B] cursor-pointer focus:outline-none"
              style={{ borderBottom: "1px solid #B68D3B" }}
            >
              <option
                className="bg-transparent text-[#B68D3B]"
                value=""
                disabled
              >
                Select Title
              </option>
              <option className="bg-transparent text-[#B68D3B]" value="Mr">
                Mr
              </option>
              <option className="bg-transparent text-[#B68D3B]" value="Mrs">
                Mrs
              </option>
              <option className="bg-transparent text-[#B68D3B]" value="Ms">
                Ms
              </option>
            </select>

            {/* First Name */}
            <label className="block text-[#B68D3B] mb-2">First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full mb-4 bg-transparent p-2 border-b text-[#B68D3B] focus:outline-none"
              style={{ borderBottom: "1px solid #B68D3B" }}
              placeholder="First Name"
            />

            {/* Last Name */}
            <label className="block text-[#B68D3B] mb-2">Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full mb-4 p-2 border-b bg-transparent text-[#B68D3B] focus:outline-none"
              style={{ borderBottom: "1px solid #B68D3B" }}
              placeholder="Last Name"
            />

            {/* Email Address */}
            <label className="block text-[#B68D3B] mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mb-4 p-2 border-b bg-transparent text-[#B68D3B] focus:outline-none"
              style={{ borderBottom: "1px solid #B68D3B" }}
              placeholder="Email Address"
            />

            {/* Phone Number */}
            <label className="block text-[#B68D3B] mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mb-4 p-2 border-b bg-transparent text-[#B68D3B] focus:outline-none"
              style={{ borderBottom: "1px solid #B68D3B" }}
              placeholder="Phone Number"
            />

            {/* Query */}
            <label className="block text-[#B68D3B] mb-2">Query</label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              required
              className="w-full mb-4 p-2 bg-transparent text-[#B68D3B] focus:outline-none"
              style={{ borderBottom: "1px solid #B68D3B" }}
              placeholder="Your message"
              rows={4}
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-[#B68D3B] text-white font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
