import React from "react"
import { Link } from "react-router-dom"
import LogoJCC from "../../assets/img/logo.png"
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom"

const Navbar = () => {
    
    let history = useHistory()

    return(
        <>
        
<div>
    <nav class="bg-whitesmoke relative shadow-lg w-full">
        <div class="max-w mx-auto px-8">
            <div class="flex items-center justify-between h-16">
                <div class=" flex items-center">
                    <a class="flex-shrink-0" href="/">
                        <img class="w-48" src={LogoJCC}/>
                    </a>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a class="text-gray-500  hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" href="/">
                                Beranda
                            </a>
                            <a class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" href="/job-vacancy">
                                Lowongan Pekerjaan
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                {!Cookies.get('token') && <Link to="/login">
                    <button type="button" class="hidden lg:block text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-auto">
                    Login
                        </button>
        </Link>}
        {Cookies.get('token') && 
        <div className="hidden lg:block ">
        <Link to="/dashboard">
            <button type="button" class=" mr-3 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-auto">
            Dashboard
            </button>
            
            <button onClick={() => {
                Cookies.remove('token')
                Cookies.remove('user')
                history.push('/login')
            }} class=" text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-auto">
                Logout
            </button>
        </Link>
        </div>}
                </div>
                <div class="-mr-2 flex md:hidden">
                    <button class="text-gray-900 hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                        <svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a class="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Beranda
                </a>
                <a class="text-gray-900 block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Lowongan Pekerjaan
                </a>
            </div>
        </div>
        <div>
        {!Cookies.get('token') && <Link to="/login">
                    <button type="button" class="md:hidden text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-auto">
                    Login
                        </button>
        </Link>}
        {Cookies.get('token') && 
        <>
        <Link to="/dashboard">
            <button type="button" class="md:hidden mr-3 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-auto">
            Dashboard
            </button>
            
            <button onClick={() => {
                Cookies.remove('token')
                Cookies.remove('user')
                history.push('/login')
            }} class="md:hidden text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-auto">
                Logout
            </button>
        </Link>
        </>}
        </div>
    </nav>
</div>

        </>
    )
}

export default Navbar