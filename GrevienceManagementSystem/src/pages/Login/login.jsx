import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">
          <h1 className="login-title">
            Grievance Management System
          </h1>

          <p className="login-subtitle">
            Hyderabad Growth Corridor Limited
          </p>
        </div>

        <form className="login-form">

          <div className="login-form-group">
            <label
              className="form-label"
              htmlFor="email"
            >
              Email / User ID
            </label>

            <input
              className="login-input"
              type="text"
              id="email"
              name="email"
              placeholder="Enter your Email / User ID"
            />
          </div>

          <div className="form-group">
            <label
              className="login-form-group"
              htmlFor="password"
            >
              Password
            </label>

            <input
              className="login-input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="login-options">

            <button
              type="button"
              className="forgot-password"
            >
              Forgot Password?
            </button>

          </div>

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>

        {/* Registration Link */}
        <div className="register-section">
          <p className="register-text">
            Don't have an account?
          </p>

          <Link
            to="/register"
            className="register-link"
          >
            Register
          </Link>
        </div>

        <div className="login-footer">
          <p className="footer-text">
            Integrated Grievance Management System
          </p>
        </div>

      </div>

    </div>
  );
};

export default Login;