import { useState } from 'react';
import GitHub from 'lucide-react/dist/esm/icons/github';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import X from 'lucide-react/dist/esm/icons/x';

const ProjectCard = ({ project, darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Project Card */}
      <div
        onClick={openModal}
        className={`group relative rounded-2xl overflow-hidden border cursor-pointer
          ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-md'}
          transition-transform hover:scale-105 hover:shadow-2xl duration-300`}
      >
        {/* Project Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Card Content */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-4 line-clamp-3">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-gradient-to-r from-blue-400 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-300 dark:border-gray-700">

            <a  href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking links
            >
              <GitHub size={20} className="mr-2" /> <span className="text-sm">Code</span>
            </a>


            <a  href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking links
            >
              <ExternalLink size={20} className="mr-2" /> <span className="text-sm">Live</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            } shadow-2xl`}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-14 pr-14 pt-10 pb-10">
              {/* Left column: Image and GIF */}
              <div className="space-y-6">
                {/* Main project image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Demo GIF */}
                {project.gif && (
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-blue-500 dark:text-blue-400">Demo</h4>
                    <div className="rounded-xl overflow-hidden">
                      <img src={project.gif} alt={`${project.title} demo`} className="w-full" />
                    </div>
                  </div>
                )}
              </div>

              {/* Right column: Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                  <p className="text-base">{project.fullDescription || project.description}</p>
                </div>

                {/* Features */}
                {project.features && (
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-blue-500 dark:text-blue-400">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-blue-500 dark:text-blue-400">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-blue-400 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-300 dark:border-gray-700">

                  <a  href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    <GitHub size={20} className="mr-2" /> <span>View Code</span>
                  </a>


                  <a  href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" /> <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
