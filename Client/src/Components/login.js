import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./login.css"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Login() {

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

    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const togglePasswordFields = () => {
        setShowPasswordFields(!showPasswordFields);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        setPasswordsMatch(newPassword === confirmPassword);
    };
    function handlelogin(event) {
        event.preventDefault()
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        var logindetails = {
            email: email,
            password: password
        }
        if (email === "") {
            alert("Enter the email")
        } else if (password === "") {
            alert("Enter the password")
        }
        else {
            axios.post("http://localhost:3050/login", logindetails)
                .then((res) => {
                    if (res.data.status === "success") {
                        var role = res.data.role
                        var id = res.data.id
                        if (role === "Admin") {
                            toast.success('Login Successfully', { autoClose: 500 });
                            setTimeout(() => {

                                window.location.href = `/DashboardAdmin/${id}`
                            }, 3000);

                        } else if (role === "owner") {
                            toast.success('Login Successfully', { autoClose: 500 });
                            setTimeout(() => {

                                window.location.href = `/Dashboardowner/${id}`
                            }, 3000);

                        } else if (role === "user") {
                            toast.success('Login Successfully', { autoClose: 500 });
                            setTimeout(() => {

                                window.location.href = `/Dashboardowner/${id}`
                            }, 3000);
                            window.location.href = `/Dashboarduser/${id}`
                        }
                    } else if (res.data.status === "invalid") {
                        alert("your password invalid")
                    } else if (res.data.status === "empty_set") {
                        alert("your email or password invalid")
                    } else if (res.data.status === "error") {
                        alert("contact admin")
                    }
                })
        }
    }


    return (
        <>
            <div className='col'>
                <div className='row mt-5'>
                </div>
                <div className='row'>
                    <div className="m-auto w-50">
                        <div className='border p-3'>
                            <h2 className='text-center'>User <span className='head'>Login</span></h2>
                            <form onSubmit={handlelogin} className='needs-validation' novalidate>
                                <div className="mb-3">
                                    <label htmlFor="inputEmail" className="form-label h6">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder='Enter your email' req/>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div class="invalid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPassword" className="form-label h6">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder='Enter the password' required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div class="invalid-feedback">
                                        Please provide a valid password.
                                    </div>
                                </div>
                                {showPasswordFields && (
                                    <>
                                        <div className="mb-3">
                                            <label htmlFor="newPassword" className="form-label h6">New Password</label>
                                            <input type="password" className="form-control" id="newPassword" placeholder='Enter a new password' onChange={handlePasswordChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="confirmPassword" className="form-label h6">Confirm Password</label>
                                            <input type="password" className="form-control" id="confirmPassword" placeholder='Confirm the new password' onChange={handlePasswordChange} />
                                            {!passwordsMatch && <p className="text-danger">Passwords do not match.</p>}
                                        </div>
                                    </>
                                )}
                                <button type="submit" className="btn btn-primary button">Login</button>
                            </form>
                            <p className="mt-3">
                                <Link to="" id="forgotPasswordLink" onClick={togglePasswordFields} className='button10'>Forgot Password?</Link> <span className='color-one mx-3'> | Not a member?</span>
                                <Link to="/" className='button1'> Sign up now</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </>
    );
}

