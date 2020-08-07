import axios from 'axios';

// baseUrl -> Exatamente o endereço do back-end, sem a rota

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api;