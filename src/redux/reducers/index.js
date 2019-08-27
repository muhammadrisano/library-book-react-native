import { combineReducers } from 'redux';
import users from './users';
import books from './books';
import loanbooks from './loanbooks';

const appReducer = combineReducers({
    users,
    books,
    loanbooks

});

export default appReducer;