import React from 'react'

export default function Login() {
  return (
    <div className='flex-1 flex flex-col justify-center items-center gap-2 sm:gap-4'>
        <h1 className='font-extrabold select-none text-2xl sm:text-4xl'>LOGIN</h1>
        <input type='text' placeholder='Email Address' className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]'/>
        <input type='text' placeholder='Password' className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]'/>
        
        <button className='text-bold w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative hover:border hover:border-black hover:border-solid hover:bg-white hover:duration-300 hover:text-slate-900'>
            SUBMIT</button>

    </div>
  )
}
