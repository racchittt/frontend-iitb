import React from "react";

const CourseModal = ({ setModal, data }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setModal(false)}></div>
      <div className="relative bg-white p-4 md:p-8 border rounded-md w-11/12 md:w-1/2 mx-auto max-h-screen overflow-y-auto">
        <div className="bg-gray-100 rounded-md">
          <div className="flex flex-col md:flex-row justify-between px-4 md:px-8">
            <p className="py-4 md:text-xl"><span className="font-bold">Course ID:</span> {data.id}</p>
            <p className="py-4 md:text-xl"><span className="font-bold">Course Code:</span> {data.courseId}</p>
          </div>
          <p className="px-4 md:px-8 py-4 md:text-xl"><span className="font-bold">Course Name:</span> {data.title}</p>
          <p className="px-4 md:px-8 py-4 md:text-xl"><span className="font-bold">Description: </span>{data.description}</p>
        </div>
        <button onClick={() => setModal(false)} className="my-4 rounded-md py-2 px-4 bg-blue-500 text-white">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CourseModal;
