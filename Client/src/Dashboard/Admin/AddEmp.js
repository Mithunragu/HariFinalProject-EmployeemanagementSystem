import { ToastContainer, toast } from 'react-toastify';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
function AddEmployee() {
	function handleSubmit(event) {
		event.preventDefault();
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;
		var salary = document.getElementById('salary').value;
		var address = document.getElementById('address').value;
		var userdetails = {
			name: name,
			email: email,
			password: password,
			salary: salary,
			address: address,
		};

		if (name === "" && email === '' && password === '' && salary === '' && address === '') {

		} else {
			axios
				.post('http://localhost:3050/create', userdetails)
				.then((res) => {
					if (res.data.status === 'error') {
						alert('already created');
					} else if (res.data.status === 'success') {
						toast.success('created Successfully', { autoClose: 500 });
						setTimeout(() => {
							window.location.href = '/AdminEmployee';
						}, 3000);
					}
				})
				.catch((error) => {
					console.error('Error:', error);
					alert('An error occurred during create');
				});
		}
	}
	return (

		<>
			<div className='d-flex flex-column align-items-center pt-4'>
				<h2>Add Employee</h2>
				<form class="row g-3 w-50" onSubmit={handleSubmit}>
					<div class="col-12">
						<label for="inputName" class="form-label">Name</label>
						<input type="text" class="form-control" id="name" placeholder='Enter Name' autoComplete='off' />
					</div>
					<div class="col-12">
						<label for="inputEmail4" class="form-label">Email</label>
						<input type="email" class="form-control" id="email" placeholder='Enter Email' autoComplete='off' />
					</div>
					<div class="col-12">
						<label for="inputPassword4" class="form-label">Password</label>
						<input type="password" class="form-control" id="password" placeholder='Enter Password' />
					</div>
					<div class="col-12">
						<label for="inputSalary" class="form-label">Salary</label>
						<input type="text" class="form-control" id="salary" placeholder="Enter Salary" autoComplete='off' />
					</div>
					<div class="col-12">
						<label for="inputAddress" class="form-label">Address</label>
						<input type="text" class="form-control" id="address" placeholder="1234 Main St" autoComplete='off' />
					</div>
					<div class="col-12">
						<button type="submit" class="btn btn-primary">Create</button>
					</div>
				</form>
			</div>
			<ToastContainer position="top-center" />
		</>

	)
}

export default AddEmployee