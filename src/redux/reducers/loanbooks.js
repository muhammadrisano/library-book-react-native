const globalState = {

    borrowUser: [],
    borrowAllUser: [],
    borrowConfirm: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false

};


const loanbooks = (state = globalState, action) => {



    switch (action.type) {
        case 'BORROW_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'BORROW_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'BORROW_USER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
            };
        case 'GET_CONFIRM_BORROW_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_CONFIRM_BORROW_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_CONFIRM_BORROW_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                borrowConfirm: action.payload.data.result
            };
        case 'PROSES_CONFIRM_BORROW_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'PROSES_CONFIRM_BORROW_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'PROSES_CONFIRM_BORROW_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
            };
        default:
            return state;
    }

}

export default loanbooks;