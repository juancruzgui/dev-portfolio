const MobileMenu = ({ darkMode, toggleMobileMenu, activeSection, scrollToSection }) => {
  return (
    <div className={`fixed inset-0 z-20 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <div className="pt-16 pb-6 px-6">
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
        >
          <X size={24} />
        </button>

        <nav className="mt-8 space-y-6">
          {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`block w-full text-left py-3 px-4 rounded-md text-lg ${
                activeSection === item
                  ? 'text-blue-500 font-medium'
                  : darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              } capitalize transition-colors duration-300`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default MobileMenu;
