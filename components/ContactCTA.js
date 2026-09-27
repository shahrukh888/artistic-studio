"use client";

import { useState } from "react";

export default function ContactCTA() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B0B0B] px-6 py-28 md:px-10 md:py-40"
    >
      {/* Artwork Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact-art.jpg')",
        }}
      />

      {/* Dark Left Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/85 to-transparent" />

      {/* CTA Content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        <p className="text-xs tracking-[0.35em] text-[#F2EEE7]/70">
          LET'S CREATE
        </p>

        <h2 className="mt-6 max-w-5xl text-5xl leading-[0.95] tracking-[-0.04em] text-[#F2EEE7] md:text-8xl">
          Have an idea
          <br />
          in mind?
        </h2>

        <p className="mt-10 max-w-xl text-sm leading-7 text-[#F2EEE7]/70">
          Whether you're interested in an original artwork,
          a custom commission or simply want to connect,
          let's start a conversation.
        </p>

        {/* GET IN TOUCH */}
        <button
          onClick={() => setFormOpen(true)}
          className="group mt-10 inline-flex items-center gap-5 border-b border-[#F2EEE7] pb-3 text-xs tracking-[0.25em] text-[#F2EEE7]"
        >
          GET IN TOUCH
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </button>
      </div>

      {/* CONTACT FORM POPUP */}
      {formOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm">

          {/* Popup */}
          <div className="relative w-full max-w-md border border-white/10 bg-[#111111] p-7 shadow-2xl md:p-9">

            {/* Close */}
            <button
              onClick={() => setFormOpen(false)}
              className="absolute right-5 top-5 text-lg text-[#A9A39A] transition-colors hover:text-[#F2EEE7]"
              aria-label="Close contact form"
            >
              ×
            </button>

            {/* Heading */}
            <p className="text-[10px] tracking-[0.3em] text-[#B89B67]">
              GET IN TOUCH
            </p>

            <h3 className="mt-4 text-3xl tracking-[-0.02em] text-[#F2EEE7]">
              Let's talk.
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#A9A39A]">
              Tell me a little about your idea or project.
            </p>

            {/* Form */}
            <form
              action="https://formsubmit.co/ssrk576@gmail.co"
              method="POST"
              className="mt-8 space-y-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Contact — Artistic Studio"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[9px] tracking-[0.25em] text-[#A9A39A]"
                >
                  NAME
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-[#F2EEE7] outline-none placeholder:text-[#55504A] focus:border-[#B89B67]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[9px] tracking-[0.25em] text-[#A9A39A]"
                >
                  EMAIL
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-[#F2EEE7] outline-none placeholder:text-[#55504A] focus:border-[#B89B67]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[9px] tracking-[0.25em] text-[#A9A39A]"
                >
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your idea..."
                  className="w-full resize-none border-b border-white/15 bg-transparent py-3 text-sm text-[#F2EEE7] outline-none placeholder:text-[#55504A] focus:border-[#B89B67]"
                />
              </div>

              {/* Send */}
              <button
                type="submit"
                className="group inline-flex items-center gap-4 border-b border-[#F2EEE7] pb-2 text-[10px] tracking-[0.25em] text-[#F2EEE7]"
              >
                SEND MESSAGE
                <span className="text-base transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}