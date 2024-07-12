'use client'
import navLinks from '@/app/lib/navlinks'
import Link from 'next/link'
import React, { useState } from 'react'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
{/* NavBar */}

        <nav className="z-50 sticky top-0  left-0 flex  justify-between justify-items-center items-center px-6 py-4 md:px-8 lg:px-16 w-full">
            {/* logo */}
            <Link href='/'><h1 className="text-yellow-700 font-extrabold text-6xl">PRS</h1></Link>

            {/* Non-mobile NavBar */}
            <div className="relative sm:block hidden">
              <Link href="/" className="text-gray-200 hover:text-gray-900 hover:bg-white mr-4">Home</Link>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-200 hover:text-gray-900 focus:outline-none"
              >
                Employees
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                  <Link href="/directory" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>Overview</Link>
                  <Link href="/attendance-leave" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>Attendance</Link>
                  <Link href="/performance" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>Performance</Link>
                  <Link href="/training" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>Training</Link>
                </div>
              )}
            </div>

            
            {/* Mobile Menu */}
            <div className="sm:hidden flex flex-col gap-1 cursor-pointer justify-center items-center ease-in-out duration-150" onClick={handleOpen}>
            
            <div className={`bg-cyan-500  rounded-sm w-6 h-1 border-white ${isOpen && 'rotate-45'} origin-left `}></div>
            <div className={`bg-cyan-500  rounded-sm w-6 h-1 border-white ${isOpen && 'opacity-0'}`}></div>
            <div className={`bg-cyan-500  rounded-sm w-6 h-1 border-white ${isOpen && '-rotate-45'} origin-left `}></div>
            
            </div>
            
        </nav>
        
        {isOpen && 
        (<ul className='sm:hidden absolute h-[calc(100vh-96px)] w-screen 
        flex flex-wrap gap-2 justify-between items-start 
        left-0 top-24 bg-gray-100 px-4 z-40'>

        {navLinks.map((navLink, index) => {
            return (
                
                    <li key={index} className='ease-in-out duration-150' onClick={handleOpen} >
                        <Link className='text-black hover:text-green-500' href={navLink.url}>{navLink.name}</Link>
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