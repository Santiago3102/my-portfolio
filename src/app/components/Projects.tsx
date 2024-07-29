"use client";

import { useState, useEffect } from 'react';
import { FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3, FaFileCode } from 'react-icons/fa'; // Asegúrate de tener todos los íconos necesarios

interface Repo {
  id: number;
  name: string;
  description?: string;
  html_url: string;
  language?: string;
  homepage?: string;
}

const languageIcons: { [key: string]: JSX.Element } = {
  JavaScript: <FaJs />,
  TypeScript: <FaJs />, 
  Python: <FaPython />,
  Java: <FaJava />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3 />,
  React: <FaReact />,
  Node: <FaNodeJs />,
  C: <FaFileCode />
};

const Projects = () => {
  const [projects, setProjects] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orgRepos = await fetchRepos('https://api.github.com/orgs/YOUR_ORG_NAME/repos');
        const personalRepos = await fetchRepos('https://api.github.com/users/Santiago3102/repos');

        if (Array.isArray(orgRepos) && Array.isArray(personalRepos)) {
          setProjects([...orgRepos, ...personalRepos]);
        } else {
          console.error('Error: One or both of the fetched data are not arrays.');
        }
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchRepos = async (url: string): Promise<Repo[]> => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error fetching repos:', error);
      return [];
    }
  };

  if (loading) return <p className="text-center py-4 text-gray-300">Loading...</p>;

  return (
    <section id="projects" className="py-40 text-emerald-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.html_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block p-6 bg-zinc-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {project.homepage && (
                <img
                  src={project.homepage}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              )}
              <div className="relative mt-4">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-white mb-4">{project.description || 'No description available'}</p>
                <div className="flex gap-2 mb-4">
                  {project.language && languageIcons[project.language]}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
