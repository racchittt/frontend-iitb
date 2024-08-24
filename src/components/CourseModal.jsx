import React from "react";

const CourseModal = ({ setModal, data }) => {
  return (
    <div className="p-4 bg-white border rounded-md z-50 fixed w-1/2">
      <div className="bg-gray-100 rounded-md">
        <div className="flex justify-between px-8">
        <p className="py-4 text-xl"><span className="font-bold">Course ID:</span> {data.id}</p>
        <p className="py-4 text-xl"><span className="font-bold">Course Code:</span> {data.courseId}</p>
        </div>
        <p className="px-8 py-4 text-xl"><span className="font-bold">Course Name:</span> {data.title}</p>
        <p className="px-8 py-4 text-xl"><span className="font-bold">Description: </span>{data.description}</p>
      </div>

      <button onClick={() => setModal(false)} className="my-4 rounded-md py-4 px-6 bg-blue-400">
        Cancel
      </button>
      
    </div>
  );
};

export default CourseModal;
