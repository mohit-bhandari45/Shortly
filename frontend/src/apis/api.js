import axios from "axios";

const host = "http://localhost:4000";

const API = axios.create({
    baseURL: host
})

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

const signupAPI = `${host}/auth/signup`;
const loginAPI = `${host}/auth/login`;

export { signupAPI, loginAPI,API };