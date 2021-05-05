import axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost:5001/react--clone-6137b/us-central1/api'
})

export default instance;