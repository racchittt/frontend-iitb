import React from "react";
import { useState } from "react";
import Course from "../services/Course";
import CourseModal from "./CourseModal";
import DeleteModal from "./DeleteModal";

const ListCourses = () => {
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState([]);
  const [courseModal, setCourseModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await Course.getAllCourses();
      console.log(res.data);
      setCourse(res.data.data);
    //   alert(res.data.message)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = async (id) => {
    try {
      const res = await Course.getCourseById(id);
      console.log(res.data);
      console.log(res.data.data)
      setCourseModal(res.data.data);
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const openDeleteModal = async (id) => {
    try {
      const res = await Course.getCourseById(id);
      setCourseModal(res.data.data)
      setIsDeleteModalOpen(true)
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center gap-8 md:w-1/2 py-4">
      <button
        className="py-2 px-4 w-1/4 text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-md text-center"
        onClick={(e) => handleSubmit(e)}
        disabled={loading}
      >
        {loading ? "Listing..." : "List courses"}
      </button>
      {course.length > 0 && (
        <table className="py-8 w-full ">
          <tr>
            <th className="border p-2 bg-blue-500 text-white font-medium w-3/5">
              Course Title
            </th>
            <th className="border p-2 bg-blue-500 text-white font-medium w-1/5">
              Code
            </th>
            <th className="border p-2 bg-blue-500 text-white font-medium">
              Action
            </th>
          </tr>
          {course.map((course) => (
            <tr className="border odd:bg-blue-100">
              <td className="p-2">{course.title}</td>
              <td className="p-2">{course.courseId}</td>
              <td className="p-2 flex gap-4">
                <button type="button" onClick={() => openModal(course.id)}>
                  View
                </button>
                <button
                  type="button"
                  onClick={() => openDeleteModal(course.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      )}
      {isModalOpen && <CourseModal setModal={setIsModalOpen} data={courseModal} />}
      {isDeleteModalOpen && (
        <DeleteModal setModal={setIsDeleteModalOpen} data={courseModal} />
      )}
    </div>
  );
};

export default ListCourses;
