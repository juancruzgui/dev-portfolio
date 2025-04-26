import { Menu, Moon, Sun } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode, toggleMobileMenu, activeSection, scrollToSection }) => {
  return (
    <header className={`fixed w-full left-1/2 -translate-x-1/2 top-0 left-0 right-0 z-10 ${darkMode ? 'bg-gray-900 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-200'} border-b transition-colors duration-300`}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl">
            <span className="text-blue-500">Dev</span>Portfolio
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${activeSection === item ? 'text-blue-500' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} capitalize transition-colors duration-300`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-gray-300 hover:text-white' : 'bg-gray-100 text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="ml-4 md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
