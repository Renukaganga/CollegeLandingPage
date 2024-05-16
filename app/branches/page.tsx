
'use client'
import React from 'react';
import Link from 'next/link';
import './branches.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link href="/branches/bhimavaram">
      Bhimavaram
      </Link><br></br>
      <br></br>
      <Link href="/branches/hyderabad">
        Hyderabad
      </Link>
     
    </div>
  );
};

export default Sidebar;
