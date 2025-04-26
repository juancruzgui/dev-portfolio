const SkillsSection = ({ darkMode, skills }) => {
  return (
    <section id="skills" className={`py-24 bg-gray-50 ${darkMode ? 'bg-gray-900 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-200'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career.
            Here's a snapshot of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory
            title="Frontend Development"
            skills={skills.frontend}
            darkMode={darkMode}
          />

          <SkillCategory
            title="Backend Development"
            skills={skills.backend}
            darkMode={darkMode}
          />

          <SkillCategory
            title="Tools & Technologies"
            skills={skills.tools}
            darkMode={darkMode}
          />
        </div>
      </div>
    </section>
  );
};

// components/SkillCategory.jsx
const SkillCategory = ({ title, skills, darkMode }) => {
  return (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white shadow-md'}`}>
      <h3 className="text-xl font-bold mb-4 text-blue-500">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${skill[1]}%` }}></div>
            </div>
            <span className={`ml-4 min-w-[100px] ${darkMode ? 'text-gray-100' : 'text-gray-600'}`}>{skill[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
