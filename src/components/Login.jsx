import axios from "axios";
import pic4 from "../../img/demo4.webp"
import { BASE_URL } from "../utils/config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signedUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
const Login=()=>{

  const [emailId,setemailId]=useState("daliptandon@gmail.com");
  const[password,setPassword]=useState("Dalip@123");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogin=async()=>{
    try{
      const res=await axios.post(BASE_URL+"/users/login",{
        emailId,password
      },{withCredentials:true});
      // console.log(res.data.Data);
      dispatch(signedUser(res.data.Data));
      return navigate("/");
    }catch(error){
      console.log(error.message);
      
    }
  }
    return(
        <div className="hero bg-base-100 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="button" onClick={handleLogin}  className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
          <div className=" lg:text-left ">
          <h1 className="text-5xl font-bold "> Login!</h1>
           <img className="w-fit " src={pic4}/>
          </div>
        </div>
      </div>
    )
}

export default Login;