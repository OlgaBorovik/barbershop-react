import React from 'react'
import { navLinks } from 'constans'
import {Button} from "./Button"

const Header = () => {
  return (
    <div className="container mx-auto bg-slate-700 flex h-[100px] p-[40px] justify-between">
      <nav className='flex pl-[40px]'>
        <ul className='flex space-x-10 first:ml-0'>
          {navLinks.map((link) => (
              <li key={link.id} className="">
                <a href={`#${link.id}`} className="text-white text-xs font-semibold leading-4 tracking-widest hover:text-accent ">{link.title}</a>
              </li>
            ))}
        </ul>
      </nav>
      <div className='flex items-center space-10 justify-between'>
        <a href="tel:+380441111111" className='block mr-10 text-white text-xs font-semibold leading-4 tracking-widest hover:text-accent '>
          +38 044 111 11 11
        </a>
        <Button className='mr-10'>
          Онлайн-запись
        </Button>
      </div>
    </div>
  )
}

export default Header