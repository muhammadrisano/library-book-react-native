const globalState = {

    jumlahbuku: 0,
    bookshow: [],
    user: null,
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    jumlah: 0
};


const books = (state = globalState, action) => {



    switch (action.type) {
        case 'GET_BOOK_PAGE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_BOOK_PAGE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_BOOK_PAGE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                bookshow: action.payload.data.result,
                jumlah: action.payload.data.jumlah
            };
        case 'SEARCH_BOOK_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'SEARCH_BOOK_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'SEARCH_BOOK_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                bookshow: action.payload.data.result
            };
        default:
            return state;
    }

    // switch (action.type) {
    //     case 'GET_BOOK_PAGE_PENDING':
    //         return {
    //             ...state,
    //             isLoading: false,
    //             isFulfilled: false,
    //             isRejected: false
    //         }
    //     case 'GET_BOOK_PAGE_REJECTED':
    //         return {
    //             ...state,
    //             isLoading: false,
    //             isRejected: true,
    //         }
    //     case 'GET_BOOK_PAGE_FULFILLED':
    //         return {
    //             ...state,
    //             isLoading: false,
    //             isFulfilled: true,
    //             books: action.payload.data.result,
    //             jumlahbuku: action.payload.data.result
    //         }

    //     case 'SEARCH_BOOK':
    //         return {
    //             ...state,
    //             // books: action.search
    //         }
    //     case 'PAGE_LIST':
    //         return {
    //             ...state,
    //             // books: action.dataPage.result
    //         }
    //     case 'LOGIN_USER':
    //         return {
    //             ...state,
    //             user: action.dataLogin
    //         }
    //     default:
    //         return state
    //         break;
    // }
    // if (action.type === 'GET_ALL') {
    //   return {
    //     ...state,
    //     books: action.dataBook
    //   }
    // }


}

export default books;