import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../context/useAuth.jsx"

/* -------------------- Reusable Components -------------------- */
const InputField = ({ id, type, label, value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-400">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-white shadow-sm 
                 focus:border-teal-400 focus:ring-teal-400 sm:text-sm p-2"
    />
  </div>
);

const PrimaryButton = ({ children, ...props }) => (
  <button
    {...props}
    className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium 
               text-gray-900 bg-teal-400 hover:bg-teal-300 disabled:opacity-50 disabled:cursor-not-allowed 
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 transition-colors duration-200"
  >
    {children}
  </button>
);

const SwitchAuth = ({ text, buttonText, onClick }) => (
  <div className="mt-4 text-center">
    <p className="text-gray-400 text-sm">{text}</p>
    <button
      onClick={onClick}
      className="text-teal-400 hover:text-teal-300 font-medium transition-colors duration-200"
    >
      {buttonText}
    </button>
  </div>
);

const FormMessages = ({ error, success }) => (
  <>
    {error && <p className="text-red-400 text-sm text-center">{error}</p>}
    {success && <p className="text-green-400 text-sm text-center">{success}</p>}
  </>
);

/* -------------------- Login Form -------------------- */
const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // Make a POST request to your login endpoint
      const response = await axios.post("http://localhost:3001/api/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setSuccess("Login successful! Redirecting...");
        console.log("Login successful:", response.data);
        login(response.data.user);
        localStorage.setItem("token", response.data.token);
        // You would typically store a token here
        setTimeout(() => navigate("/"), 1500);
      }
    } catch (err) {
      if (err.response) {
        // The request was made and the server responded with a status code
        if (err.response.status === 401) {
          setError("Invalid email or password.");
        } else {
          setError(err.response.data.message || "An unexpected error occurred.");
        }
      } else {
        // The request was made but no response was received
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-400">Log In</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField id="email-login" type="email" label="Email" value={email} onChange={setEmail} required />
        <InputField id="password-login" type="password" label="Password" value={password} onChange={setPassword} required />
        <FormMessages error={error} success={success} />
        <PrimaryButton type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </PrimaryButton>
      </form>
      <SwitchAuth text="Don't have an account?" buttonText="Sign Up" onClick={() => navigate("/signup")} />
    </div>
  );
};

/* -------------------- Sign Up Form -------------------- */
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (password !== confirmPassword) {
      setLoading(false);
      return setError("Passwords don't match.");
    }

    try {
      const response = await axios.post("http://localhost:3001/api/auth/signup", {
        name: email,
        email,
        password,
      });

      if (response.status === 201) {
        setSuccess("Sign up successful! Redirecting to login...");
        console.log("Sign up successful:", response.data);
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 409) {
          setError("A user with that email already exists.");
        } else {
          setError(err.response.data.message || "An unexpected error occurred.");
        }
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-400">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField id="email-signup" type="email" label="Email" value={email} onChange={setEmail} required />
        <InputField id="password-signup" type="password" label="Password" value={password} onChange={setPassword} required />
        <InputField id="confirmPassword-signup" type="password" label="Confirm Password" value={confirmPassword} onChange={setConfirmPassword} required />
        <FormMessages error={error} success={success} />
        <PrimaryButton type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </PrimaryButton>
      </form>
      <SwitchAuth text="Already have an account?" buttonText="Log In" onClick={() => navigate("/login")} />
    </div>
  );
};

export default function Auth({ isLoginView = true }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 font-sans">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        {isLoginView ? <Login /> : <SignUp />}
      </div>
    </div>
  );
}
