import React, { FC } from "react"
import { useSelector } from "react-redux";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes, RouterNames } from "../router/router";

const AppRouter: FC = () => {
    const {isAuth} = useTypeSelector(state => state.auth)
  return (
    isAuth
      ?
    <Switch>
        {privateRoutes.map(route => 
            <Route path={route.path}
                    exact={route.exact}
                    component={route.component}
                    key={route.path}
            />
        )}
        <Redirect to={RouterNames.EVENT}/>
    </Switch>
    :
    <Switch>
        {publicRoutes.map(route => 
            <Route path={route.path}
                    exact={route.exact}
                    component={route.component}
                    key={route.path}
            />
        )}
        <Redirect to={RouterNames.LOGIN}/>
    </Switch>
  );
}

export default AppRouter;
