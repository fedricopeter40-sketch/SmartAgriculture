import React, { useState, useEffect } from "react";

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // mfano: coordinates za Morogoro, Tanzania
  const lat = -6.8278;
  const lon = 37.6591;
  const apiKey = "YOUR_GOOGLE_API_KEY"; // weka key yako hapa

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://weather.googleapis.com/v1/weather:lookup?location.latitude=${lat}&location.longitude=${lon}&key=${apiKey}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p className="text-center">Loading weather...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Hali ya Hewa 🌦️
        </h2>
        {weather ? (
          <div className="space-y-4">
            <p><strong>Temperature:</strong> {weather.currentConditions.temperature} °C</p>
            <p><strong>Humidity:</strong> {weather.currentConditions.humidity} %</p>
            <p><strong>Wind Speed:</strong> {weather.currentConditions.windSpeed} km/h</p>
            <p><strong>Description:</strong> {weather.currentConditions.weatherCode}</p>
          </div>
        ) : (
          <p className="text-red-500">Hakuna data ya hali ya hewa kwa sasa.</p>
        )}
      </div>
    </div>
  );
};

export default Weather;