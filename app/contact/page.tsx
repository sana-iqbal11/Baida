"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const whatsappNumber = "971509609311";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = `Hello BAIDA,

I would like to send an inquiry.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-[#F2EAE0]">
      <section
        className="relative bg-cover bg-center px-6 py-24 text-center md:py-32"
        style={{
          backgroundImage: "url('/images/contact.webp')",
        }}
      >
       <div className="absolute inset-0 bg-[#4A3A2A]/35" />

        <div className="relative z-10">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-dark">
            Get In Touch
          </p>

          <h1 className="text-5xl font-light text-dark md:text-7xl">
            Contact Us
          </h1>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-dark"></span>
            <span className="text-sm text-dark">✦</span>
            <span className="h-px w-12 bg-dark"></span>
          </div>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-dark">
            Have a question, custom order request, or want to place an order?
            Contact BAIDA directly and we will be happy to help.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] bg-white shadow-lg lg:grid-cols-2 lg:rounded-[36px]">
          <div
            className="relative bg-[#F8F4EE] bg-cover bg-left-bottom px-6 py-10 md:px-14 md:py-12"
            style={{
              backgroundImage: "url('/images/contactbg.png')",
            }}
          >
            <div className="absolute inset-0 bg-[#F8F4EE]/50" />

            <div className="relative z-10">
              <h2 className="text-4xl font-light text-dark">Let’s Talk</h2>

              <p className="mt-5 max-w-md leading-8 text-brown">
                For orders, scent options, gift packaging, or custom candle
                requests, message us on WhatsApp.
              </p>

              <div className="mt-8 space-y-5 text-brown">
                <p>
                  <span className="font-medium text-dark">WhatsApp:</span>{" "}
                  +971 50 960 9311
                </p>

                <p>
                  <span className="font-medium text-dark">Location:</span> Abu
                  Dhabi, UAE
                </p>

                <p>
                  <span className="font-medium text-dark">Response Time:</span>{" "}
                  Usually within 24 hours
                </p>
              </div>

              <Link
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                className="mt-10 inline-flex rounded-full bg-dark px-8 py-4 text-cream transition hover:bg-brown"
              >
                Message on WhatsApp →
              </Link>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-10 md:px-14 md:py-12">
            <div className="grid gap-5">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-[15px] border-beige bg-cream px-5 py-4 outline-none focus:border-gold"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-[15px] border-beige bg-cream px-5 py-4 outline-none focus:border-gold"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="Phone / WhatsApp Number"
                className="w-full border rounded-[15px] border-beige bg-cream px-5 py-4 outline-none focus:border-gold"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="w-full resize-none rounded-[15px] border border-beige bg-cream px-5 py-4 outline-none focus:border-gold"
              />

              <button
                type="submit"
                className="rounded-full bg-dark px-8 py-4 text-cream transition hover:bg-brown"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}