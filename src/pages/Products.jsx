import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Products() {
  const [data,setData]=useState([])

  useEffect(()=>{
    const fetchData = async () =>{
      const res = await fetch("https://dummyjson.com/products")
      const apiData = await res.json()
      setData(apiData.products)
    }
    fetchData()
  },[])
  return (
    <div>
      <div className="container">
        <div className="row">
          {
            data.map((v)=>{
              return(
                <div className="col-lg-3">
   <div className="card" style={{width: '18rem'}}>
  <NavLink  to={`/detail/${v.id}`}><img src={v.images[0]} className="card-img-top" alt="..." /></NavLink>
  <div className="card-body">
    <h5 className="card-title">{v.title}</h5>
    <p className="card-text">{v.description}</p>
    <a href="#" className="btn btn-primary">{v.price}</a>
  </div>
</div>

                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
