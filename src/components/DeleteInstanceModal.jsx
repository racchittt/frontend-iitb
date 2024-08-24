import React from 'react'
import Instance from '../services/Instance';

const DeleteInstanceModal = ({setModal, data}) => {
    const deleteInstance = async (id,sem,year) =>{
        try {
            const del = await Instance.deleteInstance(year,sem,id)
            alert(del.data.message)
            setModal(false)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="p-4 bg-white border rounded-md z-50 fixed">
      <p className="text-2xl font-bold py-4 ">
        Are you sure you want to delete this Instance?
      </p>
      <div className="bg-gray-100 rounded-md">
        <div className="flex justify-between px-8">
        <p className="py-4 text-xl"><span className="font-bold">Course ID:</span> {data.course.id}</p>
        <p className="py-4 text-xl"><span className="font-bold">Course Code:</span> {data.course.courseId}</p>
        <p className="py-4 text-xl"><span className="font-bold">Year of Delivery:</span> {data.year}</p>
        <p className="py-4 text-xl"><span className="font-bold">Semester of Delivery:</span> {data.sem}</p>
        </div>
        <p className="px-8 py-4 text-xl"><span className="font-bold">Course Name:</span> {data.course.title}</p>
        <p className="px-8 py-4 text-xl"><span className="font-bold">Description: </span>{data.course.description}</p>
      </div>

      <div className="flex gap-6">
        <button
          onClick={() => deleteInstance(data.course.id, data.sem, data.year)}
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
  )
}

export default DeleteInstanceModal
