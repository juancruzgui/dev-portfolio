const AboutSection = ({ darkMode }) => {
  return (
    <section id="about" className={`py-24 bg-gray-50 ${darkMode ? 'bg-gray-900 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-200'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">My Journey</h3>
            <p className="text-lg mb-6 ">
              With 1+ years of experience in full stack development, I specialize in shipping web
              applications fast, from UX/UI design to deployment.
            </p>
            <p className="text-lg mb-6 ">
              I'm passionate about creating new stuff and love solving complex challenges.
            </p>
            <p className="text-lg ">
              When I'm not coding, you'll find me doing sports, reading tech blogs, or experimenting
              with new personal projects.
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white shadow-md'}`}>
                <h4 className="font-bold text-xl mb-2">UX/UI</h4>

                <p className="">B.S. Economics<br />Universidad Nacional de Cuyo, 2024</p>
              </div>

              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white shadow-md'}`}>
                <h4 className="font-bold text-xl mb-2">Backend</h4>
                <p className="">1+ years<br />Full Stack Development</p>
              </div>

              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white shadow-md'}`}>
                <h4 className="font-bold text-xl mb-2">Frontend</h4>
                <p className="">+3 completed<br />Web Applications</p>
              </div>

              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white shadow-md'}`}>
                <h4 className="font-bold text-xl mb-2">Deployment</h4>
                <p className="">Data Science<br />Le Wagon, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
