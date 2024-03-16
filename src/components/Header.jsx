import React from 'react'
import Button from './Button'

const links = [
    {name:'About', url:'#about'},
    {name:'Gallery', url:'#gallery'},
    {name:'Contact', url:'#contact'},
]
const Header = () => {
  return (
    <header className='w-full z-10 absolute border-slate-100 text-slate-900 flex flex-1 justify-evenly items-center  mx-auto dark:text-white top-0'>
      <div className='border-slate-300 rounded-3xl flex flex-auto items-center justify-center w-1'>
        <h1 className='text-3xl'>
          <a href="#home">
            SAMPLE WEBSITE
          </a>
        </h1>
      </div>
      <nav className=' border-white flex-1 flex justify-center items-center'>
          {links.map(link => {
            return (
              <a href={link.url} className='mr-20 p-2 text-xl hover:text-slate-500 hover:bg-white hover:rounded-lg' key={link.url}>
                {link.name}
              </a>
            )})}
      </nav>
    </header>
  )
}

export default Header
