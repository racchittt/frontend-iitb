import React from 'react'

const InstanceModal = ({setModal, data}) => {
  return (
    <div className="p-4 bg-white border rounded-md z-50 fixed">
      <div className="bg-gray-100 rounded-md">
        <div className="flex flex-col gap-2 md:flex-row justify-between px-8 md:gap-6">
        <p className="py-4 text-xl"><span className="font-bold">Course ID:</span> {data.course.id}</p>
        <p className="py-4 text-xl"><span className="font-bold">Course Code:</span> {data.course.courseId}</p>
        <p className="py-4 text-xl"><span className="font-bold">Year of Delivery:</span> {data.year}</p>
        <p className="py-4 text-xl"><span className="font-bold">Semester of Delivery:</span> {data.sem}</p>
        </div>
        <p className="px-8 py-4 text-xl"><span className="font-bold">Course Name:</span> {data.course.title}</p>
        <p className="px-8 py-4 text-xl"><span className="font-bold">Description: </span>{data.course.description}</p>
      </div>

      <button onClick={() => setModal(false)} className="my-4 rounded-md py-4 px-6 bg-blue-400">
        Cancel
      </button>
      
    </div>
  )
}

export default InstanceModal
