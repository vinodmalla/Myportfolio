import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaLocationDot, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";

export default function Contact() {
  const [state, handleSubmit] = useForm("myzevljv");

  return (
    <div>
    <div className="m-6 mx-4 pr-4 md:m-4 md:mx-auto">
      <h1 className="text-center text-3xl font-bold mb-8">
        CONTACT <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-transparent bg-clip-text">ME</span>
      </h1>

      {state.succeeded ? (
        <p className="text-center text-green-600 text-xl font-semibold">Thanks for reaching out! I’ll get back to you soon.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">CONTACT ME HERE</h2>
            <p className="text-lg mb-6 text-center">
              Coming together is a beginning, staying together is progress, and working together is success.
            </p>
            <div className="space-y-4 text-xs md:text-lg">
              <div className="flex items-center gap-3"><FaLocationDot size={20} /> : Hyderabad</div>
              <div className="flex items-center gap-3"><IoMail size={20} />: mallavinod95@gmail.com</div>
              <div className="flex items-center gap-3"><MdAddCall size={20} />:
               6302854600</div>
            </div>
            <div className="flex gap-6 mt-6 justify-center">
              <a href="https://github.com/vinodmalla" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                <FaGithub size={35} />
              </a>
              <a href="https://www.linkedin.com/in/malla-vinodkumar-476898237/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaLinkedin size={35} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 m-2 rounded-lg p-2 w-full"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 m-2 rounded-lg p-2 w-full"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <input
                name="subject"
                type="text"
                placeholder="Enter Subject"
                className="border border-gray-300 m-2 rounded-lg p-2 w-full"
              />

              <textarea
                name="message"
                placeholder="Message Here..."
                className="border border-gray-300 m-2 rounded-lg p-2 w-full h-28"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 m-2 p-2 rounded-lg text-white font-semibold hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>

    </div>
   
  );
}
