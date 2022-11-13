import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `http:://localhost:666`,
})
export default {axiosClient}