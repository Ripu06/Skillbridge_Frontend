import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to SkillBridge</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with peers to share micro-skills, learn new abilities, and grow together 
            in a community-driven platform.
          </p>
          
          <div className="flex justify-center gap-4 mb-16">
            <Link
              to="/register"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-3">Share Skills</h3>
            <p>Teach others what you know and build your reputation as an expert.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-3">Learn New Things</h3>
            <p>Discover micro-skills from peers who are passionate about sharing knowledge.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-3">Build Community</h3>
            <p>Connect with like-minded individuals and grow your professional network.</p>
          </div>
        </div>
      </div>
    </div>
  );
}