import { useEffect, useState } from 'react';
import API from '../api';
import Navbar from '../components/Navbar';

export default function ViewRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await API.get('/requests');
        setRequests(res.data);
      } catch (err) {
        alert('Error fetching requests');
      }
    };
    fetchRequests();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">All Requests</h2>
        <ul className="space-y-2">
          {requests.map((req) => (
            <li key={req._id} className="p-4 border rounded">
              <div><strong>Category:</strong> {req.category}</div>
              <div><strong>Description:</strong> {req.description}</div>
              <div><strong>Status:</strong> {req.status}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}