// Base URL ya backend yako (Django server)
export const BASE_URL = "http://127.0.0.1:8000/api";

// Endpoints za authentication
export const REGISTER_ENDPOINT = `${BASE_URL}/register/`;
export const LOGIN_ENDPOINT = `${BASE_URL}/login/`;
export const FORGOT_PASSWORD_ENDPOINT = `${BASE_URL}/forgot-password/`;

// JWT token endpoints
export const TOKEN_ENDPOINT = `${BASE_URL}/token/`;
export const REFRESH_TOKEN_ENDPOINT = `${BASE_URL}/token/refresh/`;

// Farmer dashboard
export const DASHBOARD_ENDPOINT = `${BASE_URL}/dashboard/`;

// Extra endpoints (mfano taarifa za kilimo, hali ya hewa)
export const WEATHER_ENDPOINT = `${BASE_URL}/weather/`;
export const AGRICULTURE_INFO_ENDPOINT = `${BASE_URL}/info/`;
export const SELL_ENDPOINT = `${BASE_URL}/sell/`;
export const MARKET_ENDPOINT = `${BASE_URL}/market/`;