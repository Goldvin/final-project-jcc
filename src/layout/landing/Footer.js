import React from "react"
import LogoJCC from "../../assets/img/logo.png"

const Footer = () => {
    return(
        <>
      <footer className="p-4 bg-gray-700 rounded-t-xl shadow md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com" className="flex items-center mb-4 sm:mb-0">
            <img src={LogoJCC} className="mr-3 h-20" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center">© 2022 <a href="https://flowbite.com" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
      </footer>
    

        </>
    )
}

export default Footer