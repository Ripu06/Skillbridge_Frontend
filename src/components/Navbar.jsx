import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-2xl font-bold">SkillBridge</Link>
        <div className="space-x-6">
          <Link to="/dashboard" className="hover:text-indigo-200 transition-colors">Dashboard</Link>
          <Link to="/requests" className="hover:text-indigo-200 transition-colors">View Requests</Link>
          <button 
            onClick={handleLogout}
            className="hover:text-indigo-200 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}