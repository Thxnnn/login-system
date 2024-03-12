import React, { useEffect } from 'react';

function Login() {
    useEffect(() => {
        document.title = "Login";
    }, []);
    return (
        <div className="bg-gradient-to-b from-[#142844] to-[#303D61] h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <div className=''>
                <div className="w-[500px] p-5  rounded-[10px] backdrop-blur-sm">
                    <div className="my-10">
                        <img src="" alt="" />
                    </div>
                    <h1 className='text-center text-[30px] text-white font-bold'>Login</h1>
                    <div className="mt-5">
                        <div className="mb-10">
                            <label className='text-white'>Username</label>
                            <input type="text"
                                className='w-full border-1 rounded-md focus:outline-none py-1.5 px-3'
                            />
                        </div>

                        <div className="mb-10">
                            <label className='text-white'>Password</label>
                            <input type="password"
                                className='w-full border-1 rounded-md focus:outline-none py-1.5 px-3'
                            />
                        </div>
                        <div class="relative h-11 w-full min-w-[200px]">
                            <input placeholder="Username"
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label
                                class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] 
                                font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 
                                after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm 
                                peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight 
                                peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent 
                                peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                            >
                                Username
                            </label>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button className='border border-1 px-[20px] py-[4px] block w-full bg-white rounded-[6px]'>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login