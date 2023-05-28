import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'


const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-red-600 fixed shadow-black/60 shadow-md drop-shadow-md">
      <div>
        <h1 className="font-signature font-extrabold">SA</h1>
      </div>
    </div>
  )
}

export default NavBar