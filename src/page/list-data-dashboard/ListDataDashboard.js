import axios from "axios"
import React, { useEffect, useState } from "react"
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css'
import { useHistory } from "react-router-dom";

const ListDataDashboard = () => {
    
  const [dataLowongan, setDataLowongan] = useState([])
  const [loading, setLoading] = useState(false)
  const [fetchStatus,setFetchStatus] = useState(true)
  let history = useHistory()
  useEffect(() => {
      let fetchData = async () => {
        try{
          setLoading(true)
          let {data} = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
          setLoading(false)

          let result = data.data

          setDataLowongan([...result])
      } catch (err){
        setTimeout(() => {
          alert("gagal")
        },5000)
      }
  }  
      if(fetchStatus){
        fetchData()
        setFetchStatus(false)
      }
      

  },[fetchStatus,setFetchStatus])

  console.log(dataLowongan)

  const handleEdit = (event) => {
    let dataId = event.target.value
    history.push(`/list-job-vacancy/edit/${dataId}`)
    
}
const handleDelete = (event) => {
  let dataId = parseInt(event.target.value)
  axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${dataId}`)
  .then((res) => {
      let newdataLowongan = dataLowongan.filter(el=> {return el.id !== dataId})
  setDataLowongan(newdataLowongan)
      console.log(res)
      
      
  })
  .catch((err) => {
      console.log(err)
  })
}

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Company Name',
      dataIndex: 'company_name',
      key: 'company_name',
    },
    {
      title: 'Description',
      dataIndex: 'job_description',
      key: 'job_description',
    },
    {
      title: 'Qualification',
      dataIndex: 'job_qualification',
      key: 'job_qualification',
    },
    {
      title: 'City',
      dataIndex: 'company_city',
      key: 'company_city',
    },
    {
      title: 'Tenure',
      dataIndex: 'job_tenure',
      key: 'job_tenure',
    },
    {
      title: 'Type',
      dataIndex: 'job_type',
      key: 'job_type',
    },
    {
      title: 'Salary Min',
      dataIndex: 'salary_min',
      key: 'salary_min',
    },
    {
      title: 'Salary Max',
      dataIndex: 'salary_max',
      key: 'salary_max',
    },
    {
      title: 'Action',
      key: 'action',
      render: (res,index) => (
        <Space size="middle">
          <button onClick={handleEdit} value={data.id} class="px-3 py-4 my-2 mx-5 bg-white hover:bg-gray focus:ring-gray-500 focus:ring-offset-gray-200 text-black transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Edit
          </button>
          <button onClick={handleDelete} value={data.id} class=" my-2 mx-5 py-2 px-5 bg-red-600  focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-20 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
        Delete
    </button>
        </Space>
      ),
    },
  ];
  
  const data = dataLowongan

  const [search,setSearch] = useState ("")
  const [filter,setFilter] = useState ({
    company_name : "",
    company_city : "", 
    job_type : "",
  })

    const handleChangeSearch = (event) => {
        setSearch(event.target.value)
    }
    const handleChangeFilter = (event) => {
      let {name, value} = event.target
      setFilter({...filter,[name] : value})
  }

    const handleSearch = (event) => {
        event.preventDefault()
        axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
        .then(({data}) => {
          let fetchResult = data.data

          let result = fetchResult.filter((res) => {
            return Object.values(res).join(' ').toLowerCase().includes(search.toLowerCase())
          })
          setDataLowongan([...result])
        })
    }

    const handleFilter = (event) => {
      event.preventDefault()
      axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
      .then(({data}) => {
        let fetchResult = data.data

        let result = fetchResult.filter((res) => {
          return res.company_name.toLowerCase() === filter.company_name.toLowerCase() || res.company_city.toLowerCase() === filter.company_city.toLowerCase() || res.job_type.toLowerCase() === filter.job_type.toLowerCase()
        })
        setDataLowongan([...result])
      })
  }
    
  
    return(
        <>
<form onSubmit={handleSearch} class="flex flex-col md:flex-row w-3/4 m-5 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 ml-auto place-self-end">
    <div class=" relative ">
        <input value={search} onChange={handleChangeSearch} type="text" class=" rounded-lg border-2 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Search Job Name..."/>
        </div>
        <input value={'Search'} class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200" type="submit"/>
    </form>
    <form onSubmit={handleFilter} class="flex py-2 flex-col md:flex-row w-3/4 m-5 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 ml-auto place-self-end">  
        <input name="company_name" value={filter.company_name} onChange={handleChangeFilter} type="text" class=" rounded-lg border-2 flex-1 appearance-none border border-gray-300 w-full py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Company Name..."/>
        <input name="company_city" value={filter.company_city} onChange={handleChangeFilter} type="text" class=" rounded-lg border-2 flex-1 appearance-none border border-gray-300 w-full py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Company City..."/>
        <input name="job_type"value={filter.job_type} onChange={handleChangeFilter} type="text" class=" rounded-lg border-2 flex-1 appearance-none border border-gray-300 w-full py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Job Status..."/>
        <input value={'Filter'} class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200" type="submit"/>
    </form>
    <button onClick={() => {
      setFetchStatus(true)
    }} value={'Search'} class="flex-shrink-0 px-4 py-2 mb-5 mr-24 block ml-auto place-self-end text-base font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200" type="submit">Reset Filter</button>
    

    <Table columns={columns} dataSource={data}/>
        </>
    )
}

export default ListDataDashboard