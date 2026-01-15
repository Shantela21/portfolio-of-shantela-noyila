const Projects = () => {
  const projects = [
    {
      title: "GitHub Repositories",
      description:
        "Open-source projects and code samples showcasing problem-solving skills and collaborative development.",
      technologies: ["Git", "GitHub", "Version Control", "Code Reviews"],
      link: "https://github.com/Shantela21",
      image:
        "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    },
    {
      title: "Audio Recorder",
      description:
        "A web-based audio recording application that allows users to record, save, and manage audio files directly in the browser with high-quality sound capture.",
      technologies: ["JavaScript", "Web Audio API", "MediaRecorder", "Blob Storage"],
      link: "https://audio-recorder-pjk2.onrender.com/",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYyagBB_gwNg0jsCYYc1dhA1yD5IeGl-w7Wg&s",
    },
    {
      title: "BookNest",
      description:
        "A comprehensive book management platform for organizing, tracking, and discovering new books with personalized reading lists and recommendations.",
      technologies: ["React.js", "Node.js", "MongoDB", "REST API"],
      link: "https://github.com/Shantela21/booknest",
      image:
        "https://unable-pink-cosuzapj5u.edgeone.app/Screenshot%202026-01-15%20100642.png",
    },
    {
      title: "Application Tracker",
      description:
        "A job application tracking system that helps users manage their job search process, track applications, and monitor interview schedules.",
      technologies: ["TypeScript", "React", "Express.js", "PostgreSQL"],
      link: "https://github.com/Shantela21/application-tracker",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEoqz-UpdBFPaMA1yJ_tdtn7useL_BywoOLg&s",
    },
    {
      title: "Weather App",
      description:
        "A responsive web application that fetches and displays real-time weather data for any location using a public API.",
      technologies: ["React.js", "CSS", "API Integration", "Responsive Design"],
      link: "https://weather-application-g205.onrender.com/ ",
      image:
        "https://play-lh.googleusercontent.com/BbSRwQ7ZrFnQP-MJL-jWbmA49C32TbMsDg7jnE7I6N3NqXnjK0KFTG0eR8mvcdsBig=w526-h296-rw",
    },
    {
      title: "Eon Chatbot GUI",
      description:
        "An AI-powered chatbot that provides intelligent responses and assistance using natural language processing.",
      technologies: ["JavaScript", "AI", "NLP", "APIs"],
      link: "https://eon-chatbot.onrender.com",
      image:
        "https://framerusercontent.com/images/g0YTRh7uRHpbWQgSZz62bO050.png?width=1378&height=880",
    },
    {
      title: "Shopping List App",
      description:
        "A simple and intuitive app to create, manage, and share shopping lists with real-time collaboration features.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "TypeScript",
      ],
      link: "https://shopping-list-app-e72q.onrender.com/",
      image:
        "https://cdn.dribbble.com/userupload/24556951/file/original-1e1645d958a79ee6a8b663c5cd0de520.png?resize=400x0",
    },
  ];

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        {/* Featured Hero Project */}
        <div className="featured-project">
          <div className="featured-image">
            <img src={featuredProject.image} alt={featuredProject.title} />
            <div className="featured-overlay">
              <div className="featured-content">
                <span className="featured-badge">Featured</span>
                <h3 className="featured-title">{featuredProject.title}</h3>
                <p className="featured-description">{featuredProject.description}</p>
                <div className="featured-technologies">
                  {featuredProject.technologies.map((tech, index) => (
                    <span key={index} className="featured-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={featuredProject.link}
                  className="featured-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Project →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="magazine-grid">
          {otherProjects.map((project, index) => (
            <article key={index} className="magazine-item">
              <div className="magazine-image">
                <img src={project.image} alt={project.title} />
                <div className="magazine-overlay">
                  <a
                    href={project.link}
                    className="magazine-quick-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quick View
                  </a>
                </div>
              </div>
              <div className="magazine-content">
                <h3 className="magazine-title">{project.title}</h3>
                <p className="magazine-excerpt">{project.description.substring(0, 100)}...</p>
                <div className="magazine-meta">
                  <div className="magazine-tech">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="magazine-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="magazine-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
