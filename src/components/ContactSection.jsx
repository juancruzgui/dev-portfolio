import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = ({ darkMode }) => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me!
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <ContactForm darkMode={darkMode} />
          <ContactInfo darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
