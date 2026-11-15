import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Auth.css";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const accounts = JSON.parse(
      sessionStorage.getItem("petHeavenDemoAccounts") || "[]"
    );

    const user = accounts.find(
      (account) =>
        account.email === email.trim().toLowerCase()
    );

    if (!user) {
      setError("Account not found. Please sign up first.");
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password. Please try again.");
      return;
    }

    onLogin({
      name: user.name,
      email: user.email
    });

    navigate(redirectTo, { replace: true });
  }

  return (
    <main className="auth-page">
      <div className="auth-intro">
        <span className="auth-page-label">
          WELCOME TO PET HEAVEN
        </span>

        <h1>Every Paw Deserves Love.</h1>

        <p>
          Join our community and help abandoned
          cats and dogs find their forever homes.
        </p>

        <img
          src="/images/hero-pets.jpg"
          alt="Dog and cat"
        />
      </div>

      <div className="auth-form-card">
        <h2>Welcome Back!</h2>
        <p className="auth-description">
          Sign in to your Pet Heaven account.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">
            Email Address
          </label>
          <input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="login-password">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="auth-page-btn">
            Login
          </button>
        </form>

        <div className="auth-page-divider">
          <span>OR</span>
        </div>

        <p className="auth-page-switch">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;