import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <div className='w-full grid place-items-center gap-10'>
        <ul className='hidden lg:flex my-16 md:flex flex-row justify-evenly gap-10'>
            <Link to={'/'} className='text-4xl my-7 text-center transition ease-in-out hover:text-purple-700 hover:scale-105 cursor-pointer'>Home</Link>
            <Link to={'/about'} className='text-4xl my-7 text-center transition ease-in-out hover:text-purple-700 hover:scale-105 cursor-pointer'>About</Link>
            <Link to={'/product'} className='text-4xl my-7 text-center transition ease-in-out hover:text-purple-700 hover:scale-105 cursor-pointer'>Product</Link>
            <Link to={'/solution'} className='text-4xl my-7 text-center transition ease-in-out hover:text-purple-700  hover:scale-105 cursor-pointer'>Solution</Link>
            <Link to={'/team'} className='text-4xl my-7 text-center transition ease-in-out hover:text-purple-700 hover:scale-105 cursor-pointer'>Team</Link>
            <Link to={'/contact'} className='text-4xl my-7 text-center transition ease-in-out hover:text-purple-700 hover:scale-105 cursor-pointer'>Contact</Link>
        </ul>
    </div>
  )
}

export default NavLinks