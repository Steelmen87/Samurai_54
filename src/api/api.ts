import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "745f2516-5f87-4b00-acd9-4642814a1bb5"

    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    /*getAuth() {
        return instance.get(`auth/me`)
            .then(data => data.data);
    },*/
    getProfile(userId: number) {
        return profileAPI.getProfile(userId);
    }

}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
            .then(data => data.data);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
            .then(res => res.data);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(res => res.data);
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(data => data.data);
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})

    }
}

