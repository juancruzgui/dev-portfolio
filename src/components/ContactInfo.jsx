import { Mail, Linkedin } from 'lucide-react';
import GitHub from 'lucide-react/dist/esm/icons/github';

const ContactInfo = ({ darkMode }) => {
  return (
    <div className="md:w-1/2 md:pl-8">
      <div className={`flex flex-col items-center p-6 rounded-lg h-full ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50'} overflow-hidden`}>
        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <Mail className="text-blue-500 flex-shrink-0 mb-2" size={24} />
            <div className="flex flex-col items-center">
              <h4 className="font-medium mb-1">Email</h4>
              <a href="mailto:juancruzguillen97@gmail.com" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-100">
                juancruzguillen97@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Linkedin className="text-blue-500 flex-shrink-0 mb-2" size={24} />
            <div className="flex flex-col items-center">
              <h4 className="font-medium mb-1">LinkedIn</h4>
              <a href="https://www.linkedin.com/in/jcguillen/" target="_blank" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-100">
                linkedin.com/in/jcguillen
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <GitHub className="text-blue-500 flex-shrink-0 mb-2" size={24} />
            <div className="flex flex-col items-center">
              <h4 className="font-medium mb-1">GitHub</h4>
              <a href="https://github.com/juancruzgui" target="_blank" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-100">
                github.com/juancruzgui
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ContactInfo;
