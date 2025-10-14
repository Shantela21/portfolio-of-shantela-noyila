const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Bootstrap', 'Responsive Design']
    },
    {
      title: 'Backend & Database',
      skills: ['Node.js', 'MySQL', 'NPM', 'Yarn', 'CRUD Operations']
    },
    {
      title: 'Tools & Collaboration',
      skills: ['Git', 'GitHub', 'Version Control', 'Code Reviews', 'Debugging', 'Problem-Solving']
    },
    {
      title: 'Certifications',
      skills: ['Cisco Networking', 'Cybersecurity', 'AI Fundamentals', 'FreeCodeCamp']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
