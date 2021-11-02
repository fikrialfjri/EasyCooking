import axios from 'axios'
const mealDbAPI = 'https://www.themealdb.com/api/json/v1/1'

const API = axios.create({
  baseURL: mealDbAPI,
});

export default API;
