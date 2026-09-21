import React from "react";
import { Link } from "react-router-dom";
import "./registration.css";

const Registration = () => {
  return (
    <div className="registration-page">

      <div className="registration-card">

        {/* Header */}
        <div className="registration-header">
          <h1 className="registration-title">
            Citizen Registration
          </h1>
        </div>


        {/* Registration Form */}
        <form className="registration-form">

          {/* Full Name */}
          <div className="registration-form-group">
            <label
              className="registration-form-label"
              htmlFor="name"
            >
              Full Name
            </label>

            <input
              className="registration-input"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
            />
          </div>


          {/* Mobile Number */}
          <div className="registration-form-group">
            <label
              className="registration-form-label"
              htmlFor="mobile"
            >
              Mobile Number
            </label>

            <input
              className="registration-input"
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter your mobile number"
            />
          </div>


          {/* Email */}
          <div className="registration-form-group">
            <label
              className="registration-form-label"
              htmlFor="email"
            >
              Email Address
            </label>

            <input
              className="registration-input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>


          {/* Password */}
          <div className="registration-form-group">
            <label
              className="registration-form-label"
              htmlFor="password"
            >
              Password
            </label>

            <input
              className="registration-input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>


          {/* Confirm Password */}
          <div className="registration-form-group">
            <label
              className="registration-form-label"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>

            <input
              className="registration-input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>


          {/* Register Button */}
          <button
            type="submit"
            className="registration-button"
          >
            Create Account
          </button>

        </form>


        {/* Login Link */}
        <div className="registration-footer">
          <p className="registration-footer-text">
            Already have an account?
          </p>

          <Link
            to="/"
            className="registration-login-link"
          >
            Login
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Registration;