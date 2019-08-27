const globalState = {
    token: null,
    id_user: null,
    role_id: null,
    card_number: null,
    photo: null,
    fullname: null,
    userid: '',
    user: '',
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
                user: action.payload.data.result
            };
        case 'GET_USER_iD_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };

        case 'GET_USER_ID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_USER_ID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                userid: action.payload.data.result
            };
        case 'UPDATE_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };

        case 'UPDATE_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'UPDATE_USER_FULFILLED':
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