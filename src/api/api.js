import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/';
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,  // Adjust the timeout as needed
  headers: {
    'X-CSRFToken': getCookie('csrftoken'), // Make sure to replace with your actual function to get the CSRF token
  },
});

export const loginUser = async (username, password) => {
  try {
    const response = await axiosInstance.post('login/', {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('register/', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default axiosInstance;
