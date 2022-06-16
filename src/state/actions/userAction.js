import {
   UPDATE_USER_DATA
  } from "./types";

  import UserService from "../services/userService";

  export const userAction = () => (dispatch) => {
    dispatch({
        type: UPDATE_USER_DATA,
        payload:{ loading: true}
      }); 
    return UserService.fetchUsers().then(
      (data) => {
        console.log(data);
        dispatch({
          type: UPDATE_USER_DATA,
          payload:{data, loading: false}
        })
        
        return Promise.resolve();
      },
      (error) => {
        dispatch({
            type: UPDATE_USER_DATA,
            payload:{loading: false}
          }); 
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString(); 
        return Promise.reject();
      }
    );
  };