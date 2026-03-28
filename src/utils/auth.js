import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

// Login + store token
export const loginUser = async (data) => {
    const res = await API.post("/login", data);
    localStorage.setItem("token", res.data.access_token);
    return res;
};

// Check login
export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};

// Logout
export const logout = () => {
    localStorage.removeItem("token");
};