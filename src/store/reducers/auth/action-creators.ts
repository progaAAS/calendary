import { AppDispatch } from './../../redux-store';
import { AuthActionEnum, SetAuthAction, SetIsLoadingAction, SetUserAction, SetErrorAction } from './type';
import { IUser } from "../../../models/IUser";
import axios from 'axios';

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setError: (error: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({type:AuthActionEnum.SET_IS_LOADING, payload: isLoading}),
    login: (username: string, password: string) => async(dispatch: AppDispatch) => {
        try{
            setTimeout(async() => {            
                dispatch(AuthActionCreators.setIsLoading(true))
                const response = await axios.get<IUser[]>('./users.json');
                const mockUser = response.data.find(user => user.username === username && user.password === password)
                if(mockUser){
                    localStorage.setItem('auth', "true");
                    localStorage.setItem('username', mockUser.username);
                    dispatch(AuthActionCreators.setIsAuth(true))            
                    dispatch(AuthActionCreators.setUser(mockUser))
                }else{
                    dispatch(AuthActionCreators.setError("Некорректный логин или пароль"))
                }
                AuthActionCreators.setIsLoading(false)
            }, 1000)
        }catch(e){
            dispatch(AuthActionCreators.setError("Произошла ошибка при логине"))
        }
    },
    logout: (username: string, password: string) => async(dispatch: AppDispatch) => {

    }
}