import {
  RouteObject
} from "react-router-dom";
import CreateUserScreen from "../screens/CreateUserScreen";
import ListUserScreen from "../screens/ListUserScreen";
import EditUserScreen from "../screens/EditUserScreen";
import { UserPaths } from "../constants/constant.path";


const LIST_USERS_ROUTE: RouteObject = {
    path: UserPaths.LIST_USERS,
    element: <ListUserScreen />,
}
const CREATE_USER_ROUTE: RouteObject = {
    path: UserPaths.CREATE_USER,
    element: <CreateUserScreen />,
}
const EDIT_USER_ROUTE: RouteObject = {
    path: UserPaths.EDIT_USER,
    element: <EditUserScreen />,
}



export const USER_ROUTES = [LIST_USERS_ROUTE, CREATE_USER_ROUTE, EDIT_USER_ROUTE] 