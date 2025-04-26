const ContactForm = ({ darkMode }) => {
  return (
    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              id="name"
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
            className={`w-full px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:ring-blue-500 focus:border-blue-500`}
            placeholder="Project Inquiry"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
          <textarea
            id="message"
            rows="4"
            className={`w-full px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:ring-blue-500 focus:border-blue-500`}
            placeholder="I'd like to discuss a project..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
