import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LOGIN_ENDPOINT } from "../constants/endpoints";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(LOGIN_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login success:", data);

        // Hifadhi JWT token kwenye localStorage
        if (data.access) {
          localStorage.setItem("access_token", data.access);
        }
        if (data.refresh) {
          localStorage.setItem("refresh_token", data.refresh);
        }

        // Hifadhi jina la farmer (full_name au username)
        if (data.full_name) {
          localStorage.setItem("user_name", data.full_name);
        } else if (data.username) {
          localStorage.setItem("user_name", data.username);
        }

        // Onyesha popup ya success
        setSuccess(true);

        // Baada ya sekunde 2, redirect farmer
        setTimeout(() => {
          if (data.role === "farmer") {
            navigate("/dashboard");
          } else {
            navigate("/");
          }
        }, 2000);
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        setError("Login failed: " + JSON.stringify(errorData));
      }
    } catch (err) {
      console.error("Network error:", err);
      setError("Network error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-green-200 to-green-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md animate-fade-in relative">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Ingia Akaunti 🌱
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <span className="loader border-t-2 border-b-2 border-white rounded-full w-5 h-5 animate-spin"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {error && (
          <p className="text-red-600 text-center mt-4 animate-shake">{error}</p>
        )}

        {/* Link to Register */}
        <p className="text-center text-gray-600 mt-4">
          Huna akaunti?{" "}
          <Link to="/register" className="text-green-600 font-semibold hover:underline">
            Sajili hapa
          </Link>
        </p>

        {/* Success Popup */}
        {success && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg animate-bounce">
            ✅ Umefanikiwa kuingia! Unapelekwa Dashboard...
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;