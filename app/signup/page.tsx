'use client'
import './signup.css'

import { useState, ChangeEvent, FormEvent } from 'react';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');
  const [course, setCourse] = useState('');

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    try {
      const response = await fetch('api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,email,phonenumber,address,course
        })
      });
      if (response.ok) {
        alert('Signup successful');
        
      } else {
        alert('Error during signup');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Error during signup');
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleChange(setName)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleChange(setEmail)} required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={phonenumber} onChange={handleChange(setPhonenumber)} required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={address} onChange={handleChange(setAddress)} required />
        </div>
        <div>
          <label htmlFor="course">Course:</label>
          <input type="text" id="course" value={course} onChange={handleChange(setCourse)} required />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
