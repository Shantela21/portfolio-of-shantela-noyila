import { useState } from 'react';

interface CMSContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  about: {
    bio: string;
    highlights: Array<{ title: string; description: string }>;
  };
  projects: Array<{
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
  }>;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
}

const CMS = () => {
  const [content, setContent] = useState<CMSContent>({
    hero: {
      title: "Hi, I'm Shantela Noyila",
      subtitle: "Full Stack Developer",
      description: "Passionate about turning ideas into functional, visually appealing digital experiences"
    },
    about: {
      bio: "I'm a passionate Full Stack Developer based in Pietermaritzburg, South Africa, currently pursuing my Diploma in ICT Business Analysis at Durban University of Technology.",
      highlights: [
        { title: "Problem Solver", description: "Turning complex challenges into elegant solutions" },
        { title: "Fast Learner", description: "Quickly adapting to new technologies and frameworks" },
        { title: "Innovative", description: "Creative thinking for modern web solutions" }
      ]
    },
    projects: [],
    contact: {
      email: "shantela.noyila@example.com",
      phone: "+27 63 899 8411",
      location: "Pietermaritzburg, South Africa"
    }
  });
  
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simple password authentication (in production, use proper auth)
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Invalid password');
    }
  };

  const handleSave = (section: string, data: any) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...prev[section as keyof CMSContent], ...data }
    }));
    setEditingSection(null);
    
    // In production, save to your CMS API
    console.log(`Saving ${section}:`, data);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(content, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `portfolio-content-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEditingSection(null);
  };

  if (!isAuthenticated) {
    return (
      <section id="cms" className="cms">
        <div className="container">
          <div className="cms-login">
            <h2>CMS Access</h2>
            <div className="login-form">
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
              <button onClick={handleLogin} className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cms" className="cms">
      <div className="container">
        <div className="cms-header">
          <h2>Content Management System</h2>
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
        </div>

        <div className="cms-content">
          {/* Hero Section Editor */}
          <div className="cms-section">
            <div className="section-header">
              <h3>Hero Section</h3>
              <button 
                onClick={() => setEditingSection(editingSection === 'hero' ? null : 'hero')}
                className="btn btn-secondary"
              >
                {editingSection === 'hero' ? 'Cancel' : 'Edit'}
              </button>
            </div>
            
            {editingSection === 'hero' ? (
              <div className="editor-form">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={content.hero.title}
                    onChange={(e) => setContent(prev => ({
                      ...prev,
                      hero: { ...prev.hero, title: e.target.value }
                    }))}
                  />
                </div>
                <div className="form-group">
                  <label>Subtitle</label>
                  <input
                    type="text"
                    value={content.hero.subtitle}
                    onChange={(e) => setContent(prev => ({
                      ...prev,
                      hero: { ...prev.hero, subtitle: e.target.value }
                    }))}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={content.hero.description}
                    onChange={(e) => setContent(prev => ({
                      ...prev,
                      hero: { ...prev.hero, description: e.target.value }
                    }))}
                  />
                </div>
                <button 
                  onClick={() => handleSave('hero', content.hero)}
                  className="btn btn-primary"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <div className="content-preview">
                <h4>{content.hero.title}</h4>
                <p><strong>{content.hero.subtitle}</strong></p>
                <p>{content.hero.description}</p>
              </div>
            )}
          </div>

          {/* About Section Editor */}
          <div className="cms-section">
            <div className="section-header">
              <h3>About Section</h3>
              <button 
                onClick={() => setEditingSection(editingSection === 'about' ? null : 'about')}
                className="btn btn-secondary"
              >
                {editingSection === 'about' ? 'Cancel' : 'Edit'}
              </button>
            </div>
            
            {editingSection === 'about' ? (
              <div className="editor-form">
                <div className="form-group">
                  <label>Bio</label>
                  <textarea
                    value={content.about.bio}
                    onChange={(e) => setContent(prev => ({
                      ...prev,
                      about: { ...prev.about, bio: e.target.value }
                    }))}
                  />
                </div>
                <button 
                  onClick={() => handleSave('about', content.about)}
                  className="btn btn-primary"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <div className="content-preview">
                <p>{content.about.bio}</p>
                <div className="highlights-list">
                  {content.about.highlights.map((highlight, index) => (
                    <div key={index} className="highlight-item">
                      <strong>{highlight.title}:</strong> {highlight.description}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Section Editor */}
          <div className="cms-section">
            <div className="section-header">
              <h3>Contact Information</h3>
              <button 
                onClick={() => setEditingSection(editingSection === 'contact' ? null : 'contact')}
                className="btn btn-secondary"
              >
                {editingSection === 'contact' ? 'Cancel' : 'Edit'}
              </button>
            </div>
            
            {editingSection === 'contact' ? (
              <div className="editor-form">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={content.contact.email}
                    onChange={(e) => setContent(prev => ({
                      ...prev,
                      contact: { ...prev.contact, email: e.target.value }
                    }))}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={content.contact.phone}
                    onChange={(e) => setContent(prev => ({
                      ...prev,
                      contact: { ...prev.contact, phone: e.target.value }
                    }))}
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    value={content.contact.location}
                    onChange={(e) => setContent(prev => ({
                      ...prev,
                      contact: { ...prev.contact, location: e.target.value }
                    }))}
                  />
                </div>
                <button 
                  onClick={() => handleSave('contact', content.contact)}
                  className="btn btn-primary"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <div className="content-preview">
                <p><strong>Email:</strong> {content.contact.email}</p>
                <p><strong>Phone:</strong> {content.contact.phone}</p>
                <p><strong>Location:</strong> {content.contact.location}</p>
              </div>
            )}
          </div>
        </div>

        <div className="cms-footer">
          <p className="save-status">All changes are saved locally</p>
          <button className="btn btn-download" onClick={handleExport}>
            Export Content
          </button>
        </div>
      </div>
    </section>
  );
};

export default CMS;
