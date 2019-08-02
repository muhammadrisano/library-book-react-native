import axios from 'axios';

export const loginUser = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post(`http://192.168.6.126:4000/user/login`, data, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};

export const registerUser = (data) => {
    return {
        type: 'REGISTER_USER',
        payload: axios.post(`http://192.168.6.126:4000/user/register`, data)
    };
};
