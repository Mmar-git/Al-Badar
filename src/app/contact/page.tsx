"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
const ContactPage = () => {
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
      <div
        className="w-screen h-screen xl:flex-row bg-cover bg-center fade-in"
        style={{
          backgroundImage: "url('/contactdesk.jpg')",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-8 p-6 w-full h-full bg-black bg-opacity-40">
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-white font-thin text-white"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            Contact Us
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl text-[#B68D3B] text-center px-6 md:px-16 lg:px-20 mb-10">
          The Al Badar team is here to help with any of your queries and
          questions. You will find multiple ways to contact us including our
          Headquarters and global office addresses as well as contacts for
          specific business area such as textiles, interiors and luxury goods.
        </p>
      </div>

      <div
        className="hidden md:flex p-12 gap-4 w-full"
        style={{ border: "1px solid #B68D3B" }}
      >
        {/* LEFT */}
        <div className="w-1/2">
          <h1 className="py-6 text-3xl text-[#B68D3B]">Contact Form</h1>
          <p className="text-xl text-[#B68D3B] text-left mr-[4rem]">
            Please fill in this form to send us a message. Our Client Service
            advisors will respond to your query as soon as possible.
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
        {/* RIGHT */}
        <div className="w-1/2">
          <h1 className="py-6 text-3xl text-[#B68D3B]">Other Contact</h1>
          <p className="text-xl text-[#B68D3B] text-left mr-[4rem]">
            Stay connected with us! Follow us on Instagram for the latest
            updates and inspiration, or reach out directly via email for any
            questions or custom inquiries. We look forward to connecting with
            you!
          </p>
          <div className="py-4">
            <a
              href="https://www.instagram.com/albadarperfumeries/"
              className="p-6 w-full flex items-center justify-between text-[#B68D3B] text-2xl"
              style={{ border: "1px solid #B68D3B" }}
            >
              <p>CONNECT THROUGH INSTA </p>
              <Image
                src="/instagram.png"
                width={1200}
                height={1200}
                alt="icon"
                className="h-20 w-20"
              />
            </a>
          </div>
          <div className="py-4">
            <a
              href="mailto:al.badarperfumeries@gmail.com"
              className="p-6 w-full flex items-center justify-between text-[#B68D3B] text-2xl"
              style={{ border: "1px solid #B68D3B" }}
            >
              <p>CONNECT THROUGH EMAIL</p>
              <Image
                src="/email.png"
                alt="icon"
                width={1200}
                height={1200}
                className="h-20 w-20"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col md:hidden p-12 gap-4 w-full"
        style={{ border: "1px solid #B68D3B" }}
      >
        {/* LEFT */}
        <div className="w-full">
          <h1 className="py-6 text-3xl text-[#B68D3B]">Contact Form</h1>
          <p className="text-xl text-[#B68D3B] text-left mr-[4rem]">
            Please fill in this form to send us a message. Our Client Service
            advisors will respond to your query as soon as possible.
          </p>
          <form className="w-full max-w-lg p-3" onSubmit={handleSubmit}>
            {/* Title */}
            <label className="block text-[#B68D3B] mb-2">Title</label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full mb-4 p-2 border-b bg-transparent text-[#B68D3B] focus:outline-none"
              style={{ borderBottom: "1px solid #B68D3B" }}
            >
              <option value="" disabled>
                Select Title
              </option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
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
        {/* RIGHT */}
        <div className="w-full">
          <h1 className="py-6 text-3xl text-[#B68D3B]">Other Contact</h1>
          <p className="text-xl text-[#B68D3B] text-left mr-[4rem]">
            Stay connected with us! Follow us on Instagram for the latest
            updates and inspiration, or reach out directly via email for any
            questions or custom inquiries. We look forward to connecting with
            you!
          </p>
          <div className="py-4">
            <a
              href="https://www.instagram.com/albadarperfumeries/"
              className="p-6 w-full flex items-center justify-between text-[#B68D3B] text-2xl"
              style={{ border: "1px solid #B68D3B" }}
            >
              <p>CONNECT THROUGH INSTA </p>
              <Image
                src="/instagram.png"
                alt="icon"
                width={1200}
                height={1200}
                className="h-20 w-20"
              />
            </a>
          </div>
          <div className="py-4">
            <a
              href="mailto:al.badarperfumeries@gmail.com"
              className="p-6 w-full flex items-center justify-between text-[#B68D3B] text-2xl"
              style={{ border: "1px solid #B68D3B" }}
            >
              <p>CONNECT THROUGH EMAIL</p>
              <Image
                src="/email.png"
                alt="icon"
                width={1200}
                height={1200}
                className="h-20 w-20"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Thank-You Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md text-center">
            <p className="text-xl font-semibold text-[#B68D3B]">Thank you!</p>
            <p>Your message has been received. We will get back to you soon.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-[#B68D3B] text-white font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
