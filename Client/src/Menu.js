import React from "react";
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <>
            <nav class="navbar navbar-expand-lg p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 img-thunmbnails h5 ">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/DashboardView">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/AdminEmployee">Employee</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/AdminProfile">Profile</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/AdminLogout">Logout</Link>
                            </li>

                        </ul>
                       
                    </div>
                </div>
            </nav>

        </>
    );
}