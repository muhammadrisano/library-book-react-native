import axios from 'axios';



export const borrowuser = (data, header) => {
    return {
        type: 'BORROW_USER',
        payload: axios.post('http://192.168.6.126:4000/loanbooks', data, {
            headers: header,
        }),
    }
}

export const borrowBookUser = (data, header) => {
    return {
        type: 'BORROW_BOOK_USER',
        payload: axios.get('http://192.168.6.126:4000/loanbooks/cardnumber/' + data, {
            headers: header,
        }),
    }
}

export const getAllborrow = (header) => {
    return {
        type: 'GET_ALL_BORROW',
        payload: axios.get('http://192.168.6.126:4000/loanbooks/', {
            headers: header,
        }),
    }
}