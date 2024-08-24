import React from "react";
import Instance from "../services/Instance";
import toast from "react-hot-toast";

const DeleteInstanceModal = ({ setModal, data }) => {
  const deleteInstance = async (id, sem, year) => {
    try {
      const del = await Instance.deleteInstance(year, sem, id);
      toast.success(del.data.message);
      setModal(false);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={() => setModal(false)}
      ></div>
      <div className="relative p-4 bg-white border rounded-md  w-11/12 lg:w-1/2 mx-auto">
        <p className="text-xl md:text-2xl font-bold py-4 ">
          Are you sure you want to delete this Instance?
        </p>
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

        <div className="flex gap-6">
          <button
            onClick={() => deleteInstance(data.course.id, data.sem, data.year)}
            className="my-4 rounded-md py-4 px-6 bg-red-700 text-sm md:text-md font-medium text-white"
          >
            Confirm
          </button>
          <button
            onClick={() => setModal(false)}
            className="my-4 rounded-md py-4 px-6 bg-blue-400 text-sm md:text-md font-medium text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteInstanceModal;
