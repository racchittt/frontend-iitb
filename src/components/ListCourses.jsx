import React from "react";
import { useState } from "react";
import Course from "../services/Course";
import CourseModal from "./CourseModal";
import DeleteModal from "./DeleteModal";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-hot-toast";

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
      setLoading(false);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const openModal = async (id) => {
    try {
      const res = await Course.getCourseById(id);
      console.log(res.data);
      console.log(res.data.data);
      setCourseModal(res.data.data);
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch course details");
    }
  };
  const openDeleteModal = async (id) => {
    try {
      const res = await Course.getCourseById(id);
      setCourseModal(res.data.data);
      setIsDeleteModalOpen(true);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch course details");
    }
  };
  const removeCourse = (id) => {
    setCourse((prevCourses) =>
      prevCourses.filter((course) => !(course.id === id))
    );
  };
  return (
    <div className="flex flex-col items-center gap-8 md:w-1/2 py-4">
      <button
        className="py-2 px-4 w-full lg:w-1/4 text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-md text-center"
        onClick={(e) => handleSubmit(e)}
        disabled={loading}
      >
        {loading ? "Listing..." : "List courses"}
      </button>
      {course.length > 0 && (
        <table className="py-8 w-full ">
          <thead>
            <tr>
              <th className="border p-2 bg-blue-500 text-white font-medium w-4/5">
                Course Title
              </th>
              <th className="border p-2 bg-blue-500 text-white font-medium w-1/5">
                Code
              </th>
              <th className="border p-2 bg-blue-500 text-white font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {course.map((course) => (
              <tr key={course.id} className="border odd:bg-blue-100">
                <td className="p-2">{course.title}</td>
                <td className="p-2">{course.courseId}</td>
                <td className="p-2 flex gap-4">
                  <button type="button" onClick={() => openModal(course.id)}>
                    <SearchIcon className="bg-black text-white rounded-sm" />
                  </button>
                  <button
                    type="button"
                    onClick={() => openDeleteModal(course.id)}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isModalOpen && (
        <CourseModal setModal={setIsModalOpen} data={courseModal} />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          setModal={setIsDeleteModalOpen}
          data={courseModal}
          removeCourse={removeCourse}
        />
      )}
    </div>
  );
};

export default ListCourses;
