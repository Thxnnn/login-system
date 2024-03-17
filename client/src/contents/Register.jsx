import React, { useEffect, useState } from 'react';

function Register() {

    useEffect(() => {
        document.title = "Signup";
    }, []);


    const [signupForm, setSignupFrom] = useState({
        username:"",
        password:"",
        confirmPassword:""
    })


    const handleChange = (e) => {
        setSignupFrom({
            ...signupForm,
            [e.target.name]: e.target.value,
        });
        
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password,confirmPassword } = signupForm;
        console.log('Submitted data:', username, password,confirmPassword);
        
        if (password == confirmPassword) {
            console.log("Passwords match");
            const userdata = {
                'username': username,
                'password': password,
                'confirmPassword': confirmPassword
            }
    
            console.log(userdata)
            
            fetch('http://localhost:5000/signup', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userdata)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else {
            console.log("Passwords don't match");
            setSignupFrom(() => ({
                ...signupForm,
                password:'',
                confirmPassword: ''
            }));

        }

        
    }







    return (
        <>
            <div className="bg-gradient-to-b from-[#f7cac9] to-[#91a8d0] lg:h-dvh flex justify-center">
                <div className="w-[500px] p-5  rounded-[10px] backdrop-blur-sm">
                    <div className="my-10">
                        <img src="" alt="" />
                    </div>
                    <h1 className='text-center text-[30px] text-white font-bold'>Signup</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mt-10">

                            <div className="relative mb-5">
                                <input type="text" id="username" name="username"
                                    value={signupForm.username} onChange={handleChange}
                                    className="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent 
                                ocus:border-t-transparent focus:border-x-transparent focus:border-b-gray-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none 
                                dark:border-b-gray-500 dark:text-gray-900 dark:focus:ring-gray-600 dark:focus:border-b-gray-600
                                focus:outline-none
                                focus:pt-10
                                focus:pb-2
                                [&:not(:placeholder-shown)]:pt-10
                                [&:not(:placeholder-shown)]:pb-2
                                autofill:pt-6
                                autofill:pb-2" placeholder="********" />
                                <label htmlFor="username"
                                    className="absolute top-0 start-0 py-4 px-0 h-full text-md truncate pointer-events-none transition ease-in-out duration-100 border border-transparent 
                                dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                peer-focus:text-md
                                peer-focus:-translate-y-1.5
                                peer-focus:text-white
                                peer-[:not(:placeholder-shown)]:text-md
                                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                peer-[:not(:placeholder-shown)]:text-white"
                                >Username</label>
                            </div>
                            <div className="relative mb-5">
                                <input type="password" id="password" name="password"
                                value={signupForm.password} onChange={handleChange}
                                    className="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent 
                                ocus:border-t-transparent focus:border-x-transparent focus:border-b-gray-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none 
                                dark:border-b-gray-500 dark:text-gray-900 dark:focus:ring-gray-600 dark:focus:border-b-gray-600
                                focus:outline-none
                                focus:pt-10
                                focus:pb-2
                                [&:not(:placeholder-shown)]:pt-10
                                [&:not(:placeholder-shown)]:pb-2
                                autofill:pt-6
                                autofill:pb-2" placeholder="********" />
                                <label htmlFor="password"
                                    className="absolute top-0 start-0 py-4 px-0 h-full text-md truncate pointer-events-none transition ease-in-out duration-100 border border-transparent 
                                dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                peer-focus:text-md
                                peer-focus:-translate-y-1.5
                                peer-focus:text-white
                                peer-[:not(:placeholder-shown)]:text-md
                                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                peer-[:not(:placeholder-shown)]:text-white"
                                >Password</label>
                            </div>
                            <div className="relative mb-5">
                                <input type="password" id="confirmPassword" name="confirmPassword" 
                                    value={signupForm.confirmPassword} onChange={handleChange}
                                    className="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent 
                                ocus:border-t-transparent focus:border-x-transparent focus:border-b-gray-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none 
                                dark:border-b-gray-500 dark:text-gray-900 dark:focus:ring-gray-600 dark:focus:border-b-gray-600
                                focus:outline-none
                                focus:pt-10
                                focus:pb-2
                                [&:not(:placeholder-shown)]:pt-10
                                [&:not(:placeholder-shown)]:pb-2
                                autofill:pt-6
                                autofill:pb-2" placeholder="********" />
                                <label htmlFor="confirmPassword"
                                    className="absolute top-0 start-0 py-4 px-0 h-full text-md truncate pointer-events-none transition ease-in-out duration-100 border border-transparent 
                                dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                peer-focus:text-md
                                peer-focus:-translate-y-1.5
                                peer-focus:text-white
                                peer-[:not(:placeholder-shown)]:text-md
                                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                peer-[:not(:placeholder-shown)]:text-white"
                                >Confirm password</label>
                            </div>

                            <div className="">
                                <button className='w-full border border-1 p-2 rounded-md hover:bg-transparent hover:blur-xs text-lg font-bold'
                                    type='submit'
                                >
                                    Signup
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Register