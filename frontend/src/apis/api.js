import axios from "axios";

const host = "https://screeching-matilda-mohit123-2e32ffda.koyeb.app";

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

const addUrlAPI = "/api/add";
const getUrlsAPI = "/api/get";
const deleteAPI = "/api/delete"

export { host, signupAPI, loginAPI, API, getUrlsAPI, addUrlAPI, deleteAPI };