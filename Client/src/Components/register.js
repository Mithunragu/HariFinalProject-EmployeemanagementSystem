import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
export function Register() {

    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()

    function handleregister(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var ph_no = document.getElementById('ph_no').value;
        var role = document.getElementById('role').value;
        var userdetails = {
            username: username,
            email: email,
            password: password,
            ph_no: ph_no,
            role: role,
        };

        if (username === '') {
            alert("Enter your name")
        }
        else if (email === '') {
            alert("Enter your email")
        }
        else if (password === '') {
            alert("Enter your password")
        }
        else if (ph_no === '') {
            alert("Enter your phone number")
        }
        else if (role === 'SELECT ROLE') {
            alert("Enter your Role")
        }
        else {
            axios
                .post('http://localhost:3050/register', userdetails)
                .then((res) => {
                    if (res.data.status === 'error') {
                        alert('already registered sign in');
                    } else if (res.data.status === 'success') {
                        toast.success('Registration Successfully', { autoClose: 500 });
                        setTimeout(() => {
                            window.location.href = '/login';
                        }, 3000);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('An error occurred during registration');
                });
        }
    }

    return (
        <>
            <div className='col'>
                <div className='row mt-4'></div>
                <div className='row'>
                    <div className='w-50 m-auto '>
                        <div className='border  p-3'>
                            <h2 className='text-center h1'>
                                Sign<span className='head'> Up</span>
                            </h2>
                            <form onSubmit={handleregister} className='needs-validation' novalidate>
                                <div className='mb-3'>
                                    <label htmlFor='username' className='form-label h6'>
                                        User Name
                                    </label>
                                    <input type='text' className='form-control' id='username' placeholder='Enter your name' required />
                                   
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='email' className='form-label h6'>
                                        Email address
                                    </label>
                                    <input type='email' className='form-control' id='email' placeholder='example@gmail.com' required />
                                    
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='password' className='form-label h6'>
                                        Password
                                    </label>
                                    <input type='password' className='form-control' id='password' placeholder='Enter the password' required />
                                  


                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='ph_no' for="ph_no" className='form-label h6'>
                                        Phone number
                                    </label>
                                    <input type='number' className='form-control' id='ph_no' placeholder='Enter your phone number' required />
                                  
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='role' className='form-label h6'>
                                        Role
                                    </label>
                                    <select id='role' aria-label='Default select example' className='form-control form-select alert-link select-one w-25 mx-0' required>
                                        <option>SELECT ROLE</option>
                                        <option value='Admin'>Admin</option>
                                        <option value='employee'>Employee</option>
                                        
                                    </select>
                                </div>
                                <button type='submit' className='btn btn-primary button'>
                                    Sign Up
                                </button>
                            </form>
                            <p className='mt-3 '>
                                <span className='color-one '> Already a member? </span>
                                <Link to='/loginswitch' className='button1 mx-2'>
                                    Login now
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </>
    );
}
