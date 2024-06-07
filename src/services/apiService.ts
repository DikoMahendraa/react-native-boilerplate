// apiService.js

import axios from 'axios';

// Create an Axios instance with custom configuration
const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token to headers
api.interceptors.request.use(
  async config => {
    const token = await getToken(); // Implement your token retrieval logic
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// Response interceptor for handling responses
api.interceptors.response.use(
  response => response,
  error => {
    // Handle errors
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('Response error:', error.response);
      return Promise.reject(error.response);
    } else if (error.request) {
      // No response received from server
      console.error('Request error:', error.request);
      return Promise.reject(error.request);
    } else {
      // Error setting up the request
      console.error('Error:', error.message);
      return Promise.reject(error.message);
    }
  },
);

// Example function to fetch user profile
export const fetchUserProfile = async () => {
  try {
    const response = await api.get('/user/profile'); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Mock function to get token (replace with actual implementation)
const getToken = async () => {
  // Implement your token retrieval logic here (e.g., from AsyncStorage)
  return 'your-auth-token';
};

export default api;
