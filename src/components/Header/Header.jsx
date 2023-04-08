import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <nav className='space-x-4 bg-lime-300 p-6 rounded font-sans text-2xl font-bold text-right text-purple-400'>
        <Link to={'/'}>Home</Link>
        <Link to={'school'}>School</Link>
        <Link to={'album'}>Album</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/facilities'}>Facilities</Link>
       </nav>
    );
};

export default Header;