import axios from "axios";
import CourseCard from "./CourseCard";
import { BASE_URL } from "../utils/config";
import { useEffect, useState } from "react";

const Learnings = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const[unique,setIsUnique]=useState(false);
  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/mycourse`, { withCredentials: true });
      if (response.data && response.data.data) {
        setCourses(response.data.data);
        setIsUnique(true);
      } else {
        setError("No courses available.");
      }
    } catch (error) {
      setError("Failed to load courses.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="flex flex-wrap m-10 gap-4">
      {loading ? (
        <p className="m-auto  items-center" >Your courses are Loading....</p>
      ) : error ? (
        <p>{error}</p>
      ) : courses.length > 0 ? (
        courses.map((course) => (
          <div className="w-64 h-96 mx-2 hover:scale-105 cursor-pointer mt-6 " key={course._id}>
            <CourseCard unique={unique} feed={course.courseId}   />
          </div>
        ))
      ) : (
        <p>No courses available</p>
      )}
    </div>
   
  );
};

export default Learnings;
