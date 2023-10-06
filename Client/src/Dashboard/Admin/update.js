import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

export function Updatedetails() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3050/getonee/${id}`)
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => {
        const employeeData = data[0];
        setName(employeeData.name);
        setEmail(employeeData.email);
        setPassword(employeeData.password);
        setSalary(employeeData.salary);
        setAddress(employeeData.address);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }, [id]);

  function handleupdate(event) {
    event.preventDefault();
    // Retrieve updated values from form inputs
    const updatedetails = {
      name,
      email,
      password,
      salary,
      address,
    };

    if (!name) {
      alert("Please enter a name");
    } else {
      axios
        .put(`http://localhost:3050/update/${id}`, updatedetails)
        .then((res) => {
          if (res.data.status === "error") {
            alert("Data was not updated");
          } else if (res.data.status === "success") {
            alert("Data was updated successfully");
            window.location.href = "/AdminEmployee";
          }
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    }
  }

  return (
    <>
      <h1>Update Details</h1>
      <form onSubmit={handleupdate}>
        <input
          type="text"
          id="name"
          placeholder="Enter the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />
        <input
          type="text"
          id="email"
          placeholder="Enter the email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          id="password"
          placeholder="Enter the password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <input
          type="number"
          id="salary"
          placeholder="Enter the salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        /><br />
        <input
          type="text"
          id="address"
          placeholder="Enter the address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        /><br />
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
}
