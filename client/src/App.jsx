import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './contents/Home'
import NoPage from './contents/NoPage'
import Login from './contents/Login'
import Register from './contents/Register'
import Profile from './contents/Profile'
import HomeLayout from './contents/HomeLayout'


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomeLayout/>}>
                        <Route index element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                    
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
