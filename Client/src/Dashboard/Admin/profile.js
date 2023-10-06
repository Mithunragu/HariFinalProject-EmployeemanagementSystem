import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'
import './profile.css'
export function AdminProfile() {
 
      const { id } = useParams();
        const [username, setUsername] = useState('');
    
        useEffect(() => {
            fetch("http://localhost:3050/getoneee/" + id)
                .then(data => data.json())
                .then((res) => {
                    setUsername(res[0].username);
                    console.log(username)
    
                });
        }, []);
    return (
        <>
            <div class="container mt-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-7">
                        <div class="card p-3 py-4">
                            <div class="text-center mt-3">
                                <span class="bg-secondary p-1 px-4 rounded text-white">{username}</span>
                                <h5 class="mt-2 mb-0"></h5>
                                <span>{username}</span>

                                <div class="px-4 mt-1">
                                    <p class="fonts">This text is typically used in design and layout mockups to fill space where actual content will later be inserted. It helps designers and developers visualize how text will appear within a document or webpage without being distracted by the content itself. </p>

                                </div>

                                <ul class="social-list">
                                    <li><i class="fa fa-facebook"></i></li>
                                    <li><i class="fa fa-dribbble"></i></li>
                                    <li><i class="fa fa-instagram"></i></li>
                                    <li><i class="fa fa-linkedin"></i></li>
                                    <li><i class="fa fa-google"></i></li>
                                </ul>

                                <div class="buttons">

                                    <button class="btn btn-outline-primary px-4">Message</button>
                                    <button class="btn btn-primary px-4 ms-3">Contact</button>
                                </div>


                            </div>




                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}