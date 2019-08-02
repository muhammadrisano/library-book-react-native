import AsyncStorage from '@react-native-community/async-storage';


const globalState = {
    token: null || AsyncStorage.getItem('token'),
    id_user: null || AsyncStorage.getItem('id_user'),
    role_id: null || AsyncStorage.getItem('role_id'),
    card_number: null || AsyncStorage.getItem('card_number'),
    user:null,
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
                role_id: action.payload.data.result.role_id
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