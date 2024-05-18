import React from 'react';
import './login.css';

const UserCard = ({ users }) => {
  return (
    <div className="user-card-container"> 
      {users.map((user, index) => (
        
        <div className="user-card" key={index}>
         
          <h1>Welcome {user.name}</h1>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <div className="address">
            <h4>Address</h4>
            <p>Street: {user.address.street}</p>
            <p>Suite: {user.address.suite}</p>
            <p>City: {user.address.city}</p>
            <p>Zipcode: {user.address.zipcode}</p>
          </div>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <div className="company">
            <h4>Company</h4>
            <p>Name: {user.company.name}</p>
            <p>Catch Phrase: {user.company.catchPhrase}</p>
            <p>BS: {user.company.bs}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
