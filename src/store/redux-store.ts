import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

let rootReducers = combineReducers(reducers);


let store = createStore(rootReducers, applyMiddleware(thunk));

//export type RootState = ReturnType<typeof store.getState> // получаем тип нашего состояния
 type RootReducerType = typeof rootReducers; // Определяем тип
export type AppStateType = ReturnType<RootReducerType>
export type AppDispatch = typeof store.dispatch;

export default store;