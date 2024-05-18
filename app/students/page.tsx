
'use client'
// pages/index.js
import { useEffect, useState } from 'react';
import { UserFormData } from '../../types'; 
import './students.css'

const HomePage = () => {
  const [users, setUsers] = useState<UserFormData[]>([]); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/getdata');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: UserFormData[] = await response.json(); // Specify the type for the data variable
        setUsers(data);
      } catch (error) {
        console.error('Fetch error:', error);
        setError('Error fetching users');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
     <center> <h1>Student Details</h1></center>
      {error && <p>{error}</p>}
      <div className="user-container">
        {users.map((user) => ( 
          <div className="user-card" key={user._id}>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone Number:</strong> {user.phonenumber}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Course:</strong> {user.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
