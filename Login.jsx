import { useState } from "react";
import "./Login.css";

function Login({ goToSignup, goToDashboard }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter email and password.");
      return;
    }

    localStorage.setItem("userEmail", email);

    goToDashboard();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          FITNESS<span>TRACK</span>
        </div>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to continue your fitness journey.
        </p>

        <form onSubmit={handleLogin}>
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {message && (
            <p className="login-message">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="login-btn"
          >
            Login →
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <button onClick={goToSignup}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;