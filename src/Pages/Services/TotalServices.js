import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Loading from '../../utilites/Loading';
import SingleServices from '../Home/SingleServices';
const TotalServices = () => {
    // const {data,loading,error}=useFetch('http://localhost:8000/services')
    const [serviceData,setServiceData]=useState()
    const [loading,setLoading]=useState(false)
    const [count,setCount]=useState(0)
    const [show, setShow] = useState(false);
    
    const url='http://localhost:8000/services'
    useEffect(()=>{
        setLoading(true)
       axios.post(url)
       .then(res=>{
        // console.log(res.data.services)
        setServiceData(res.data.services)
        setCount(res.data.count)
       }).catch(error=>{
        console.log(error)
       }).finally(()=>{
        setLoading(false)
       })
       
    },[url])
    if(loading){
        return <Loading></Loading>
    }
   const limit=12
 
    const handlePage=(pageNum)=>{
        axios.post(url, {
            pageNumber:pageNum
          })
          .then(res=> {
           setServiceData(res.data.services)
          })
          .catch(function (error) {
            console.log(error);
          })
    }
   
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:8000/deleteService/${id}`)
        .then(res=>{
           console.log(res.data)
          const remained=serviceData?.filter(item=>item._id!==id)
          setServiceData(remained)
           setShow(false)
        })
        .catch(err=>console.log(err))
        // console.log(serviceData)
    }
    
    return (
        <div className='container-fluid py-5'>
        <div className='container pt-5 pb-3'>
          <div className='text-center mb-3 pb-3'>
            <h6
              className='text-primary text-uppercase'
              style={{ letterSpacing: '5px' }}
            >
              Services
            </h6>
            <h1>Tours & Travel Services</h1>
          </div>
          <div className='row'>
            {
                 
                 serviceData?.map(item=><SingleServices data={item} key={item._id} handleDelete={handleDelete} setShow={setShow}  show={show}></SingleServices>)
                  
            }
          <div className='d-flex justify-content-center'>
    <Pagination>
      <Pagination.First />
      {
        // console.log([...Array(page)])
        [...Array(Math.ceil(count/limit)).keys()].map(item=><Pagination.Item key={item} onClick={()=>handlePage(item)}>{item}</Pagination.Item>)
      }
      <Pagination.Last />
      
    </Pagination>

        </div>
        </div>
      </div>
    </div>
    );
};

export default TotalServices;