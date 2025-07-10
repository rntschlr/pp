import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  codeUrl: string;
}

function ProjectCard({ title, description, tags, imageUrl, demoUrl, codeUrl }: ProjectProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-700 transition-colors flex items-center"
          >
            <ExternalLink size={16} className="mr-1" />
            Live Demo
          </a>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
          >
            <Github size={16} className="mr-1" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Weather Dashboard",
      description: "A responsive weather application built with React and OpenWeatherMap API featuring real-time data and 5-day forecasts.",
      tags: ["React", "Node.js", "API"],
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      demoUrl: "https://example.com",
      codeUrl: "https://github.com"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, shopping cart, and payment integration.",
      tags: ["MERN", "Redux", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      demoUrl: "https://example.com",
      codeUrl: "https://github.com"
    },
    {
      title: "Task Manager",
      description: "A collaborative task management tool with real-time updates, team collaboration, and progress tracking.",
      tags: ["React", "Socket.io", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      demoUrl: "https://example.com",
      codeUrl: "https://github.com"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis with dynamic charts, filtering, and real-time updates.",
      tags: ["D3.js", "React", "Python"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      demoUrl: "https://example.com",
      codeUrl: "https://github.com"
    },
    {
      title: "Real-time Chat App",
      description: "Mobile-first chat application with real-time messaging, file sharing, and group conversations.",
      tags: ["React Native", "Firebase", "Socket.io"],
      imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      demoUrl: "https://example.com",
      codeUrl: "https://github.com"
    },
    {
      title: "ML Prediction Model",
      description: "Machine learning model for predictive analysis with data preprocessing, training, and visualization.",
      tags: ["Python", "TensorFlow", "Pandas"],
      imageUrl: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      demoUrl: "https://example.com",
      codeUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            <Github className="mr-2" size={20} />
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
