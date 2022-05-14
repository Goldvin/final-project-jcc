import React from "react"
import {Navbar, Footer} from "./index"


const SetLanding = (props) => {
    return(
        <>
            <Navbar/>
            {props.children}
            <Footer/>
        </>
    )
}

export default SetLanding