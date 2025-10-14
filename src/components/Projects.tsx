
const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with interactive maps and detailed forecasts using external APIs.',
      technologies: ['React', 'REST API', 'Chart.js', 'CSS3'],
      link: '#'
    },
    {
      title: 'Social Media App',
      description: 'Feature-rich social networking platform with posts, comments, likes, and user profiles.',
      technologies: ['React', 'GraphQL', 'PostgreSQL', 'AWS'],
      link: '#'
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
