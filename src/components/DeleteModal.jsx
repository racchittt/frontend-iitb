import React from "react";
import Course from "../services/Course";
import toast from "react-hot-toast";

const DeleteModal = ({ setModal, data, removeCourse}) => {
  const deleteCourse = async (id) => {
    try {
      const del = await Course.deleteCourse(id);
      removeCourse(id);
      toast.success(del.data.message);
      setModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={()=>setModal(false)}></div>
      <div className="relative p-4 bg-white md:p-8 border rounded-md w-11/12 md:w-1/2 mx-auto max-h-screen overflow-y-auto">
        <p className="text-lg md:text-2xl font-bold py-4 ">
          Are you sure you want to delete this course?
        </p>
        <p className="text-md md:text-lg font-semibold pb-4 ">
          All the instances of this course will also be deleted.
        </p>
        <div className="bg-gray-100 rounded-md">
          <div className="flex justify-between px-4 md:px-8">
            <p className="py-2 md:py-4 md:text-xl">
              <span className="font-bold">Course ID:</span> {data.id}
            </p>
            <p className="py-2 md:py-4 md:text-xl">
              <span className="font-bold">Course Code:</span> {data.courseId}
            </p>
          </div>
          <p className="px-4 md:px-8 py-2 md:py-4 md:text-xl">
            <span className="font-bold">Course Name:</span> {data.title}
          </p>
          <p className="px-4 md:px-8 py-2 md:py-4 md:text-xl">
            <span className="font-bold">Description: </span>
            {data.description}
          </p>
        </div>

        <div className="flex gap-6">
          <button
            onClick={() => deleteCourse(data.id)}
            className="my-4 rounded-md py-4 px-6 bg-red-700 font-medium text-white"
          >
            Confirm
          </button>
          <button
            onClick={() => setModal(false)}
            className="my-4 rounded-md py-4 px-6 bg-blue-400 font-medium text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
