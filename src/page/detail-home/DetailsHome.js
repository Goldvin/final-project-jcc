import axios from "axios"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"


const DetailsHome = () => {
    
    let {slug} = useParams()
    console.log(slug)

    useEffect(() => {
        if (slug !== undefined){
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${slug}`)
        }
    })

    return(
        <>
        
        </>
    )
}

export default DetailsHome