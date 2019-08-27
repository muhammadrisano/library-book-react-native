import axios from 'axios';

export const loginUser = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post(`http://localhost:4000/user/login`, data, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};

export const getUser = (data, header) => {
    return {
        type: 'GET_USER',
        payload: axios.get(`http://localhost:4000/user?search=` + data, {
            headers: header
        }),
    };
};

export const getuserid = (id_user, header) => {
    return {
        type: 'GET_USER_ID',
        payload: axios.get('http://localhost:4000/user/' + id_user, {
            headers: header
        })
    }
}

export const updateuser = (id_user, data, header) => {
    return {
        type: 'UPDATE_USER',
        payload: axios.patch('http://localhost:4000/user/' + id_user, data, {
            headers: header
        })
    }
}