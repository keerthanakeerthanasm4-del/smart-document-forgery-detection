import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">

        <h1>Smart Document Forgery Detection</h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="login-input"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="login-input"
        />

        <button
          className="login-btn"
          onClick={() => navigate("/home")}
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;