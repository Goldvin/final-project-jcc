import React, {createContext,useState} from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";

export const LowonganContext = createContext()

export const LowonganProvider = props => {

    let history = useHistory()
    let [dataLowongan, setdataLowongan] = useState([])

    const [input, setInput] = useState({
        company_city : "",
        title : "",
        job_qualification : "",
        company_name : "",
        job_description : "",
        job_status: 0,
        salary_max: 0,
        salary_min : 0,
        company_image_url : "",
        job_tenure : "",
    })

    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(true)

    console.log(dataLowongan)

    const handleChange = (event) => {
        
        let {name,value} = event.target
        setInput({...input,[name] : value}) 
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let {company_city, title, company_name, job_qualification, job_description, job_status, salary_max, salary_min, company_image_url, job_tenure} = input
        

        if (currentId === -1) {
            axios.post('https://dev-example.sanbercloud.com/api/job-vacancy/',{company_city, title, job_qualification, company_name, job_description, job_status, salary_max, salary_min, company_image_url, job_tenure})
            .then((res) => {
                history.push('/JobList')
                
                setFetchStatus(true)

                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

        }else{
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,{company_city: input.company_city, title: input.title, job_qualification: input.job_qualification, company_name: input.company_name, job_description: input.job_description, job_status: input.job_status, salary_max: input.salary_max, salary_min: input.salary_min, company_image_url: input.company_image_url, job_tenure: input.job_tenure})
        .then(() => { 
            history.push('/JobList')
            let data = dataLowongan.find(el=> el.id === currentId)
            data.company_city = input.company_city;
            data.title = input.title;
            data.job_qualification = input.job_qualification;
            data.company_name = input.company_name;
            data.job_description = input.job_description
            data.job_status = input.job_status;
            data.salary_min = input.salary_min;
            data.company_image_url = input.company_image_url;
            data.salary_max = input.salary_max;
            data.job_tenure = input.job_tenure;
            setdataLowongan([...dataLowongan])
        })
        }
        setInput({
            name : "",
            company_name : "",
            job_description : 0,
        })
        
        setCurrentId(-1)
    }

    const handleDelete = (event) => {
        let dataId = parseInt(event.target.value)
        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${dataId}`)
        .then((res) => {
            let newdataLowongan = dataLowongan.filter(el=> {return el.id !== dataId})
        setdataLowongan(newdataLowongan)
            console.log(res)
            
            
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleEdit = (event) => {
        let dataId = event.target.value
        history.push(`/Job/edit/${dataId}`)
        
    }

    let handleFunction = {
        handleChange,
        handleSubmit,
        handleDelete,
        handleEdit,
    }

    let state = {
        dataLowongan, setdataLowongan,
        input, setInput,
        currentId, setCurrentId,
        fetchStatus, setFetchStatus,
    }

    return(
        <LowonganContext.Provider value={{state, handleFunction}}>
            {props.children}
        </LowonganContext.Provider>
    )
}