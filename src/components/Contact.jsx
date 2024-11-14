import { useState } from "react";
import pic4 from "../../img/demo4.webp"


const Contact=()=>{
    const[emailId,setemailId]=useState();
    const[name,setName]=useState();
    const[query,setQuery]=useState();
    return(
        <>
        <div className=" h-10 mt-10 ">
            <h1 className="flex justify-center font-serif text-4xl">Contact us</h1>
        </div>
        <div className="hero bg-base-100   ">
        <div className="hero-content flex-col lg:flex-row-reverse  ">
          <div className="card bg-gray-100-100 w-96 max-w-sm shrink-0 shadow-2xl h-[30vw]">
            <form className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" value={name} onChange={(e)=>setName(e.target.value)} required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" value={emailId} onChange={(e)=>setemailId(e.target.value)} required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Query</span>
                </label>
                <input type="text" placeholder="Enter your query" className="input input-bordered" value={query} onChange={(e)=>setQuery(e.target.value)} required />
              </div>
              <div className="form-control mt-6">
                <button type="button"  className="btn bg-[#A5E2D0]">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
    )
}

export default Contact;