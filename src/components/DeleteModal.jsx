import React from 'react'
import Course from '../services/Course'

const DeleteModal = ({setModal, data}) => {
    const deleteCourse = async(id) => {
        try {
            const del = await Course.deleteCourse(id);
            alert(del.data.message);
            setModal(false);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="p-4 bg-white border rounded-md z-50 fixed">
    <p className='text-2xl font-bold py-4 '>Are you sure you want to delete this course?</p>
    <p className='text-lg font-semibold pb-4 '>All the instances of this course will also be deleted.</p>
      <div className="bg-gray-100 rounded-md">
        <div className="flex justify-between px-8">
        <p className="py-4 text-xl"><span className="font-bold">Course ID:</span> {data.id}</p>
        <p className="py-4 text-xl"><span className="font-bold">Course Code:</span> {data.courseId}</p>
        </div>
        <p className="px-8 py-4 text-xl"><span className="font-bold">Course Name:</span> {data.title}</p>
        <p className="px-8 py-4 text-xl"><span className="font-bold">Description: </span>{data.description}</p>
      </div>


    <div className='flex gap-6'>
      <button onClick={() => deleteCourse(data.id)} className="my-4 rounded-md py-4 px-6 bg-red-700 font-medium text-white">
        Confirm
      </button>
      <button onClick={() => setModal(false)} className="my-4 rounded-md py-4 px-6 bg-blue-400 font-medium text-white">
        Cancel
      </button>
    </div>
    </div>
)
}

export default DeleteModal
