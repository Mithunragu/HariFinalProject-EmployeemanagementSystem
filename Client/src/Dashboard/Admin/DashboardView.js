import React, { useEffect, useState } from "react";
import axios from "axios";

export function DashboardView() {
  const [totalEmployees, setTotalEmployees] = useState(null);
  const [adminCount, setAdminCount] = useState(null);
  const [employeeCount, setEmployeeCount] = useState(null);
  const [salary, setSalary] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3050/api/total-employees")
      .then((response) => {
        const data = response.data;
        setTotalEmployees(data.totalEmployees);
      })
      .catch((error) => {
        console.error("Error fetching total employees:", error);
      });

    axios.get("http://localhost:3050/api/admin-count")
      .then((response) => {
        const data = response.data;
        setAdminCount(data.adminCount);
      })
      .catch((error) => {
        console.error("Error fetching admin count:", error);
      });
  }, []);
  
  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Admin</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {adminCount}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Employee</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {employeeCount}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Salary</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {salary}</h5>
          </div>
        </div>
      </div>

      {/* List of admin  */}
      <div className='mt-4 px-5 pt-3'>
        <h3>List of Admins</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Admin</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  );
}
