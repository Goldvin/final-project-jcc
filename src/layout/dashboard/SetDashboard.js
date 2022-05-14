import React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"


const SetDashboard = (props) => {
    return(
        <>
            
<main class="bg-gray-100 rounded-2xl h-screen overflow-hidden relative">
    <div class="flex items-start justify-between">
        <div class="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
            <Sidebar/>
        </div>
        <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <Header/>
                {props.children}
            </div>
        </div>
    </main>

        </>
    )
}

export default SetDashboard