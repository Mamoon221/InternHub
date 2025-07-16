import React from 'react'

function Login() {
    return (
        <>
        <div className=' h-[100vh] flex justify-center items-center'>
            <form action=""  className='border border-black flex-col flex p-[20px]'>
                <div>
                    <img src="" alt="" />
                <h1 className='text-center'>InternHub</h1>

                </div>
                <label htmlFor="email">Email</label>
                <input className='border p-2' type="email" id='email' placeholder='Enter Email' />
                 <label htmlFor="password">Password</label>
                <input className='border p-2' type="password" id='password' placeholder='Enter Password' />
                <button  className='border p-2'>Login</button>
            </form>
        </div>

        </>
    )
}

export default Login
