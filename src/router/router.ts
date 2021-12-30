import React from "react";
import Event from "../Page/Event";
import Login from "../Page/Login";

export interface IRoute{
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouterNames{
    LOGIN = "/login",
    EVENT = "/"
}

export const publicRoutes: IRoute[] = [
    {path: RouterNames.LOGIN, exact: true, component: Login}
]

export const privateRoutes: IRoute[] = [
    {path: RouterNames.EVENT, exact: true, component: Event}
]