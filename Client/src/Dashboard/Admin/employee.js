import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export function AdminEmployee() {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3050/getall")
      .then(res => res.json())
      .then(details => setData(details))
      console.log(data)
  })


  const dlt =(id)=>{
    var data={ id:id}
    axios.post("http://localhost:3050/delete",data)
    .then((res)=>{
      console.log(res)
      if(res.data.status==="error"){
        alert("not deleted")
      }
      else if(res.data.status==="success"){
        alert("deleted")
      }

    })
  }
  return (
    <>
      <div className='px-5 py-3'>
        <div className='d-flex justify-content-center mt-2'>
          <h3>Employee List</h3>
        </div>
        <Link to="/Add" className='btn btn-success'>Add Employee</Link>
        <div className='mt-3'>
          <table className='table'>
            <thead>
              <tr className="text-center sticky-top bg-dark">
                <th>Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((value, index) => (
                  <>
                    <tr className="text-center table-one">
                      <td>{value.name}</td>
                      <td >{value.email}</td>
                      <td>{value.salary}</td>
                      <td>{value.address}</td>
                      <td><Link to={`/update/${value.id}`} className="btn btn-success mx-2">Update</Link>
                         <button className="btn btn-danger" onClick={()=>{dlt(value.id)}}>Delete</button></td>
                    </tr>
                  </>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>


    </>
  );
}