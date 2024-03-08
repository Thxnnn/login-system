import React from 'react'

function Login() {
    return (
        <div className='container mx-auto'>

            <div className="w-[500px] p-5 border border-1 rounded-[10px] backdrop-blur-sm bg-white/30">
                <h1 className='text-center text-[30px] text-white font-bold'>Login</h1>
                <div className="mt-5">
                    <div className="mb-3">
                        <label htmlFor="">Username</label>
                        <input type="text"
                            className='w-full border-1 rounded-md focus:outline-none py-1.5 px-3'
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login