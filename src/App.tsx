import React, { useState, useEffect } from 'react';
import { 
  User, 
  Code, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Download,
  Menu,
  X,
  ChevronUp,
  Star,
  GitBranch,
  Database,
  Globe
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollTop(scrollPosition > 300);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition + 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-800">Kishore R</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-purple-600' 
                      : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-50"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <User size={64} className="text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Kishore R</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Aspiring Full-Stack Developer | Passionate Coder
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Final-year Computer Science Engineering student with a passion for creating innovative web solutions and solving complex problems through clean, efficient code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a dedicated Computer Science Engineering student in my final year, driven by an insatiable curiosity for technology and a passion for creating meaningful digital experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey in programming began with curiosity and has evolved into a deep love for full-stack development. I enjoy the entire process of bringing ideas to life - from conceptualizing user interfaces to architecting robust backend systems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or solving algorithmic challenges to sharpen my problem-solving skills.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-2xl text-center">
                <Code size={32} className="text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Clean Code</h3>
                <p className="text-sm text-gray-600">Writing maintainable and efficient code</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl text-center">
                <Globe size={32} className="text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Web Development</h3>
                <p className="text-sm text-gray-600">Building responsive web applications</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-2xl text-center">
                <Database size={32} className="text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Database Design</h3>
                <p className="text-sm text-gray-600">Designing efficient data structures</p>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-2xl text-center">
                <Star size={32} className="text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Problem Solving</h3>
                <p className="text-sm text-gray-600">Tackling complex challenges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Languages & Frameworks */}
            <div className="bg-white/70 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Languages & Frameworks</h3>
              </div>
              <div className="space-y-3">
                {['Java', 'JavaScript', 'HTML5', 'CSS3', 'React.js', 'Node.js', 'SQL'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Concepts */}
            <div className="bg-white/70 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Core Concepts</h3>
              </div>
              <div className="space-y-3">
                {['Object-Oriented Programming', 'Data Structures & Algorithms', 'Database Management', 'Computer Networks', 'Performance Optimization'].map((concept) => (
                  <div key={concept} className="flex items-center justify-between">
                    <span className="text-gray-700">{concept}</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white/70 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitBranch size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Development Tools</h3>
              </div>
              <div className="space-y-3">
                {['VS Code', 'Google Colab', 'Cursor', 'Git', 'GitHub', 'MongoDB', 'Express.js'].map((tool) => (
                  <div key={tool} className="flex items-center justify-between">
                    <span className="text-gray-700">{tool}</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* GitVision Project */}
            <div className="bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <GitBranch size={24} className="text-white" />
                  </div>
                  <a
                    href="https://github.com/Kishore01752"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">GitVision</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive GitHub Profile Visualizer that provides real-time analytics and insights into GitHub repositories, contributions, and user statistics with interactive charts and visualizations.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'GitHub API', 'FusionCharts', 'HTML', 'CSS'].map((tech) => (
                      <span key={tech} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="https://github.com/Kishore01752"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>

            {/* NoteKeeper Project */}
            <div className="bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Database size={24} className="text-white" />
                  </div>
                  <a
                    href="https://github.com/Kishore01752"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-600 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">NoteKeeper</h3>
                <p className="text-gray-600 mb-4">
                  A full-stack personal notes application with complete CRUD functionality, featuring a clean interface for creating, organizing, and managing personal notes with persistent storage.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'HTML', 'CSS'].map((tech) => (
                      <span key={tech} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="https://github.com/Kishore01752"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/70 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href="mailto:kishorekishore09701@gmail.com" className="text-purple-600 hover:text-purple-700">
                      kishorekishore09701@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <a href="tel:+919500373687" className="text-blue-600 hover:text-blue-700">
                      +91 9500373687
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Download size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Resume</h3>
                    <button className="text-green-600 hover:text-green-700 inline-flex items-center">
                      Download Resume <Download size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Me Online</h3>
              
              <a
                href="https://linkedin.com/in/kishorer2004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-white/70 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                  <p className="text-gray-600">Professional network & experience</p>
                </div>
                <ExternalLink size={20} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>

              <a
                href="https://github.com/Kishore01752"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-white/70 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">GitHub</h4>
                  <p className="text-gray-600">Code repositories & projects</p>
                </div>
                <ExternalLink size={20} className="text-gray-400 group-hover:text-gray-700 transition-colors" />
              </a>

              <a
                href="https://leetcode.com/u/Kishore_R2004/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-white/70 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">LeetCode</h4>
                  <p className="text-gray-600">Coding challenges & problem solving</p>
                </div>
                <ExternalLink size={20} className="text-gray-400 group-hover:text-orange-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300">
            © 2024 Kishore R. Crafted with passion and attention to detail.
          </p>
          <p className="text-gray-400 mt-2">
            Aspiring Full-Stack Developer | Always Learning, Always Growing
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-40"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;