import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `http:://localhost:666`,
    headers:{
        Accept: '*/*',
        "Content-Type": "application/json"
    }
})
export default {axiosClient}