import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/config";
import { removeUser } from "../utils/userSlice";

const Header=()=>{
  const isUser=useSelector(store=>store.user); //checking whether user exists or not
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogout=async()=>{
    try{
      const res=await axios.post(BASE_URL+"/users/logout",{},{withCredentials:true});
      dispatch(removeUser());
      navigate("/login")
    }catch(error){
      console.log(error.message);
      
    }
  }
    return(
        <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start mx-2">
          <div className="dropdown z-10">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to={"/feed"}>Courses</Link></li>
              <li><Link to={"/faqs"}>FAQs</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl text-black">CourseX</Link>
        </div>
        <div className="navbar-center hidden lg:flex border-gray-500 bg-base-200 py-3   rounded-full font-bold ">
          <ul className="menu menu-horizontal px-4  text-black ">
            <li><Link to={"/feed"}>Courses </Link></li>
            <li><Link to={"/faqs"}>FAQs</Link></li>
            <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
       {!isUser ? <div className="navbar-end p-2 mx-3 flex gap-4  ">
        <Link to={"/signup"} className="btn   bg-base-200 py-2   font-bold text-black">Teach on CourseX</Link>
          <Link to={"/login"} className="btn  border- bg-base-200 py-2   font-bold text-black">Login</Link>
          <Link to={"/signup"} className="btn  border- bg-base-200 py-2   font-bold text-black">Signup</Link>
        </div>:
        <div className="navbar-end p-2 mx-3 flex gap-4  ">
          <Link to={"/learnings"} className="btn   bg-base-100 py-2   font-bold text-black">My Learnings</Link>
          <Link  className="btn   bg-base-100 py-2   font-bold text-black" onClick={handleLogout}>Logout</Link>
        </div>}
      </div>
    )
}

export default Header;