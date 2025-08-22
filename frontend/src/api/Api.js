import axios from 'axios'


const axiosInstance=axios.create({
    baseURL:"http://localhost:4000/api",
    headers:{
        "Content-Type": 'application/json'
    },
});


axiosInstance.interceptors.request.use((config)=>{
    const token=localStorage.getItem("token")||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTZmNzA1ZjAxMTY1ZmEwNjYxZTA4NSIsImlhdCI6MTc1NTg0ODEyOSwiZXhwIjoxNzU1OTM0NTI5fQ.s9noXg2_oj7ILD2QsiS3CvsWTpVUl-FlNgOQKiOQDPo";
    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config;
})

export default axiosInstance;