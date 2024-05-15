// HomePage.js
// import {getPosts} from "../_actions/postAction"
import React from "react";
import Link from "next/link";
import Layout from "./components/Layout";

import "./Navbar.css";

export default async function Navbar(){
 
  
  return (
    <Layout>
      <>
       
        <nav className="navbar">
          <div className="logo">
            <img src="https://1.bp.blogspot.com/-tFQofsle6Zg/Xnt_ewF2xaI/AAAAAAAA19M/XYhTZu7L0PwshBTQqqnnNwCMUKovE3d5gCLcBGAsYHQ/s1600/sve.jpg" alt="College Logo" />
          </div>
         
          <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="dropdown">
          <span className="about">About</span>
          <div className="dropdown-content">
            <Link href="/about/aboutcollege">History</Link>
            <Link href="/about/accreditations">Accreditations</Link>
            <Link href="/about/governance">Governance</Link>
            <Link href="/about/vision">Vision</Link>
           
          </div>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li className="dropdown">
          <span className="departments">Departments</span>
          <div className="dropdown-content">
            <Link href="/departments/CSE">Computer Science And Engineering(CSE)</Link>
            <Link href="/departments/IT">Information Technology(IT)</Link>
            <Link href="/departments/CSE(AIandML)">CSE(Machine Learning)</Link>
            <Link href="/departments/CSE(AIandDS)">CSE(Data Science)</Link>
            <Link href="/departments/MECHANICAL">Mechanical Engineering(ME)</Link>
            <Link href="/departments/ECE">Electrical,Communication and Electronics Engineering(ECE)</Link>
            <Link href="/departments/EEE">Electrical and Electronics Engineering(EEE)</Link>
            <Link href="/departments/CIVIL">Civil Engineering</Link>
            <Link href="/departments/CSE(Cyber)">CSE(Cyber Security)</Link>
           
          </div>
        </li>
      </ul>
        
        </nav>
       
      </>
    </Layout>
    
  );
};