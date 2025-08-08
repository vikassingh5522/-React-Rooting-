import React, { useEffect, useState } from 'react';
import { 
  FiGithub, 
  FiStar, 
  FiGitBranch, 
  FiCode
} from 'react-icons/fi';
import { FaRegFolder } from 'react-icons/fa';

export default function GithubPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data from GitHub API
  useEffect(() => {
    fetch("https://api.github.com/users/vikassingh5522")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      });
  }, []);

  const repositories = [
    {
      name: 'portfolio-website',
      description: 'My personal portfolio website built with React and Tailwind CSS',
      language: 'JavaScript',
      stars: 24,
      forks: 5,
      updated: 'Updated 3 days ago',
    },
    {
      name: 'ecommerce-app',
      description: 'Full-stack ecommerce application with React and Node.js',
      language: 'TypeScript',
      stars: 42,
      forks: 12,
      updated: 'Updated 1 week ago',
    },
    {
      name: 'weather-dashboard',
      description: 'Real-time weather dashboard using OpenWeather API',
      language: 'JavaScript',
      stars: 15,
      forks: 3,
      updated: 'Updated 2 weeks ago',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* GitHub-style Navigation */}
      <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <FiGithub className="h-8 w-8" />
          <div className="relative">
            <input
              type="text"
              placeholder="Search or jump to..."
              className="bg-gray-800 rounded-md px-3 py-1 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white font-semibold">VS</span>
          </div>
        </div>
      </nav>

      {/* Profile Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <div className="h-32 w-32 rounded-full border border-gray-300 overflow-hidden">
              <img 
                src={data?.avatar_url || "https://via.placeholder.com/150"} 
                alt="Profile" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {loading ? "Loading..." : data?.name || "No Name Found"}
            </h1>
            <p className="text-gray-600 mb-2">{data?.bio || "Frontend Developer | React Enthusiast"}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
              <span>{data?.location || "Location not available"}</span>
              <span>{data?.email || "No public email"}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm">
                <span className="font-semibold">{data?.followers || 0}</span> followers · 
                <span className="font-semibold ml-1">{data?.following || 0}</span> following
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/4 pr-0 md:pr-8 mb-6 md:mb-0">
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
              <h2 className="font-semibold text-lg mb-3">Repositories</h2>
              <div className="space-y-2">
                {repositories.map((repo, index) => (
                  <a key={index} href="#" className="block text-sm text-blue-600 hover:underline">
                    {repo.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Main Repositories List */}
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg">Popular repositories</h2>
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-3 rounded-md text-sm flex items-center">
                  <FaRegFolder className="mr-1" /> New
                </button>
              </div>

              <div className="space-y-4">
                {repositories.map((repo, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-blue-600 font-semibold hover:underline">
                          <a href="#">{repo.name}</a>
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">{repo.description}</p>
                      </div>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3 rounded-md text-sm flex items-center">
                        <FiStar className="mr-1" /> Star
                      </button>
                    </div>
                    <div className="flex items-center mt-2 text-xs text-gray-600 space-x-4">
                      <span className="flex items-center">
                        <span className={`h-3 w-3 rounded-full mr-1 ${
                          repo.language === 'JavaScript' ? 'bg-yellow-400' : 
                          repo.language === 'TypeScript' ? 'bg-blue-600' : 'bg-gray-400'
                        }`}></span>
                        {repo.language}
                      </span>
                      <span className="flex items-center">
                        <FiStar className="mr-1" /> {repo.stars}
                      </span>
                      <span className="flex items-center">
                        <FiGitBranch className="mr-1" /> {repo.forks}
                      </span>
                      <span>{repo.updated}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h2 className="font-semibold text-lg mb-4">Recent activity</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <FiCode className="text-gray-500" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-800">
                          <span className="font-semibold">{data?.login || "User"}</span> pushed to 
                          <span className="text-blue-600"> main </span> in 
                          <span className="text-blue-600"> portfolio-website</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Updated README.md · 2 hours ago</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
