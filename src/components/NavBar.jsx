import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'


const NavBar = () => {

    const links = [
      {
        id: 1,
        link: "home",
      },
      {
        id: 2,
        link: "about",
      },
      {
        id: 3,
        link: "Portfolio",
      },
      {
        id: 4,
        link: "experience",
      },
      {
        id: 5,
        link: "contact",
      },
    ]


  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-red-600 fixed shadow-black/60 shadow-md drop-shadow-md">
      <div>
        <h1 className="text-3xl font-signature font-extrabold ml-2">SA</h1>
      </div>
      <ul className=" hidden md:flex">

        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200">{link}</li>
          
        ))}

      </ul>

      <div className="cursor-pointer">
        <FaBars size={30} />
      </div>

    </div>
  )
}

export default NavBar