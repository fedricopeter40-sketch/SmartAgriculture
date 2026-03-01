import React, { useEffect, useState } from "react";
import { MARKET_ENDPOINT } from "../constants/endpoints";

interface Crop {
  id: number;
  crop_name: string;
  quantity: number;
  price: string;
  location: string;
  image?: string;
  farmer_name: string;
  created_at: string;
}

const Market: React.FC = () => {
  const [crops, setCrops] = useState<Crop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await fetch(MARKET_ENDPOINT);
        if (response.ok) {
          const data = await response.json();
          setCrops(data);
        } else {
          setError("Failed to load market data");
        }
      } catch (err) {
        setError("Network error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchCrops();
  }, []);

  const handleBuy = (crop: Crop) => {
    alert(`Umenunua ${crop.crop_name} kutoka ${crop.farmer_name} kwa TZS ${crop.price}`);
    // hapa unaweza kuunganisha na payment gateway (mobile money, etc.)
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-green-100 to-green-200 p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center animate-fade-in">
        🛒 Soko la Mazao
      </h1>

      {loading && <p className="text-center text-gray-600">Loading market data...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {crops.map((crop) => (
          <div
            key={crop.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 animate-fade-in"
          >
            {crop.image ? (
              <img
                src={crop.image.startsWith("http") ? crop.image : `http://127.0.0.1:8000${crop.image}`}
                alt={crop.crop_name}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-green-100 flex items-center justify-center text-green-600">
                📦 Hakuna picha
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {crop.crop_name}
              </h2>
              <p className="text-gray-600 mb-1">👨‍🌾 {crop.farmer_name}</p>
              <p className="text-gray-600 mb-1">📍 {crop.location}</p>
              <p className="text-green-700 font-bold mb-2">
                💰 TZS {crop.price}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Kiasi: {crop.quantity} kg
              </p>
              <button
                onClick={() => handleBuy(crop)}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Nunua Sasa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;