import React from 'react'
import { useState } from 'react';
import Course from '../services/Course'
import toast from 'react-hot-toast';

const AddCourse = () => {
  
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let body = {
        "title" : title,
        "courseId": courseId,
        "description": description
      }
      let result = await Course.addCourse(body);
      console.log(result)
      toast.success(result.data.message)
      setLoading(false)
    }
    catch(e){
      console.log(e)
      toast.error(e)
    }
  }
  return (
    <div className='py-8 px-4 md:px-0 w-full'>
      <form action="" >
        <div className='flex flex-col p-4 gap-6'>
          <input type="text" className='py-2 px-4 rounded-md border ' name='title' id='title' placeholder='Course title' onChange={(e) => setTitle(e.target.value)} required/>
          <input type="text" className='py-2 px-4 rounded-md border ' name='code' id='code' placeholder='Course code' onChange={(e) => setCourseId(e.target.value)} required/>
          <textarea type="text" className='py-2 px-4 rounded-md border ' name='description' id='description' placeholder='Course description' onChange={(e) => setDescription(e.target.value)} required/>
          <button className='py-2 text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-md text-center' onClick={(e) => handleSubmit(e)} disabled={loading}>
            {loading ? "Adding...":"Add Course"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddCourse
