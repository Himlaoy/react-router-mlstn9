import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Bars3BottomRightIcon, BeakerIcon, BoltIcon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [OpenMenu, setOpenMenu] = useState(false)

    return (
        <div className='bg-cyan-300 p-6'>
            <div className=' relative flex items-center justify-between'>
                <Link to={'/'} className='inline-flex'>
                    <BoltIcon className='w-10'></BoltIcon>
                    <span className='font-bold mx-2'>Next Page</span>
                </Link>

                <ul className='lg:flex hidden items-center space-x-4'>
                    <li>
                        <NavLink to={'/'}
                            className={({ isActive }) => isActive ? 'active' : 'default'}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/school'}
                            className={({ isActive }) => isActive ? 'active' : 'default'}
                        >
                            School
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/album'}
                            className={({ isActive }) => isActive ? 'active' : 'default'}
                        >
                            Album
                        </NavLink>
                    </li>
                </ul>
                <div className='lg:hidden'>
                    <button
                        aria-label='Open'
                        title='Open'
                        onClick={() => setOpenMenu(!OpenMenu)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600'></Bars3BottomRightIcon>
                    </button>
                    {OpenMenu && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='bg-fuchsia-50 border shadow-sm p-4'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <Link to={'/'} className='inline-flex'>
                                            <BoltIcon className='w-10'></BoltIcon>
                                            <span className='font-bold mx-2'>Next Page</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => setOpenMenu(!OpenMenu)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600'></XMarkIcon>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to={'/'} className='default'>Home</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link to={'school'} className='default'>School</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link to={'album'} className='default'>Album</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}

                </div>


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