import React, { useState } from 'react';
import {  Link, NavLink } from 'react-router-dom'
import { BeakerIcon, BoltIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [Open, setOpen] = useState()
    
    return (
        <div className='bg-cyan-300 p-6'>
            <div className=' flex items-center justify-between'>
                <Link to={'/'} className='inline-flex'>
                    <BoltIcon className='w-10'></BoltIcon>
                    <span className='font-bold mx-2'>Next Page</span>
                </Link>
                
                <ul className='lg:flex  items-center space-x-4'>
                    <li>
                        <NavLink to={'/'}
                        className={({isActive})=>isActive? 'active': 'default'}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/school'}
                        className={({isActive})=>isActive? 'active': 'default'}
                        >
                            School
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/album'}
                        className={({isActive})=>isActive? 'active': 'default'}
                        >
                            Album
                        </NavLink>
                    </li>
                </ul>


            </div>
        </div>
    );
};

export default Header;

 {/* <nav className='space-x-4 bg-lime-300 p-6 rounded font-sans text-2xl font-bold text-right text-purple-400'>
//     <Link to={'/'}>Home</Link>
//     <Link to={'school'}>School</Link>
//     <Link to={'album'}>Album</Link>
//     <Link to={'/contact'}>Contact</Link>
//     <Link to={'/facilities'}>Facilities</Link>
//    </nav> */}