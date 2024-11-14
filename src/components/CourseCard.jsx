import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { addCourse } from "../utils/courseSlice";

const CourseCard = ({unique, feed }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { courseName, coursePrice, description, courseUrl, courseRating, _id } = feed;

  const handleBuy = async (userID, courseId) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/course/buy/${userID}/${courseId}`,
        {},
        { withCredentials: true }
      );
      const { course } = res.data.data;
      dispatch(addCourse([course]));  

      
    alert("Course Bought successfully!!")
    } catch (error) {
      console.error("Error buying course:", error.message);
    }
  };

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const totalStars = 5;

    return (
      <div className="flex">
        {[...Array(totalStars)].map((_, index) => (
          <span
            key={index}
            className={`mx-1 ${index < filledStars ? "text-yellow-400" : "text-gray-300"}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="object-contain p-4 border rounded ">
      <div>
        <img src={courseUrl} alt={courseName} className="w-56 h-40" />
      </div>
      <div className="p-2">
        <h2 className="font-bold mx-1 text-lg">{courseName}</h2>
        <h3 className="font-semibold text-gray-400 ">{description}</h3>
        <div className="flex items-center">
          <span className="ml-2 text-sm text-gray-600">({courseRating})</span>
          {renderStars(courseRating)}
        </div>
        <p className="mt-2 text-lg font-semibold text-green-500">${coursePrice}</p>
       {unique ? (<button
          className="bg-[#A5E2D0] p-2 my-2 text-black w-32 text-lg cursor-pointer"
          onClick={() => handleBuy(user?._id, _id)}
        >
           View Content
        </button>):<button
          className="bg-[#A5E2D0] p-2 my-2 text-black w-32 text-lg cursor-pointer"
          onClick={() => handleBuy(user?._id, _id)}
        >
          Buy now
        </button>}
      </div>
    </div>
  );
};

export default CourseCard;
