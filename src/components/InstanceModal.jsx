import React from "react";

const InstanceModal = ({ setModal, data }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={() => setModal(false)}
      ></div>
      <div className="relative p-4 bg-white border rounded-md  w-11/12 lg:w-1/2 mx-auto">
        <div className="bg-gray-100 rounded-md">
          <div className="flex flex-col lg:flex-row justify-between px-4 md:px-8">
            <p className="py-2 md:py-4 md:text-xl">
              <span className="font-bold">Course ID:</span> {data.course.id}
            </p>
            <p className="py-2 md:py-4 md:text-xl">
              <span className="font-bold">Course Code:</span>{" "}
              {data.course.courseId}
            </p>
            <p className="py-2 md:py-4 md:text-xl">
              <span className="font-bold">Year of Delivery:</span> {data.year}
            </p>
            <p className="py-2 md:py-4 md:text-xl">
              <span className="font-bold">Semester of Delivery:</span>{" "}
              {data.sem}
            </p>
          </div>
          <p className="px-4 md:px-8 py-2 md:py-4 md:text-xl">
            <span className="font-bold">Course Name:</span> {data.course.title}
          </p>
          <p className="px-4 md:px-8 py-2 md:py-4 md:text-xl">
            <span className="font-bold">Description: </span>
            {data.course.description}
          </p>
        </div>

        <button
          onClick={() => setModal(false)}
          className="my-4 rounded-md py-4 px-6 bg-blue-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default InstanceModal;
