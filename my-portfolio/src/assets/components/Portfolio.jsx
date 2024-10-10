import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const projects = [
    {
      title: 'Project 1',
      description: 'A full-stack web application built with React and Node.js',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: 'https://project1.com',
      github: 'https://github.com/yourusername/project1',
      image: 'https://via.placeholder.com/300x200' // Sample image
    },
    {
      title: 'Project 2',
      description: 'Mobile-first responsive website for a local business',
      techStack: ['React', 'Tailwind CSS', 'Firebase'],
      link: 'https://project2.com',
      github: 'https://github.com/yourusername/project2',
      image: 'https://via.placeholder.com/300x200' // Sample image
    }
  ];

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python',
    'SQL', 'Git', 'Docker', 'AWS'
  ];

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (mocked)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">John Doe</h1>
        <h2 className="text-2xl text-gray-600 mb-6">Full Stack Software Engineer</h2>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <Card className="transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              I'm a passionate software engineer with 5 years of experience building web applications.
              I love solving complex problems and creating user-friendly experiences.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <Card className="transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm transition-transform transform hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="transition-transform transform hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`} 
                  className="w-full h-auto rounded mb-4"
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-200 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.link} className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center text-gray-600 hover:text-gray-800">
                    <Github className="w-4 h-4 mr-1" /> GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
        <Card className="transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                />
              </div>
              <button 
                type="submit" 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Portfolio;