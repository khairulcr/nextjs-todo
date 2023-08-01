import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    function submitHandler() {
        if (!email || !password) {
            setError('Please enter email and password')
            return
        }
    }


  return (
    <div className='flex-1 flex flex-col justify-center items-center gap-2 sm:gap-4'>
        <h1 className='font-extrabold select-none text-2xl sm:text-4xl uppercase'>{isLoggingIn ? 'Login' : 'Register'}</h1>

        {error && <div className='w-full max-w-[40ch] border-rose-400 text-rose-400 border border solid text-center py-2'> {error} </div>}

        <input value={email} onChange={(e) => setEmail (e.target.value)} type='text' placeholder='Email Address' className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]'/>

        <input value={password} onChange={(e) => setPassword (e.target.value)} type='password' placeholder='Password' className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]'/>
        
        <button onClick={submitHandler} className='w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-teal-400 after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full hover:text-slate-900 after:duration-300'>
             <h2 className='relative z-20'>
                    SUBMIT
                </h2>
            </button>
            <h2 className='duration-300 hover:opacity-40 cursor-pointer w-full max-w-[40ch] text-right' onClick={() => setIsLoggingIn (!isLoggingIn)}> { isLoggingIn ? 'Login' : 'Register' } </h2>
    </div>
  )
}
