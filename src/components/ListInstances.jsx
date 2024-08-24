import React from "react";
import Instance from "../services/Instance";
import { useState } from "react";
import InstanceModal from "./InstanceModal";
import DeleteInstanceModal from "./DeleteInstanceModal";
import SearchIcon from "@mui/icons-material/Search";
import Delete from "@mui/icons-material/Delete";
import toast from "react-hot-toast";

const ListInstances = () => {
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState([]);
  const [sem, setSem] = useState("");
  const [instances, setInstances] = useState([]);
  const [instanceModal, setInstanceModal] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (year.length === 4 && sem.length > 0) {
      try {
        const res = await Instance.getInstance(year, sem);
        setInstances(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Check your input");
      setLoading(false);
    }
  };

  const handleYear = async (e) => {
    const inputYear = e.target.value;
    setYear(inputYear);
    if (inputYear.length === 4) {
      try {
        const res = await Instance.getInstaceByYear(inputYear);
        // console.log(res.data);
        const fetchInstance = res.data.data;
        const unique = [...new Set(fetchInstance.map((inst) => inst.sem))]; //set filters out unique values
        setSemester(unique);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const openModal = async (id, year, sem) => {
    try {
      const res = await Instance.getInstanceByCourseId(year, sem, id);
      setInstanceModal(res.data.data);
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const openDeleteModal = async (id, year, sem) => {
    try {
      const res = await Instance.getInstanceByCourseId(year, sem, id);
      // console.log("Yooo", res.data)
      setInstanceModal(res.data.data);
      setIsDeleteModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  }
  const removeInstance = (id, year, sem) => {
    setInstances((prevInstances) =>
      prevInstances.filter(
        (instance) =>
          !(instance.course.id === id && instance.year === year && instance.sem === sem)
      )
    );
  };
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 py-4">
      <form action="" className="">
        <div className="flex flex-col md:flex-row gap-6 py-4">
          <input
            type="text"
            className="py-2 px-4 rounded-md border "
            name="year"
            id="year"
            placeholder="Year"
            onChange={handleYear}
            required
          />
          <select
            name="sem"
            id="sem"
            onChange={(e) => setSem(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="" disabled={true} selected>
              {"Select Semester"}
            </option>
            {semester.map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
          <button
            className="py-2 px-4 w-full lg:w-1/4 text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-md text-center"
            onClick={(e) => handleSubmit(e)}
            disabled={loading}
          >
            {loading ? "Listing..." : "List Instances"}
          </button>
        </div>
      </form>
      {instances.length > 0 && (
        <table className="py-8 w-full lg:w-1/2 ">
          <thead>
            <th className="border p-2 bg-blue-500 text-white font-medium w-3/5">
              Course Title
            </th>
            <th className="border p-2 bg-blue-500 text-white font-medium w-1/5">
              Year-Sem
            </th>
            <th className="border p-2 bg-blue-500 text-white font-medium">
              Code
            </th>
            <th className="border p-2 bg-blue-500 text-white font-medium">
              Action
            </th>
          </thead>
          {instances.map((instance) => (
            <tr key={instance.id} className="border odd:bg-blue-100">
              <td className="p-2">{instance.course.title}</td>
              <td className="p-2">
                {instance.year}-{instance.sem}
              </td>
              <td className="p-2">{instance.course.courseId}</td>
              <td className="p-2 flex gap-4">
                <button
                  type="button"
                  onClick={() =>
                    openModal(
                      instance.course.id,
                      instance.year,
                      instance.sem
                    )
                  }
                >
                  <SearchIcon className="bg-black text-white rounded-sm" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    openDeleteModal(
                      instance.course.id,
                      instance.year,
                      instance.sem
                    )
                  }
                >
                  <Delete />
                </button>
              </td>
            </tr>
          ))}
        </table>
      )}
      {isModalOpen && (
        <InstanceModal setModal={setIsModalOpen} data={instanceModal} />
      )}
      {isDeleteModalOpen && (
        <DeleteInstanceModal
          setModal={setIsDeleteModalOpen}
          data={instanceModal}
          removeInstance={removeInstance}
        />
      )}
    </div>
  );
};

export default ListInstances;
