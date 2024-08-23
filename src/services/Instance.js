import axios from "axios";

class Instance {
    addInstance(body){
        try {
            return axios.post("http://localhost:8080/api/instances", body)
        } catch (error) {
            throw error;
        }
    }
    getInstance(year,sem){
        try {
            return axios.get(`http://localhost:8080/api/instances/${year}/${sem}`)
        } catch (error) {
            throw error;
        }
    }
    getInstanceByCourseId(year,sem,id){
        try {
            return axios.get(`http://localhost:8080/api/instances/${year}/${sem}/${id}`)
        } catch (error) {
            throw error;
        }
    }
    deleteInstance(year,sem,id){
        try {
            return axios.delete(`http://localhost:8080/api/instances/${year}/${sem}/${id}`)
        } catch (error) {
            throw error;
        }
    }
}
export default new Instance();