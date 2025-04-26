import { useState, useRef, useEffect } from 'react';
import GitHub from 'lucide-react/dist/esm/icons/github';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import X from 'lucide-react/dist/esm/icons/x';
import Maximize from 'lucide-react/dist/esm/icons/maximize-2';

const ProjectCard = ({ project, darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedGif, setExpandedGif] = useState(null);
  const modalRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openGifExpanded = (gif, e) => {
    e.stopPropagation(); // Prevent modal from closing
    setExpandedGif(gif);
  };

  const closeExpandedGif = (e) => {
    e.stopPropagation(); // Prevent modal from closing
    setExpandedGif(null);
  };

  // Handle clicks outside the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen && !expandedGif) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, expandedGif]);

  // Check if GitHub link exists and is not "#" or empty
  const hasGithubLink = project.github && project.github !== "#" && project.github !== "";
  // Check if live link exists and is not "#" or empty
  const hasLiveLink = project.live && project.live !== "#" && project.live !== "";

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
            <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
            {project.subtitle && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 italic">{project.subtitle}</p>
            )}
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

          {/* Links - Only rendered if links are available */}
          {(hasGithubLink || hasLiveLink) && (
            <div className="flex items-center justify-between pt-4 border-t border-gray-300 dark:border-gray-700">
              {hasGithubLink && (
                <a href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GitHub size={20} className="mr-2" /> <span className="text-sm">Code</span>
                </a>
              )}

              {hasLiveLink && (
                <a href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={20} className="mr-2" /> <span className="text-sm">Live</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            ref={modalRef}
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

                {/* Demo GIFs */}
                {project.gif && project.gif.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-blue-500 dark:text-blue-400">Demo</h4>
                    <div className="space-y-4">
                      {Array.isArray(project.gif) ? (
                        project.gif.map((gif, index) => (
                          <div key={index} className="rounded-xl overflow-hidden relative group">
                            <p className="text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">
                              {gif.title || `Demo ${index + 1}`}
                            </p>
                            <div className="relative">
                              <img
                                src={gif.url || gif}
                                alt={gif.title ? `${gif.title} demo` : `${project.title} demo ${index + 1}`}
                                className="w-full rounded-lg"
                              />
                              <button
                                onClick={(e) => openGifExpanded(gif.url || gif, e)}
                                className="absolute bottom-2 right-2 p-1 bg-blue-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                title="Expand GIF"
                              >
                                <Maximize size={16} />
                              </button>
                            </div>
                            {gif.description && (
                              <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                                {gif.description}
                              </p>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="rounded-xl overflow-hidden relative group">
                          <div className="relative">
                            <img
                              src={project.gif}
                              alt={`${project.title} demo`}
                              className="w-full rounded-lg"
                            />
                            <button
                              onClick={(e) => openGifExpanded(project.gif, e)}
                              className="absolute bottom-2 right-2 p-1 bg-blue-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Expand GIF"
                            >
                              <Maximize size={16} />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Right column: Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-1">{project.title}</h2>
                  {project.subtitle && (
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-3 italic">{project.subtitle}</p>
                  )}
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
                {(hasGithubLink || hasLiveLink) && (
                  <div className="flex items-center justify-between pt-4 border-t border-gray-300 dark:border-gray-700">
                    {hasGithubLink && (
                      <a href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                      >
                        <GitHub size={20} className="mr-2" /> <span>View Code</span>
                      </a>
                    )}

                    {hasLiveLink && (
                      <a href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        <ExternalLink size={20} className="mr-2" /> <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expanded GIF overlay */}
      {expandedGif && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60] p-4"
          onClick={(e) => {
            e.stopPropagation(); // Prevent event from reaching modal overlay
            closeExpandedGif(e);
          }}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the container
          >
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                closeExpandedGif(e);
              }}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-200 text-black hover:bg-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={expandedGif}
              alt="Expanded demo"
              className="max-w-full max-h-[85vh] mx-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
