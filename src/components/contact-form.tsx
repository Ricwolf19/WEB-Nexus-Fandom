import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("myyqoaye");
  
    if (state.succeeded) {
      return (
        <div className="h-full flex flex-wrap items-center justify-center text-white">
            <div className="max-w-xl p-8 text-center bg-gray-800 shadow-xl rounded-3xl">
                <h3 className="text-2xl mb-4 text-gray-200">
                Thank you for reaching out to{" "}
                <span className="text-red-500">Nexus</span>
                <span className="text-blue-500">Fandom</span>!
                </h3>
                  <div className="flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 text-red-600 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                      </svg>
                  </div>
                  <p className="mt-4 text-lg text-gray-200">We're thrilled to receive your message. Our team will review your feedback and get back to you as soon as possible!</p>
              </div>
        </div>
      );
    }
  
    return (
      <form className="bg-gray-500" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              First Name
            </label>
            <input
              className="appearance-none bg-transparent border-b border-red-500 w-full text-gray-200 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200 placeholder-white::placeholder"
              type="text"
              id="grid-first-name"
              placeholder="Jane"
              aria-label="Full name"
              name="First-name"
              required
            />
            <ValidationError
              prefix="First Name"
              field="First-name"
              errors={state.errors}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Last Name
            </label>
            <input
              className="appearance-none bg-transparent border-b border-red-500 w-full text-gray-200 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
              type="text"
              id="grid-last-name"
              placeholder="Doe"
              aria-label="Last name"
              name="Last-name"
              required
            />
            <ValidationError
              prefix="Last Name"
              field="Last-name"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
              Email Address
            </label>
            <input
              className="appearance-none bg-transparent border-b border-red-500 w-full text-gray-200 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
              type="email"
              id="grid-email"
              placeholder="jane@exp.com"
              aria-label="Email address"
              name="Email"
              required
            />
            <ValidationError
              prefix="Email"
              field="Email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
              Your Message
            </label>
            <textarea
              rows={10}
              className="appearance-none bg-transparent border-b border-red-500 w-full text-gray-200 mr-3 p-4 focus:bg-gray-200 leading-tight focus:outline-none"
              placeholder="Your message here..."
              id="grid-message"
              aria-label="Your message"
              name="Message"
              required
            />
            <ValidationError
              prefix="Message"
              field="Message"
              errors={state.errors}
            />
          </div>
          <div className="flex justify-between w-full px-3 mt-2">
            <button
              className="shadow bg-red-600 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    );
}

export default ContactForm;