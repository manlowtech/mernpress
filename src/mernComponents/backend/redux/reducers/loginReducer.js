import {userConstants} from '../actions/types';

const loginReducer = (state={},action)=>{
const user = JSON.parse(localStorage.getItem('user'));
    switch(action.type){
        case userConstants.LOGIN_REQUEST:
         return {
             loggingIn:true,
             user : user,
         };
         case userConstants.LOGIN_SUCCESS : 
          return {
              loggedIn : true,
              user : action.user,
          };
          case userConstants.LOGIN_FAILURE:
          return {};
        case userConstants.LOGOUT:
         return {};
        default : state;

          
    }
}
