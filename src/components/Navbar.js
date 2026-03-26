import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../utils/auth";

const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedIn = isAuthenticated();

    const handleLogout = () => {
        logout();
        alert("Logged out successfully");
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Smart Aggregator</Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">

                        {isLoggedIn ? (
                            <li className="nav-item">
                                <button
                                    className="btn btn-danger"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;