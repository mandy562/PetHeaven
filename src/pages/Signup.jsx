import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const accounts = JSON.parse(
      sessionStorage.getItem("petHeavenDemoAccounts") || "[]"
    );

    const normalizedEmail = email.trim().toLowerCase();

    if (accounts.some(user => user.email === normalizedEmail)) {
      setError("This email is already registered.");
      return;
    }

    accounts.push({
      name: name.trim(),
      email: normalizedEmail,
      password
    });

    sessionStorage.setItem(
      "petHeavenDemoAccounts",
      JSON.stringify(accounts)
    );

    navigate("/login", { replace: true });
  }

  return (
    <main className="auth-page">
      <div className="auth-intro">
        <span className="auth-page-label">
          JOIN OUR COMMUNITY
        </span>

        <h1>Make a Difference Today.</h1>

        <p>
          Create an account and become part of
          our mission to give every pet a loving home.
        </p>

        <img
          src="/images/hero-pets.jpg"
          alt="Dog and cat"
        />
      </div>

      <div className="auth-form-card">
        <h2>Create Account</h2>
        <p className="auth-description">
          Join the Pet Heaven family.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="signup-name">Full Name</label>
          <input
            id="signup-name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="signup-email">Email Address</label>
          <input
            id="signup-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />

          <label htmlFor="signup-confirm">
            Confirm Password
          </label>
          <input
            id="signup-confirm"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="auth-page-btn">
            Sign Up
          </button>
        </form>

        <div className="auth-page-divider">
          <span>OR</span>
        </div>

        <p className="auth-page-switch">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}

export default Signup;