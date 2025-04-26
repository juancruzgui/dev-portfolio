import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = ({ darkMode }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Message sent successfully!' }
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: 'An error occurred. Please try again later.' }
        });
      });
  };

  return (
    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
      {status.submitted ? (
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-green-800 text-white' : 'bg-green-100 text-green-800'}`}>
          <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
          <p className="mb-4">{status.info.msg}</p>
          <button
            onClick={() => setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } })}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-300"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          {status.info.error && (
            <div className={`p-4 rounded-md ${darkMode ? 'bg-red-800 text-white' : 'bg-red-100 text-red-800'}`}>
              {status.info.msg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:ring-blue-500 focus:border-blue-500`}
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:ring-blue-500 focus:border-blue-500`}
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Project Inquiry"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:ring-blue-500 focus:border-blue-500`}
              placeholder="I'd like to discuss a project..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status.submitting}
            className={`px-6 py-3 text-white font-medium rounded-md transition-colors duration-300 ${
              status.submitting
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
