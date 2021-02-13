import {userConstants} from './types';
import axios from 'axios';

export const login = (username,password)=>(dispatch)=>{
    dispatch(request({ username }));
    const variables = {
        username,
        password,
    }
    let user = {};
axios.post('/users/login',variables)
.then(user=>{
    user=user;
localStorage.setItem('user',JSON.stringify(res));
dispatch(success(user));

})

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }

}