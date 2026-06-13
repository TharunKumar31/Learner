import axios from "axios";
import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";

export function EnrollDetails() {
    const [enrolllist,setEnrollDetails]=useState([]);
    useEffect(() => {
        fetch("https://learner-production-a680.up.railway.app/enrolldetails")
        .then(storedata => storedata.json())
        .then(enrolllistdata => setEnrollDetails(enrolllistdata))
    })
    const del=(id)=>{
        var key={id:id}
        axios.post("https://learner-production-a680.up.railway.app/delete/",key)
        .then((res)=>{
            if(res.data.status==="error"){
                alert("data not deleted")
            }
            else if (res.data.status==="deleted"){
                alert("data deleted")
            }
        })
    }

    return(
        <>
        <div>
             {
                enrolllist.map((value, index)=>
                    <>
                    <div>
                        <p>{value.fname}</p>
                        <p>{value.lname}</p>
                        <p>{value.email}</p>
                        <p>{value.phoneno}</p>
                        <p>{value.selectcourse}</p>
                        <p>{value.education}</p>
                        <p>{value.experience}</p>
                        <p>{value.motivate}</p>
                        <p>{value.learn}</p>
                        <button className="btn btn-danger" onClick={()=>{del(value.id)}}>Delete</button>
                        <Link to={`/enrollupdate/${value.id}`}><button className="btn btn-primary view">Update</button></Link>
                    </div>
                    </>
                )
             }
        </div>
        </>
    );
}