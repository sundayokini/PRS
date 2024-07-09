'use client'
import navLinks from '@/app/lib/navlinks'
import Link from 'next/link'
import React, { useState } from 'react'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
{/* NavBar */}

        <nav className="z-50 sticky top-0  left-0 flex  justify-between justify-items-center px-6 py-4 w-full">
            {/* logo */}
            <h1 className="text-yellow-700 font-extrabold text-6xl">PRS</h1>
            
            {/* Menu */}
            <div className="flex flex-col gap-1 cursor-pointer justify-center items-center ease-in-out duration-150" onClick={handleOpen}>
            
            <div className={`bg-cyan-500  rounded-sm w-6 h-1 border-white ${isOpen && 'rotate-45'} origin-left `}></div>
            <div className={`bg-cyan-500  rounded-sm w-6 h-1 border-white ${isOpen && 'opacity-0'}`}></div>
            <div className={`bg-cyan-500  rounded-sm w-6 h-1 border-white ${isOpen && '-rotate-45'} origin-left `}></div>
            
            </div>
            
        </nav>
        
        {isOpen && 
        (<ul className='sm:hidden absolute h-[calc(100vh-96px)] w-screen flex flex-col gap-4 justify-start items-center left-0 top-24 bg-gray-100'>

        {navLinks.map((navLink, index) => {
            return (
                
                    <li key={index} className='py-8' onClick={handleOpen} >
                        <Link className='text-black' href={navLink.url}>{navLink.name}</Link>
                    </li>
            )
        }
        )}
        </ul>

        )
        
        }
       
    </div>
  )
}

export default NavBar