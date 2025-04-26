// components/ProjectsSection.jsx
import { ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';


const ProjectsSection = ({ darkMode, projects }) => {
  return (
    <section id="projects" className={`py-24 ${darkMode ? 'bg-gray-900 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-200'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was crafted with attention to detail and focus on user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} darkMode={darkMode} />
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <a
            href="#"
            className={`inline-flex items-center px-6 py-3 ${darkMode ? 'border border-gray-700 hover:border-gray-600 text-gray-300' : 'border border-gray-300 hover:border-gray-400 text-gray-700'} font-medium rounded-md transition-colors duration-300`}
          >
            View All Projects <ExternalLink size={18} className="ml-2" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
