import axios from "axios";

const banco = axios.create({
    baseURL: 'http://localhost:8080'
})


export default banco