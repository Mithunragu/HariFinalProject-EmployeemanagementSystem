import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'
import './admin.css';
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

export function DashboardAdmin() {
    const { id } = useParams();
    const [username, setUsername] = useState('');

    useEffect(() => {
        fetch("http://localhost:3050/getone/" + id)
            .then(data => data.json())
            .then((res) => {
                setUsername(res[0].username);
                console.log(username)

            });
    }, []);




    return (
        <>
            <div className="image">
                <div className="p-5  mt-5 w-50 mx-auto">
                    <header>
                        <h1>Welcome, {username}</h1>
                    </header>
                    <div class="container">
                        <p>You have successfully logged in as an admin. You can now manage your admin dashboard and perform various tasks.</p>
                        <a href="/DashboardView" class="button">Go to Admin Dashboard</a>
                    </div>
                </div>
            </div>
        </>
    );
}
