import React, { useEffect, useState } from 'react'
import axios from 'axios'
function AnotherApi() {
    const [data,setdata]= useState([])
    useEffect(()=>{
        axios 
        get("https://skbm55g7-3000.inc1.devtunnels.ms/image")
        .then((res)=>{
            const image = res.set.image
            setdata(image)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

  return (
    <div>
      
    </div>
  )
}

export default AnotherApi
