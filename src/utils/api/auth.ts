import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // استبدل بالرابط الحقيقي
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;