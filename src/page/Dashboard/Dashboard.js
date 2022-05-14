import axios from "axios"
import React, { useEffect, useState } from "react"
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css'

const Dashboard = () => {
    
  const [dataLowongan, setDataLowongan] = useState([])
  const [loading, setLoading] = useState(false)
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
      
      fetchData()

  },[])

  console.log(dataLowongan)

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
  ];
  
  const data = dataLowongan
  
    return(
        <>
        <Table columns={columns} dataSource={data} />
        </>
    )
}

export default Dashboard