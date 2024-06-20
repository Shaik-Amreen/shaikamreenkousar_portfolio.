import React, { useRef, useState } from 'react'
import Logo from '../../assets/Logo.png'
import { useTheme } from '../Theme/ThemeContext'
import Colors from '../../Colors'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { motion } from 'framer-motion'
export default function Navbar() {



    const { theme, toggleTheme } = useTheme()
    const colors = Colors[theme]
    return (
        <motion.div >
            <header style={{ height: "70px" }} className='sticky top-0 px-3  flex flex-wrap items-center justify-between sm:px-0 md:px-20 '>
                <div className='flex items-center'>
                    <div >
                        <img className='w-20 h-20' style={{ zIndex: 10 }} src={Logo} />
                    </div>
                    <div ><span class="hidden sm:block ml-2 text-md lg:text-lg ">Shaik Amreen Kousar</span>
                    </div>
                </div>
                <nav className='flex'>
                    <a className="pl-4"><i className='bx bxl-instagram-alt text-xl'></i></a>
                    <a className="pl-4"><i className='bx bxl-linkedin-square text-xl' ></i></a>
                    <button className='pl-4'>
                        {theme === 'dark' ?
                            <i onClick={toggleTheme} className='bx bx-sun bx-tada text-xl' ></i> :
                            <i onClick={toggleTheme} className='bx bxs-moon bx-tada text-xl' ></i>}
                    </button>


                    <Menu >
                        <MenuButton>
                            <a className="pl-4"><i className='bx bx-menu text-xl' ></i></a>
                        </MenuButton>
                        <MenuItems anchor="bottom" className=' bg-white dark:border-gray-800 dark:bg-gray-900 border rounded shadow text-gray-900 dark:text-gray-100' style={{ backgroundColor: "red" }}>

                            <MenuItem >
                                <a href="#" class="block py-2 pr-4 pl-3  hover:bg-gray-50 dark:hover:bg-gray-800 ">About</a>
                            </MenuItem>

                            <MenuItem >
                                <a href="#" class="block py-2 pr-4 pl-3  hover:bg-gray-50 dark:hover:bg-gray-800 ">Tech Stack</a>
                            </MenuItem>

                            <MenuItem>
                                <a href="#" class="block py-2 pr-4 pl-3  hover:bg-gray-50 dark:hover:bg-gray-800 ">Work Experience</a>
                            </MenuItem>

                            <MenuItem >
                                <a href="#" class="block py-2 pr-4 pl-3  hover:bg-gray-50 dark:hover:bg-gray-800 ">Services</a>
                            </MenuItem>

                            <MenuItem>
                                <a href="#" class="block py-2 pr-4 pl-3   hover:bg-gray-50 dark:hover:bg-gray-800 ">Projects</a>
                            </MenuItem>

                            <MenuItem>
                                <a href="#" class="block py-2 pr-4 pl-3   hover:bg-gray-50 dark:hover:bg-gray-800 ">Certifications</a>
                            </MenuItem>


                            <MenuItem>
                                <a href="#" class="block py-2 pr-4 pl-3   hover:bg-gray-50 dark:hover:bg-gray-800 ">Contact</a>
                            </MenuItem>

                        </MenuItems>
                    </Menu>


                </nav>
            </header>
        </motion.div>
    )
}
