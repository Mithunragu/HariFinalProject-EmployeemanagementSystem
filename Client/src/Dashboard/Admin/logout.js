import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function AdminLogout() {
  
    return (
        <>
            <div className="contianer mt-3 p-5">
                <div className="border w-50 h-auto bg -primary mx-auto">
                    <div className="p-4 ">
                        <img src="https://th.bing.com/th/id/OIP.gVwp2xKDJEWBwfZ52KP8pAHaJC?pid=ImgDet&rs=1" className="w-25 d-flex justify-content-center mx-auto" />
                        <h2 className="text-center mt-2">oh no! You're leaving...</h2>
                        <h3 className="text-center">Are you sure?</h3>
                        <div className="text-center mt-2">
                            <Link to="/Menu">     <button className="btn w-50 btn-outline-primary mt-2">Naah,Just Kidding</button></Link> <br />
                            <Link to="/Login">      <button className="mt-2 w-50 btn btn-outline-danger">Yes, Log Me Out</button></Link>

                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}