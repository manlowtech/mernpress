import {userConstants} from './types';
import axios from 'axios';




export const DashBoadAction = (slug,path)=>(dispatch)=>{ 
    const variables = {
        email,
        password,
    }
      dispatch(request(variables));
    function request(user) { return { type: userConstants.MENU_PAGE, user } }

}