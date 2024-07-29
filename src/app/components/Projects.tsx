"use client";

import { useState, useEffect } from 'react';
import { FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3, FaFileCode } from 'react-icons/fa';

interface Repo {
  id: number;
  name: string;
  full_name: string;
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
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Usar el token de las variables de entorno
        const orgRepos1 = await fetchRepos('https://api.github.com/orgs/FullStack-Elite-Bootcamp-IV/repos', token);
        const orgRepos2 = await fetchRepos('https://api.github.com/orgs/Proyecto-Cinema/repos', token);
        const personalRepos = await fetchRepos('https://api.github.com/users/Santiago3102/repos', token);

        if (Array.isArray(orgRepos1) && Array.isArray(orgRepos2) && Array.isArray(personalRepos)) {
          const allRepos = [...orgRepos1, ...orgRepos2, ...personalRepos];
          const reposWithImages = await Promise.all(allRepos.map(async (repo) => {
            const imageUrl = await fetchRepoImage(repo, token);
            return { ...repo, homepage: imageUrl };
          }));
          setProjects(reposWithImages);
        } else {
          console.error('Error: One or more of the fetched data are not arrays.');
        }
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchRepos = async (url: string, token?: string): Promise<Repo[]> => {
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': token ? `token ${token}` : ''
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error fetching repos:', error);
      return [];
    }
  };

  const fetchRepoImage = async (repo: Repo, token?: string): Promise<string | undefined> => {
    try {
      const response = await fetch(`https://api.github.com/repos/${repo.full_name}/readme`, {
        headers: { 
          'Authorization': token ? `token ${token}` : '',
          'Accept': 'application/vnd.github.v3.raw' 
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const readmeContent = await response.text();
      const imageUrlMatch = readmeContent.match(/!\[.*?\]\((.*?)\)/);
      return imageUrlMatch ? imageUrlMatch[1] : undefined;
    } catch (error) {
      console.error('Error fetching repo image:', error);
      return undefined;
    }
  };

  if (loading) return <p className="text-center py-4 text-gray-300">Loading...</p>;

  return (
    <section id="projects" className="sm:pt-52 text-emerald-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-zinc-800 rounded-lg border border-emerald-600 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col"
            >
              <div className="relative flex-shrink-0 overflow-hidden rounded-t-lg">
                {project.homepage ? (
                  <img
                    src={project.homepage}
                    alt={project.name}
                    className="w-full h-48 object-cover transform scale-105 transition-transform duration-300 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-48 bg-zinc-700 rounded-t-lg"></div>
                )}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-emerald-300">{project.name}</h3>
                <p className="text-white flex-grow overflow-y-auto mb-4">
                  {project.description || 'No description available'}
                </p>
              </div>
              <div className="p-4 flex justify-center items-center bg-zinc-700 rounded-b-lg">
                {project.language && languageIcons[project.language] ? (
                  languageIcons[project.language]
                ) : (
                  <FaFileCode className="text-gray-500" /> 
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
