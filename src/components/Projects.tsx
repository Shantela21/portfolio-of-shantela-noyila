const Projects = () => {
  const projects = [
    {
      title: 'GitHub Repositories',
      description: 'Open-source projects and code samples showcasing problem-solving skills and collaborative development.',
      technologies: ['Git', 'GitHub', 'Version Control', 'Code Reviews'],
      link: 'https://github.com/Shantela21'
    },
    {
      title: 'Weather App',
      description: 'A responsive web application that fetches and displays real-time weather data for any location using a public API.',
      technologies: ['React.js', 'CSS', 'API Integration', 'Responsive Design'],
      link: 'https://github.com/Shantela21/task-4-weather-application'
    },
    {
      title: 'Eon chatbot GUI',
      description: 'An AI-powered chatbot that provides intelligent responses and assistance using natural language processing.',
      technologies: ['JavaScript', 'AI', 'NLP', 'APIs'],
      link: 'https://github.com/Shantela21/ollama-ai-react-gui.git'
    },
    {
      title: 'Shopping List App',
      description: 'A simple and intuitive app to create, manage, and share shopping lists with real-time collaboration features.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'TypeScript'],
      link: 'https://github.com/Shantela21/shopping-list-app-.git'
    }
    
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
