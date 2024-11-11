import { useState } from "react";
import pic4 from "../../img/demo4.webp"
import axios from "axios";
import { BASE_URL } from "../utils/config";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signedUser } from "../utils/userSlice";

const Signup=()=>{
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[emailId,setemailId]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleSignup=async()=>{
        try{
        const res=await axios.post(BASE_URL+"/users/signup",{
            firstName,lastName,emailId,password
        },{withCredentials:true});
        console.log(res.data.data);
        dispatch(signedUser(res.data.data));
       return navigate("/");
    }catch(error){
        console.log(error.message);
        alert("Signup unsuccessful!");
    }
    }
   
    return(
        <div className="hero bg-base-100 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">FirstName</span>
                </label>
                <input type="text" placeholder="FirstName" className="input input-bordered"  value={firstName}  onChange={(e)=>setFirstName(e.target.value)}  required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">LastName</span>
                </label>
                <input type="text" placeholder="LastName" className="input input-bordered" value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" value={emailId} onChange={(e)=>setemailId(e.target.value)} required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" value={password} onChange={(e)=>setPassword(e.target.value)} required />
              </div>
              <div className="form-control mt-6">
                <button   type="button" className="btn btn-primary" onClick={handleSignup}>Signup</button>
              </div>
            </form>
          </div>
          <div className=" lg:text-left ">
          <h1 className="text-5xl font-bold " >Signup now!</h1>
           <img className="w-fit " src={pic4}/>
          </div>
        </div>
      </div>
    )
}

export default Signup;