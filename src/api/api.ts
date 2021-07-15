import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        "API-KEY":"602a4fcd-8f84-416e-bd76-09547f422744"
    }
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
}

export const getFollow = (userId:string) => {
    return instance.get(`profile/` + userId)
        .then(data => data.data);
}

export const getAuth = () => {
    return instance.get(`auth/me`)
        .then(data => data.data);
}