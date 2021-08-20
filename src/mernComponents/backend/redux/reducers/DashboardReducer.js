import {userConstants} from '../actions/types';

export const DashboardReducer = (state={},action)=>{

    switch(action.type){
        case userConstants.MENU_PAGE:
         return {
             slug:true,
             path : true,
         };
        default : return state;

          
    }
}
