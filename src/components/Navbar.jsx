import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='flex flex-row justify-around items-center bg-purple-500 h-[8vh] w-[80vw] ml-[10%] mt-1 text-white font-sans'>
        <h1 className=' text-lg font-bold text-white'>&lt;The<span className=' text-lg font-bold text-green-500'>Todo/&gt;</span></h1>
        <ul className='flex flex-row gap-12'>
            <a href='./App.jsx'><li className='cursor-pointer text-sm' >Refresh</li></a>
            <li className='cursor-pointer text-sm'>My Tasks</li>
           <a href='https://www.instagram.com/the_b1nod/' target='_blank'> <li className='cursor-pointer text-sm'>Support Creator</li></a>
        </ul>


    </div>
  )
}

export default Navbar