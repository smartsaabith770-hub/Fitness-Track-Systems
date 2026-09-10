import { useState } from "react";
import "./Signup.css";

function Signup({ goToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMessage("Please fill all fields.");
      return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    goToLogin();
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-logo">
          FITNESS<span>TRACK</span>
        </div>

        <h1>Create Account</h1>

        <p className="signup-subtitle">
          Start your fitness journey today.
        </p>

        <form onSubmit={handleSignup}>
          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

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
            placeholder="Create a password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {message && (
            <p className="signup-message">
              {message}
            </p>
          )}

          <button type="submit">
            Create Account →
          </button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <button onClick={goToLogin}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;