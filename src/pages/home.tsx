import React from "react";
import { FaCloudSun, FaShoppingCart, FaSeedling, FaInfoCircle, FaStore } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const cards = [
    { 
      title: "Hali ya Hewa", 
      description: "Angalia hali ya hewa ya leo", 
      link: "/weather", 
      icon: <FaCloudSun size={40} className="text-blue-500" /> 
    },
    { 
      title: "Nunua Mazao", 
      description: "Soko la mazao ya kilimo", 
      link: "/market", 
      icon: <FaShoppingCart size={40} className="text-green-500" /> 
    },
    { 
      title: "Mbinu Bora za Kilimo", 
      description: "Jifunze mbinu bora", 
      link: "/methods", 
      icon: <FaSeedling size={40} className="text-green-700" /> 
    },
    { 
      title: "Taarifa za Kilimo", 
      description: "Habari na taarifa za kilimo", 
      link: "/info", 
      icon: <FaInfoCircle size={40} className="text-yellow-500" /> 
    },
    { 
      title: "Uza Mazao", 
      description: "Weka mazao yako sokoni", 
      link: "/sell", 
      icon: <FaStore size={40} className="text-red-500" /> 
    },
  ];

  // Handler kwa card ya Uza Mazao
  const handleSellClick = () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      // Kama farmer hajalogin → mpeleke login
      navigate("/login");
    } else {
      // Kama farmer yuko logged in → mpeleke sell page
      navigate("/sell");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-100 via-green-200 to-green-300 animate-gradient-x">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-green-700 text-white px-6 py-4 shadow-lg">
        <h1 className="text-2xl font-bold">SmartAgriculture</h1>
        <div className="flex items-center space-x-6">
          <div className="relative group">
            <button className="hover:underline flex items-center space-x-1">
              <span>Our Services</span>
              <span className="ml-1">▼</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded mt-2 p-4">
              {cards.map((card, index) => (
                <a key={index} href={card.link} className="block px-2 py-1 hover:bg-green-100 rounded">
                  {card.title}
                </a>
              ))}
            </div>
          </div>
          <a href="/login" className="hover:underline">Login</a>
          <a href="/register" className="hover:underline">Register</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-center text-white relative"
        style={{ backgroundImage: "url('/images/farm.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Karibu SmartAgriculture 🌱</h2>
          <p className="text-lg mb-6">Suluhisho za kidigitali kwa wakulima wa Tanzania</p>
          <a
            href="#cards"
            className="bg-white text-green-700 px-6 py-2 rounded font-semibold hover:bg-green-100 transition"
          >
            Jifunze Zaidi
          </a>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <div className="flex items-center space-x-4 mb-4">
              {card.icon}
              <h3 className="text-xl font-bold text-green-700">{card.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{card.description}</p>
            {card.title === "Uza Mazao" ? (
              <button
                onClick={handleSellClick}
                className="text-green-600 font-semibold hover:underline"
              >
                Endelea
              </button>
            ) : (
              <a href={card.link} className="text-green-600 font-semibold hover:underline">
                Angalia
              </a>
            )}
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4 mt-auto">
        <p>&copy; {new Date().getFullYear()} SmartAgriculture. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;