import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../utils/auth";

const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedIn = isAuthenticated();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav style={{
            background: "#281616",
            color: "white",
            padding: "15px",
            boxShadow: "0 2px 10px rgba(228, 219, 219, 0.1)"
        }}>
            <div style={{
                maxWidth: "1200px",
                margin: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h3>SMART AGGREGATOR</h3>

                <div>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            style={{
                                padding: "8px 12px",
                                background: "red",
                                color: "white",
                                border: "none",
                                borderRadius: "6px"
                            }}
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;