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
}

export default new Course();