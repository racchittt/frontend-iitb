import React from 'react'
import AddCourse from './components/AddCourse'
import ListCourses from './components/ListCourses'
import AddInstance from './components/AddInstance'
import ListInstances from './components/ListInstances'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4 md:p-16'>
      <p className='text-2xl font-bold'>Internship Application Assignment</p>
      <p className='text-lg'>Application Software Centre, IIT Bombay</p>
      <div className='flex md:gap-6 flex-col md:flex-row justify-between md:w-1/2' >
      <AddCourse/>
      <AddInstance/>
      </div>
      <ListCourses/>
      <ListInstances/>
    </div>
  )
}

export default App
