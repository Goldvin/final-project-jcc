import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Section from "../../assets/img/section.jpg"

const Home = () => {
    
    
    const [dataLowongan, setDataLowongan] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        let fetchData = async () => {
            setLoading(true)
            let {data} = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            setLoading(false)

            let result = data.data

            setDataLowongan([...result])
        }
        fetchData()

    },[])

    console.log(dataLowongan)

    return(
        <>
        
<div class="bg-gray overflow-hidden relative border-2 pt-20">
    <div class="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black sm:text-4xl">
            <span class="block">
                Want to be millionaire ?
            </span>
            <span class="block text-indigo-500">
                It&#x27;s today or never.
            </span>
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
                <button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get started
                </button>
            </div>
        </div>
    </div>
    <img src={Section} class="absolute h-full max-w-1/2 hidden lg:block right-0 top-20"/>
</div>

<div className="p-7 pt-14 text-lg">
    <h1>Lowongan Yang Tersedia: </h1>

</div>

    

    
{loading && <>
    <div className="flex flex-wrap justify-center">    
<div class="bg-white max-w-xl m-5 p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-4 select-none ">
    <div class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse">
    </div>
    <div class="flex flex-col flex-1 gap-5 sm:p-2">
        <div class="flex flex-1 flex-col gap-3">
            <div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl">
            </div>
            <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
            </div>
            <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
            </div>
            <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
            </div>
            <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
            </div>
        </div>
        <div class="mt-auto flex gap-3">
            <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full">
            </div>
            <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full">
            </div>
            <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto">
            </div>
        </div>
    </div>
</div>
<div class="bg-white max-w-xl m-5 p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-4 select-none ">
    <div class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse">
    </div>
    <div class="flex flex-col flex-1 gap-5 sm:p-2">
        <div class="flex flex-1 flex-col gap-3">
            <div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl">
            </div>
            <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
            </div>
            <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
            </div>
            <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
            </div>
            <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
            </div>
        </div>
        <div class="mt-auto flex gap-3">
            <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full">
            </div>
            <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full">
            </div>
            <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto">
            </div>
        </div>
    </div>
</div>
</div>
</>}
<div className="flex flex-wrap justify-center">
        <>
            {dataLowongan
            .filter((res, index) => {
                return res.job_status === 1
            })
            .filter((res, index) => {
                return index < 4
            }).map((res) => {
                return(
                    <>
                    <Link to={`/job-vacancy/${res.id}`}>
                        
                    <div class="p-4 m-5 border-2 bg-white shadow-xl max-w-xl rounded-xl flex justify-start md:flex-row flex-col gap-4">
    <div class="relative">
        <img src={res.company_image_url} class="rounded-xl w-full object-fill md:w-auto md:max-h-40"/>
        <span class="px-2 py-1 text-white bg-gray-700 text-xs rounded absolute right-2 bottom-2 bg-opacity-50">
        {res.job_tenure}
        </span>
    </div>
    <div class="flex flex-col justify-between">
        <div class="flex items-start space-x-5 justify-between text-gray-700 :text-white my-2 md:m-0">
            <p class="text-xl leading-5">
                {res.title} 
            </p>
            <button class="text-red-400 hover:text-red-600">
                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z">
                    </path>
                </svg>
            </button>
        </div>
        <div class="flex items-center text-gray-500 text-xs my-2 md:m-0">
            {res.job_status === 1 ? "Lowongan Dibuka" : "Lowongan Ditutup"}
        </div>
        <div class="flex items-center text-gray-500 text-xs my-2 md:m-0">
            <h5>Gaji : {res.salary_min} - {res.salary_max} </h5>
        </div>
        <div class="flex items-start my-2 md:m-0">
            <div class="relative">
                <a href="#" class="block relative">
                    <img src="https://images2.imgbox.com/89/a8/UXOk4dO9_o.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a>
                <svg width="10" height="10" fill="currentColor" class="fill-current text-white bg-blue-600 rounded-full p-1 absolute bottom-0 right-0 w-4 h-4 -mx-1 -my-1" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z">
                    </path>
                </svg>
            </div>
            <div class="flex flex-col items-start justify-center ml-2">
                <span class="text-gray-600 text-sm flex items-center">
                    {res.company_name}
                    <span class="w-2 h-2 block bg-green-500 rounded-full ml-1">
                    </span>
                </span>
                <span class="text-gray-400 text-xs">
                    {res.company_city}, {res.job_type}
                </span>
            </div>
        </div>
    </div>
</div>
                    </Link>
                    </>
                )
            })}
        </>

</div>

<div class="sm:flex flex-wrap justify-center items-center text-center gap-8 m-10 p-10 shadow-md">
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
        </div>
        <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Website Design
        </h3>
        <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
            Encompassing today’s website design technology to integrated and build solutions relevant to your business.
        </p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
        </div>
        <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Branding
        </h3>
        <p class="text-md text-gray-500 dark:text-gray-300 py-4">
            Share relevant, engaging, and inspirational brand messages to create a connection with your audience.
        </p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
        </div>
        <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            SEO Marketing
        </h3>
        <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
            Let us help you level up your search engine game, explore our solutions for digital marketing for your business.
        </p>
    </div>
</div>


        </>
    )
}

export default Home