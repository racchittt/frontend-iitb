import axios from "axios";

class Course{
    addCourse(body){
        try{
            return axios.post("http://localhost:8080/api/courses",body)
        }
        catch(error){
            throw error;
        }
    }

    getAllCourses(){
        try {
            return axios.get("http://localhost:8080/api/courses")
        } catch (error) {
            console.log(error)
        }
    }

    getCourseById(id){
        try {
            return axios.get("http://localhost:8080/api/courses/" + id)
        } catch (error) {
            console.log(error)
        }
    }
    deleteCourse(id){
        try {
            return axios.delete("http://localhost:8080/api/courses/" + id)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new Course();