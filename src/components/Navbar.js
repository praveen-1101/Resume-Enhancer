import React from 'react';
import {Link } from 'react-router-dom';

const Navbar = () => 
{
    return (
        <nav className="bg-blue-600 text-white p-4">
            <ul className='flex justify-around'>
            <li><Link to="/" className='hover:underline'> Home </Link></li>
            <li><Link to="/upload" className='hover:underline'> Upload </Link></li>
            <li><Link to="/preview" className='hover:underline'> Preview </Link></li>
            <li><Link to="/download" className='hover:underline'> Download </Link></li>
          
            </ul>
        </nav>
    )
}

export default Navbar;