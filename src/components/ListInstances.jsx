import React from "react";
import Instance from "../services/Instance";
import { useState } from "react";

const ListInstances = () => {
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState();
  const [sem, setSem] = useState();
  const [instances, setInstances] = useState([]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await Instance.getInstance(year, sem);
      console.log(res.data);
      setInstances(res.data.data);
      //   alert(res.data.message)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-8 w-full py-4">
      <form action="" className="">
        <div className="flex gap-6 py-4">
          <input
            type="text"
            className="py-2 px-4 rounded-md border "
            name="year"
            id="year"
            placeholder="Year"
            onChange={(e) => setYear(e.target.value)}
            required
          />
          <select
            name="sem"
            id="sem"
            onChange={(e) => setSem(e.target.value)}
            className="border rounded-md px-3"
          >
            <option value="" disabled={true} selected>
                {"Select Semester"}
            </option>
            {instances.map((instances) => (
                <option key={instances.id} value={instances.sem}>
                    {instances.sem}
                </option>
            ))}
          </select>
          {/* <input
            type="text"
            className="py-2 px-4 rounded-md border "
            name="sem"
            id="sem"
            placeholder="Semester"
            onChange={(e) => setSem(e.target.value)}
            required
          /> */}
          <button
            className="py-2 px-4 w-1/4 text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-md text-center"
            onClick={(e) => handleSubmit(e)}
            disabled={loading}
          >
            {loading ? "Listing..." : "List Instances"}
          </button>
        </div>
      </form>
      {instances.length > 0 && (
        <table className="py-8 w-full ">
          <tr>
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
          </tr>
          {instances.map((instances) => (
            <tr className="border odd:bg-blue-100">
              <td className="p-2">{instances.course.title}</td>
              <td className="p-2">
                {instances.year}-{instances.sem}
              </td>
              <td className="p-2">{instances.course.courseId}</td>
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
      {/* {isModalOpen && <Modal setModal={setIsModalOpen} data={courseModal} />}
      {isDeleteModalOpen && (
        <DeleteModal setModal={setIsDeleteModalOpen} data={courseModal} />
      )} */}
    </div>
  );
};

export default ListInstances;
