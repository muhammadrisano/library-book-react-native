import axios from 'axios';
import { existsTypeAnnotation } from '@babel/types';



export const borrowuser = (data, header) => {
    return {
        type: 'BORROW_USER',
        payload: axios.post('http://localhost:4000/loanbooks', data, {
            headers: header,
        }),
    }
}

export const borrowBookUser = (data, header) => {
    return {
        type: 'BORROW_BOOK_USER',
        payload: axios.get('http://localhost:4000/loanbooks/cardnumber/' + data, {
            headers: header,
        }),
    }
}

export const getAllborrow = (header) => {
    return {
        type: 'GET_ALL_BORROW',
        payload: axios.get('http://localhost:4000/loanbooks/', {
            headers: header,
        }),
    }
}

export const getConfirmborrow = () => {
    return {
        type: 'GET_CONFIRM_BORROW',
        payload: axios.get('http://localhost:4000/loanbooks/confirm/get', {
            headers: { "authorization": "jangan-coba-coba" },
        })
    }
}
export const prosesConfirmBorrow = (id_loanbook, data) => {
    return {
        type: 'PROSES_CONFIRM_BORROW',
        payload: axios.patch('http://localhost:4000/loanbooks/prosesconfirm/' + id_loanbook, data, {
            headers: { "authorization": "jangan-coba-coba" }
        })
    }
}

export const updateBorrow = (id_loanbook, data) => {
    return {
        type: 'UPDATE_BORROW',
        payload: axios.patch('http://localhost:4000/loanbooks/updateborrow/' + id_loanbook, data, {
            headers: { "authorization": "jangan-coba-coba" }
        })
    }
}
export const cancelborrow = (id_loanbook, data) => {
    return {
        type: 'CANCEL_BORROW',
        payload: axios.patch('http://localhost:4000/loanbooks/cancelborrow/' + id_loanbook, data, {
            headers: { "authorization": "jangan-coba-coba" }
        })
    }
}