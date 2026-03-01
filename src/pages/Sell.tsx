import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SELL_ENDPOINT } from "../constants/endpoints";

const Sell: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    crop_name: "",
    quantity: "",
    price: "",
    location: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("Tafadhali login kwanza ili kuuza mazao.");
        setLoading(false);
        return;
      }

      const formDataObj = new FormData();
      formDataObj.append("crop_name", formData.crop_name);
      formDataObj.append("quantity", formData.quantity);
      formDataObj.append("price", formData.price);
      formDataObj.append("location", formData.location);
      if (image) {
        formDataObj.append("image", image);
      } else {
        setError("Tafadhali weka picha ya zao.");
        setLoading(false);
        return;
      }

      const response = await fetch(SELL_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataObj,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Sell success:", data);
        setSuccess(true);

        // Redirect farmer to market page after 2 seconds
        setTimeout(() => {
          navigate("/market");
        }, 2000);
      } else {
        let errorMessage = "Sell failed";
        try {
          const errorData = await response.json();
          console.error("Sell failed:", errorData);
          errorMessage = "Sell failed: " + JSON.stringify(errorData);
        } catch {
          errorMessage = "Sell failed: Server returned an invalid response";
        }
        setError(errorMessage);
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
          Uza Mazao 🛒
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Jina la Zao</label>
            <input
              type="text"
              name="crop_name"
              value={formData.crop_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Kiasi (kg)</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Bei (TZS)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Picha ya Zao</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
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
              "Upload Mazao"
            )}
          </button>
        </form>

        {error && (
          <p className="text-red-600 text-center mt-4 animate-shake">{error}</p>
        )}

        {success && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg animate-bounce">
            ✅ Mazao yako yamewekwa sokoni! Unapelekwa Market...
          </div>
        )}
      </div>
    </div>
  );
};

export default Sell;