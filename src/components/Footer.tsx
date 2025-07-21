"use client";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import React, { useState } from "react";
import emailjs from "emailjs-com";
const link1 = [
  { id: 1, label: "Contact Us", url: "contact" },
  { id: 2, label: "FAQ", url: "/FAQ" },
];
const link2 = [
  { id: 1, label: "About Us", url: "/about" },
  {
    id: 2,
    label: "Instagram",
    url: "https://www.instagram.com/albadarperfumeries/",
  },
];
const link3 = [
  { id: 1, label: "Fragrance Consultation", url: "/consultation" },
  { id: 2, label: "Fragrance Care Tips", url: "/tips" },
  // { id: 3, label: "Fragrance Guide", url: "/guide" },
];
const link4 = [
  { id: 1, label: "Privacy Policy", url: "/privacy" },
  { id: 2, label: "Shipping Policy", url: "/shipping" },
  { id: 3, label: "Terms and Conditions", url: "/terms" },
  { id: 4, label: "Order Cancellation", url: "/cancellation" },
];
const Footer = () => {
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
        "template_0cf2mfa", // Template ID
        {
          title: formData.title,
          firstName: "Newsletter",
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
      className="py-6 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-page-100 text-xl mt-24"
      style={{
        fontFamily: '"Alumni Sans Pinstripe", serif',
      }}
    >
      {/* DESKTOP */}
      <div className="hidden md:flex gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">
              Subscribe to our Newsletter
            </div>
          </Link>
          <p>Be always updated with the latest exclusive news from Al Badar</p>
          <form onSubmit={handleSubmit}>
            <div
              className="flex gap-2"
              style={{
                paddingBottom: "15px",
                borderBottom: "1px solid #FFFFF0",
              }}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none"
                placeholder="Your Email Address"
              />
              <button type="submit">
                <Image
                  src="/arrow.png"
                  alt="send"
                  width={1200}
                  height={1200}
                  className="h-4 w-8"
                />
              </button>
            </div>
          </form>
          <p className="text-sm">
            I acknowledge that my email address will be processed by Al Badar in
            accordance with the provisions of the Privacy Policy
          </p>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-2/3">
          <div className="flex flex-col">
            <h1 className="font-medium text-2xl">GET IN TOUCH</h1>
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/contact">Contact Us</Link>
              <Link href="/FAQ">FAQ</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-2xl">COMPANY</h1>
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/about">About Us</Link>
              <Link href="https://www.instagram.com/albadarperfumeries/">
                Instagram
              </Link>
              <Link href="">Facebook</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-2xl">SERVICES</h1>
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/consultation">Fragrance Consultation</Link>
              <Link href="/tips">Fragrance Care Tips</Link>
              {/* <Link href="/guide">Fragrance Guide</Link> */}
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-2xl">POLICIES</h1>
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/shipping">Shipping Policy</Link>
              <Link href="/terms">Terms and Conditions</Link>
              <Link href="/cancellation">Order Cancellation</Link>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="flex md:hidden flex-col">
        {/* LEFT */}
        <div className="w-full flex-col text-center px-6">
          <Link href="/">
            <div className="text-4xl tracking-wide">
              Subscribe to our Newsletter
            </div>
          </Link>
          <p className="text-md mb-2">
            Be always updated with the latest exclusive news from Al Badar
          </p>
          <form onSubmit={handleSubmit}>
            <div
              className="flex gap-2"
              style={{
                paddingBottom: "15px",
                borderBottom: "1px solid #FFFFF0",
              }}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none"
                placeholder="Your Email Address"
              />
              <button type="submit">
                <Image
                  src="/arrow.png"
                  alt="send"
                  width={1200}
                  height={1200}
                  className="h-4 w-8"
                />
              </button>
            </div>
          </form>
          <p className="text-sm">
            I acknowledge that my email address will be processed by Al Badar in
            accordance with the provisions of the Privacy Policy
          </p>
        </div>
        {/* CENTER */}
        <div className="p-5 justify-between text-2xl">
          <DropdownMenu links={link1} label="GET IN TOUCH" />
          <DropdownMenu links={link2} label="COMPANY" />
          <DropdownMenu links={link3} label="SERVICES" />
          <DropdownMenu links={link4} label="POLICIES" />
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col items-center gap-2 mt-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            alt=""
            width={1200}
            height={1200}
            className="mt-2 ml-8 h-30 w-40"
          />
        </Link>
        <div className="">
          ©2024 Al Badar. All rights reserved. Powered By Al Badar
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-black p-8 rounded shadow-md text-center">
            <p className="text-xl font-semibold text-[#B68D3B]">Thank you!</p>
            <p>You have been added to our Newsletter</p>
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

export default Footer;
