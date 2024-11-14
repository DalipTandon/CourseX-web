import axios from "axios";
import CourseCard from "./CourseCard";
import { BASE_URL } from "../utils/config";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";

const Feed=()=>{
    const dispatch=useDispatch();
    const feed=useSelector(store=>store.feed);
    const courseFeed= async()=>{
        try{
        const res=await axios.get(BASE_URL+"/course/feed",{withCredentials:true});
        // console.log(res.data.data);
        dispatch(addFeed(res.data.data));
        }catch(error){
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        courseFeed();
    },[])
    if(!feed || feed.length==0)return <h1>No Course Available</h1>
    return (
        feed && (
            <div className=" flex m-10 gap-4 flex-wrap " >
                 {feed.map((card) => (
            <div key={card._id} className="w-64 h-96 mx-2 hover:scale-105 cursor-pointer mt-6  ">
                    <CourseCard feed={card} />
                    </div>
                ))}
            </div>
            
        )
    );
}

export default Feed;