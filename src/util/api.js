import axios from "axios";

// local my system
// const API_BASE_URL = 'http://localhost:8081';

// another system it can access the backend
const API_BASE_URL = 'http://192.168.1.136:8081';

// implement ssl url tried
// const API_BASE_URL = 'http://192.168.1.136:8081';

// url
const API_BASE_URL1 = 'http://192.168.1.136:8081';

// implemented and tried another port
// const API_BASE_URL = 'https://192.168.1.136:8443';

const api = axios.create({
    baseURL: API_BASE_URL,

});

export const loginUser = async (credentials) => {
    try {
        const repsonse = await api.post('/users/login', credentials);
        return repsonse?.data;
    } catch (error) {
        throw error?.response?.data || 'An error occurred while logging in.';
    }
};

export const getAllUsers = async () => {
    try {
        const repsonse = await api.get('/users/getalluser');
        return repsonse?.data;
    } catch (error) {
        throw error?.response?.data || 'An error occurred while fetching users.';
    }
};

export const registerUser = async (userDetails) => {
    try {
        const repsonse = await api.post(API_BASE_URL+'/users/createuser', userDetails);
        return repsonse?.data;
    } catch (error) {
        throw error?.response?.data || 'An error occurred while creating user.';
    }
};


export default api;