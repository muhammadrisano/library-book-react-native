import axios from 'axios';

export const getBooks = (page = 1) => {
    return {
        type: 'GET_BOOK_PAGE',
        payload: axios.get(`http://192.168.6.126:4000/books?page=` + page, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};

export const searchBook = (e) => {
    return {
        type: 'SEARCH_BOOK',
        payload: axios.get('http://192.168.6.126:4000/books?search=' + e, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    };
};

export const borrowUser = (e) => {
    return {
        type: 'BORROW_USER',
        payload: axios.get('http://192.168.6.126:4000/loanbooks', e, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    }
}
export const inputBook = (dataFile) => {
    return {
        type: 'INPUT_BOOK',
        payload: axios.post('http://192.168.6.126:4000/books', dataFile, {
            headers: { "authorization": "jangan-coba-coba" },
        }),
    }
}


