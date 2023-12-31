import React from 'react'

export default function Header() {
  return (
    <div className='sticky fixed top-0 w-full bg-inherit left-0 flex items-center justify-between p-4 border-b border-solid border-white'>
        <h1 className='text-3xl select-none sm:text-6xl'>TODO LIST</h1>
        <i className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl"></i>
    </div>
  )
}
