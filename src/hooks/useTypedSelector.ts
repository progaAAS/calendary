import { AppStateType } from './../store/redux-store';
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypeSelector: TypedUseSelectorHook<AppStateType> = useSelector