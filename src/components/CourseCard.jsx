import React from "react";

const CourseCard = ({ feed }) => {
    const { courseName, coursePrice, description, courseUrl, courseRating } = feed;

    // Render stars based on the course rating
    const renderStars = (rating) => {
        const filledStars = Math.floor(rating);
        const totalStars = 5;

        return (
            <div className="flex">
                {[...Array(totalStars)].map((_, index) => (
                    <span key={index} className={`mx-1 ${index < filledStars ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="object-contain p-4 border rounded  ">
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
            </div>
        </div>
    );
};

export default CourseCard;
