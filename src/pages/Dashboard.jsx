import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import API from '../api';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get('/auth/me');
        setUser(res.data);
      } catch (err) {
        console.error('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome back{user?.name ? `, ${user.name}` : ''}!
            </h1>
            <p className="text-gray-600">
              Ready to share your skills or learn something new today?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Skills</h2>
              <p className="text-gray-600 mb-4">Share what you know with others</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Add Skill
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Skill Requests</h2>
              <p className="text-gray-600 mb-4">Find skills you want to learn</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Browse Requests
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}