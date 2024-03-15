import React, { useEffect } from 'react';

function Login() {
    useEffect(() => {
        document.title = "Login";
    }, []);
    return (
        <div className="bg-gradient-to-b from-[#f7cac9] to-[#91a8d0] lg:h-dvh flex justify-center">
            <div className=''>
                <div className="w-[500px] p-5  rounded-[10px] backdrop-blur-sm">
                    <div className="my-10">
                        <img src="" alt="" />
                    </div>
                    <h1 className='text-center text-[30px] text-white font-bold'>Login</h1>
                    <div className="mt-5">
                        <div class="relative mb-5">
                            <input type="email" id='username'
                                className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 
                                text-md focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 focus:outline-none
                                disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-white dark:focus:ring-gray-600 dark:focus:border-b-gray-600" 
                                placeholder="Username" />
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                <svg className="flex-shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/></svg>
                            </div>
                        </div>
                        <div className="relative mb-5">
                            <input type="password" id='password'
                                className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-md 
                                focus:border-t-transparent focus:border-x-transparent focus:border-b-white focus:ring-0 focus:outline-none
                                disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-white dark:focus:border-b-gray-600" 
                                placeholder="Password" />
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                <svg className="flex-shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/>
                                <circle cx="16.5" cy="7.5" r=".5"/></svg>
                            </div>
                        </div>
                    </div>

                   
                    <div className="mt-10">
                        <button className='px-[20px] py-1.5 block w-full bg-gray-200 rounded-[6px] font-bold hover:bg-gray-300 hover:text-white'>LOGIN</button>
                    </div>
                    <div className="my-10">
                        <p className='text-center text-white'>Yon haven't any account? <a href="/register" className='underline text-blue-700'>Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login