import axios from 'axios'


const API = axios.create({ baseURL: 'https://apptesting-3dac2.web.app/api' });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);