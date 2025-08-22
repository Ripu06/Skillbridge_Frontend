import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ViewRequests from './pages/ViewRequests';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';

// DEBUG: Check environment variables
console.log('Environment variables:', import.meta.env)
console.log('API URL:', import.meta.env.VITE_API_URL)

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/requests" element={<PrivateRoute><ViewRequests /></PrivateRoute>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}