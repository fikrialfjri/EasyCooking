import axios from 'axios'
const corsIssue = "https://cors-anywhere.herokuapp.com"
const masakapahariiniAPI = `${corsIssue}/https://masak-apa-tomorisakura.vercel.app/`

const API = axios.create({
  baseURL: masakapahariiniAPI,
});

export default API;
