import {
    RouteObject
  } from "react-router-dom";
  import CreateTaskScreen from "../screens/CreateTaskScreen";
  import ListTaskScreen from "../screens/ListTaskScreen";
  import EditTaskScreen from "../screens/EditTaskScreen";
  import { TaskPaths } from "../constants/constant.path";
  
  
  const LIST_TASKS_ROUTE: RouteObject = {
      path: TaskPaths.LIST_TASKS,
      element: <ListTaskScreen />,
  }
  const CREATE_TASK_ROUTE: RouteObject = {
      path: TaskPaths.CREATE_TASK,
      element: <CreateTaskScreen />,
  }
  const EDIT_TASK_ROUTE: RouteObject = {
      path: TaskPaths.EDIT_TASK,
      element: <EditTaskScreen />,
  }
  
  
  
  export const TASK_ROUTES = [LIST_TASKS_ROUTE,CREATE_TASK_ROUTE,EDIT_TASK_ROUTE ] 