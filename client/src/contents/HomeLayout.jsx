import { Link, Outlet } from 'react-router-dom'
import Logo from '../assets/logo.png'

function HomeLayout() {
    return (
        <>
            <nav className='container mx-auto text-white'>
                <ul className='flex items-center'>
                    <li>
                        <Link to="/"><img src={Logo} alt="" className='w-[80px]' /></Link>
                    </li>
                    <li className='ms-auto me-4'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='mx-4'>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className='mx-4'>
                        <Link to="/register">Register</Link>
                    </li>
                    <li className='ms-4'>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default HomeLayout