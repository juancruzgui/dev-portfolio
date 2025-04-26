const HeroSection = ({ darkMode, scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-blue-500">Hello, I'm</span><br />
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>Juan Cruz Guillen</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-500 dark:text-gray-400 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-xl">
              I develop responsive websites and web applications focused on design, functionality and fast shipping.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-6 py-3 border ${darkMode ? 'border-gray-700 hover:border-gray-600 text-gray-300' : 'border-gray-300 hover:border-gray-400 text-gray-700'} font-medium rounded-md transition-colors duration-300`}
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mb-12 md:mt-12 md:mt-0">
            <div className="relative">
              <div className={`w-64 h-64 sm:w-80 sm:h-80 rounded-full mx-auto overflow-hidden border-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <img src="/img/Nft.PNG" alt="Profile" className="w-full h-full object-cover" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
