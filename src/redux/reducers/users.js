import AsyncStorage from '@react-native-community/async-storage';


const globalState = {
    token: null,
    id_user: null,
    role_id: null,
    card_number: null,
    fullname: null,
    user: null,
    isLoading: false,
    isFulfilled: false,
    isRejected: false
};


const users = (state = globalState, action) => {

    switch (action.type) {
        case 'LOGIN_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'LOGIN_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'LOGIN_USER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                user: action.payload.data.result,
                token: action.payload.data.result.token,
                id_user: action.payload.data.result.id_user,
                role_id: action.payload.data.result.role_id,
                fullname: action.payload.data.result.fullname,
            };
        case 'REGISTER_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'REGISTER_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'REGISTER_USER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
            };
        default:
            return state;
    }


}

export default users;