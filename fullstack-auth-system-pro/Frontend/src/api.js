import axios from "axios";

export const API_BASE = "http://localhost:5000/api";

export const api = axios.create({
    baseURL: API_BASE,   // FIXED (capital L)
});

// Add token automatically
export const authApi = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: API_BASE,  // FIXED
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
        },
    });
};
