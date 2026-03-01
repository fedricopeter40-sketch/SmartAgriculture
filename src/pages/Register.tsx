import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { REGISTER_ENDPOINT } from "../constants/endpoints";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmed_password: "",
    role: "farmer", // default role, hidden from form
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(REGISTER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration success:", data);

        // Onyesha popup ya success
        setSuccess(true);

        // Baada ya sekunde 2, redirect farmer to login
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        setError("Registration failed: " + JSON.stringify(errorData));
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Network error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-green-200 to-green-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md animate-fade-in relative">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Sajili Akaunti ya Farmer 🌱
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmed_password"
              value={formData.confirmed_password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <span className="loader border-t-2 border-b-2 border-white rounded-full w-5 h-5 animate-spin"></span>
            ) : (
              "Register"
            )}
          </button>
        </form>

        {error && (
          <p className="text-red-600 text-center mt-4 animate-shake">{error}</p>
        )}

        {/* Link to Login */}
        <p className="text-center text-gray-600 mt-4">
          Tayari una akaunti?{" "}
          <Link to="/login" className="text-green-600 font-semibold hover:underline">
            Ingia hapa
          </Link>
        </p>

        {/* Success Popup */}
        {success && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg animate-bounce">
            ✅ Umefanikiwa kusajili! Unapelekwa Login...
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;