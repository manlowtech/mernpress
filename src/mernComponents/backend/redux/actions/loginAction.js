import {userConstants} from './types';
import axios from 'axios';




export const login = (email,password)=>(dispatch)=>{ 
   
      dispatch(request({ email }));
    const variables = {
        email,
        password,
    }
   
axios.post('/users/login',variables)
.then(user=>{
localStorage.setItem('user',JSON.stringify(user));
dispatch(success(user));


})

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }

}