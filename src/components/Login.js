import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [form, setForm] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await loginUser(form);
            localStorage.setItem("token", res.data.access_token);
            alert("Login successful!");
            navigate("/dashboard");
        } catch (err) {
            alert(err.response.data.detail || "Login failed");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" name="username" className="form-control" placeholder="Username" value={form.username} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input type="password" name="password" className="form-control" placeholder="Password" value={form.password} onChange={handleChange} required />
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;