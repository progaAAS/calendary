import { AuthActionEnum, AuthState, SetAuthAction } from "./type";

const initialState: AuthState = {
    isAuth: false
}

const authRedusers = (state = initialState, action: SetAuthAction): AuthState => {
    switch(action.type){
        case AuthActionEnum.SET_AUTH: {
            return {...state, isAuth: action.payload}
        }
        default:
             return state;
    }
}


export default authRedusers;