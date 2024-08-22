import React from 'react'
import AddCourse from './components/AddCourse'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center p-16'>
      <p className='text-2xl font-bold'>Internship Application Assignment</p>
      <p className='text-lg'>Application Software Centre, IIT Bombay</p>
      <AddCourse/>
    </div>
  )
}

export default App
