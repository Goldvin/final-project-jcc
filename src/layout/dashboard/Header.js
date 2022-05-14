import React from "react"
import Cookies from 'js-cookie'

const Header = () => {

    let user = JSON.parse(Cookies.get('user'))
    console.log(user)
    let image_url = user.image_url

    return(
        <>
        <header class="w-full shadow-lg bg-white items-center h-16 rounded-2xl z-40">
                <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                    <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                        <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                            <div class="relative flex items-center w-full lg:w-64 h-full group">
                                <div class="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                    <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            </div>
                            <div class="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                            <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">

                            <a href="#" class="block relative">
                                <img alt="profil" src={image_url} class="mx-auto object-fill rounded-full h-10 w-16 "/>
                            </a>

</div>
                            </div>
                        </div>
                    </div>
                </header>
        </>
    )
}

export default Header