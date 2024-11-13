import axios from "axios"
import CourseCard from "./CourseCard"
import { BASE_URL } from "../utils/config"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCourse } from "../utils/courseSlice"


const Learnings=()=>{
    const dispatch=useDispatch();
    const course=useSelector(store=>store.mycourse);
    const myCourses=async()=>{
        const res=await axios.get(BASE_URL+"/users/mycourse",{withCredentials:true});
        const courses = res.data.data.map(courseData => courseData.courseId); 
        console.log(courses);
        dispatch(addCourse(courses));
    }
    
    useEffect(()=>{
        myCourses();
    },[])
    return (
        <div className="flex flex-wrap p-4 gap-5 ">
          {course && course.map((course) => (
            <div className="mx-5 mt-10 hover:scale-105" key={course._id}>
              <CourseCard feed={course} />
            </div>
          ))}
        </div>
      );
}

export default Learnings;