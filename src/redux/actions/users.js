import axios from 'axios';

export const loginUser = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post(`http://localhost:4000/user/login`, data, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};
