const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-gray-100 border-t border-gray-200'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-xl">
              <span className="text-blue-500">Dev</span>Portfolio
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Juan Cruz Guillen. All rights reserved.
            </p>
          </div>

          <div className="grid grid-flow-row auto-rows-auto xs:grid-flow-col xs:auto-cols-auto gap-4">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} capitalize transition-colors duration-300`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
