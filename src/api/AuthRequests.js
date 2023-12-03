import axios from 'axios';


const API = axios.create({ baseURL: 'https://apptesting-3dac2.web.app/api' });

export const logIn = (formData) => API.post('/auth/login', formData);

export const signUp = (formData) => API.post('/auth/register', formData);
