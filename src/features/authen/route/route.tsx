import {
  RouteObject
} from "react-router-dom";

import { AuthPaths} from "../constants/constant.path";
import Login from "../Login";
import Logup from "../Logup";

const LOGIN_ROUTE: RouteObject = {
    path: AuthPaths.LOGIN,
    element: <Login />,
}
const LOGUP_ROUTE: RouteObject = {
    path: AuthPaths.LOGUP,
    element: <Logup />,
}


export const AUTH_ROUTES = [LOGIN_ROUTE, LOGUP_ROUTE] 