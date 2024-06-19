import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles';
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="" className="object-contain w-9 h-9" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            AMBEU 
            <span className="hidden sm:block">
              | Aïba Africa son
            </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title
                ? "text-green-700"
                : "text-secondary"
              }hover:text-green-700 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div 
          className="sm:hidden flex flex-1 justify-end items-center"
          onClick={() => setToggle(!toggle)}
          >

        </div>
      </div>
    </nav>
  )
}

export default Navbar