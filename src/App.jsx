import React from "react";
import AddCourse from "./components/AddCourse";
import ListCourses from "./components/ListCourses";
import AddInstance from "./components/AddInstance";
import ListInstances from "./components/ListInstances";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center p-4 md:p-16 overflow-x-hidden">
        <p className="text-2xl font-bold">Internship Application Assignment</p>
        <p className="text-lg">Application Software Centre, IIT Bombay</p>
        <div className="flex flex-col w-full items-center justify-center">
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5000,
            }}
          />
          <div className="flex lg:gap-6 flex-col lg:flex-row justify-between lg:w-1/2">
            <AddCourse />
            <AddInstance />
          </div>
          <div className="w-full flex flex-col gap-6 items-center">
            <ListCourses />
            <ListInstances />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
