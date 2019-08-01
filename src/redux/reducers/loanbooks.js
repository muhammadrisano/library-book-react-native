const globalState = {

    borrowUser: [],
    borrowAllUser: [],
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

        default:
            return state;
    }

}

export default loanbooks;