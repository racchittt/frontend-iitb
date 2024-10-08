import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Course from "../services/Course";
import toast from "react-hot-toast";
import Instance from "../services/Instance";

const AddInstance = () => {
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [course, setCourse] = useState([]);
  const [year, setYear] = useState("");
  const [sem, setSem] = useState("");
  const [courseId, setCourseId] = useState();

  useEffect(() => {
    fetchCourses();
  }, [refresh]);

  const fetchCourses = async () => {
    try {
      const res = await Course.getAllCourses();
      setCourse(res.data.data);
      setRefresh(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(year.length === 4 && !isNaN(year) && !isNaN(sem) && sem.length > 0  && sem.length < 3 && courseId ){
    try {
      let body = {
        year: year,
        courseId: courseId,
        sem: sem,
      };
      let result = await Instance.addInstance(body);
      console.log(result);
      console.log(result.data.message);
      toast.success(result.data.message);
      setYear("")
      setSem("")
      setCourseId("")
      setLoading(false);
    } catch (e) {
      console.log(e);
      toast.error(e)
    }
  }
  else{
    toast.error("Check your input")
    setLoading(false)
  }
  };

  return (
    <div className="flex flex-col py-8">
      <div className="px-4">
        <div className="flex flex-wrap py-4 gap-4">
          <select
            name="courses"
            id="courses"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            className="border rounded-md px-3 py-2 w-2/3"
          >
            <option value="" disabled={true} selected>
              {"Select course"}
            </option>
            {course.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title} ({course.courseId})
              </option>
            ))}
          </select>
          <button
            className="py-2 px-4  text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-md text-center"
            onClick={(e) => setRefresh(true)}
            disabled={refresh}
          >
            {refresh ? "Fetching..." : "Refresh"}
          </button>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 py-4">
          <input
            type="text"
            className="py-2 px-4 rounded-md border "
            name="year"
            id="year"
            value={year}
            placeholder="Year"
            onChange={(e) => setYear(e.target.value)}
            required
          />
          <input
            type="text"
            className="py-2 px-4 rounded-md border "
            name="sem"
            id="sem"
            value={sem}
            placeholder="Semester"
            onChange={(e) => setSem(e.target.value)}
            required
          />
        </div>
        <button
          className="py-2 text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-md text-center w-full"
          onClick={(e) => handleSubmit(e)}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Instance"}
        </button>
      </div>
    </div>
  );
};

export default AddInstance;
