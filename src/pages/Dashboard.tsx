import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    // Chukua jina kutoka localStorage (lililohifadhiwa baada ya login)
    const storedName = localStorage.getItem("user_name");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleLogout = () => {
    // Futa tokens na jina
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_name");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-green-100 to-green-200 animate-fade-in">
      {/* Header */}
      <header className="bg-green-700 text-white py-6 shadow-lg animate-slide-down">
        <h1 className="text-3xl font-bold text-center">Farmer Dashboard 🌱</h1>
        <p className="text-center mt-2 text-green-100 animate-pulse">
          Karibu {userName || "Farmer"}! Hii ni sehemu yako ya taarifa na huduma za kilimo
        </p>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition animate-bounce"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card: Hali ya Hewa */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition transform hover:scale-105 animate-fade-in">
          <h2 className="text-xl font-bold text-green-700 mb-4">Hali ya Hewa 🌦️</h2>
          <p className="text-gray-700 mb-4">
            Angalia hali ya hewa ya leo na utabiri wa siku zijazo kwa eneo lako.
          </p>
          <Link
            to="/weather"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Fungua Hali ya Hewa
          </Link>
        </div>

        {/* Card: Taarifa za Kilimo */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition transform hover:scale-105 animate-fade-in">
          <h2 className="text-xl font-bold text-green-700 mb-4">Taarifa za Kilimo 📘</h2>
          <p className="text-gray-700 mb-4">
            Pata habari, mbinu bora, na ushauri wa wataalamu wa kilimo.
          </p>
          <Link
            to="/info"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Soma Taarifa
          </Link>
        </div>

        {/* Card: Soko la Mazao */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition transform hover:scale-105 animate-fade-in">
          <h2 className="text-xl font-bold text-green-700 mb-4">Soko la Mazao 💹</h2>
          <p className="text-gray-700 mb-4">
            Fahamu bei za mazao sokoni kwa wakati halisi na fanya maamuzi bora.
          </p>
          <Link
            to="/market"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Angalia Soko
          </Link>
        </div>

        {/* Card: Uza Mazao */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition transform hover:scale-105 animate-fade-in">
          <h2 className="text-xl font-bold text-green-700 mb-4">Uza Mazao 🛒</h2>
          <p className="text-gray-700 mb-4">
            Weka mazao yako sokoni na ungana na wanunuzi moja kwa moja.
          </p>
          <Link
            to="/sell"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Uza Mazao
          </Link>
        </div>

        {/* Card: Mashauri ya Wataalamu */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition transform hover:scale-105 animate-fade-in">
          <h2 className="text-xl font-bold text-green-700 mb-4">Mashauri ya Wataalamu 👨🏽‍🌾</h2>
          <p className="text-gray-700 mb-4">
            Ungana na wataalamu wa kilimo kwa ushauri wa moja kwa moja.
          </p>
          <Link
            to="/advice"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Pata Ushauri
          </Link>
        </div>

        {/* Card: Profaili */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition transform hover:scale-105 animate-fade-in">
          <h2 className="text-xl font-bold text-green-700 mb-4">Profaili 👤</h2>
          <p className="text-gray-700 mb-4">
            Angalia na hariri taarifa zako binafsi za akaunti.
          </p>
          <Link
            to="/profile"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Fungua Profaili
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4 mt-8 animate-slide-up">
        <p>&copy; {new Date().getFullYear()} SmartAgriculture. Empowering Farmers with Digital Tools.</p>
      </footer>
    </div>
  );
};

export default Dashboard;