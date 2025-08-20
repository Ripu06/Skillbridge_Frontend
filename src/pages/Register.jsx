import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', formData);
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Register</h2>
        <input className="border p-2 w-full mb-4" name="name" placeholder="Name" onChange={handleChange} />
        <input className="border p-2 w-full mb-4" name="email" placeholder="Email" onChange={handleChange} />
        <input className="border p-2 w-full mb-4" name="password" placeholder="Password" type="password" onChange={handleChange} />
        <button className="bg-green-500 text-white px-4 py-2" type="submit">Register</button>
      </form>
    </div>
  );
}