import {
    UPDATE_USER_DATA
  } from "../actions/types";
  
  const initialState = { users: [] };
  
  const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case UPDATE_USER_DATA:
        return {
          ...state,
          users: {data: payload.data, loading: payload.loading},
        };
        
      default:
        return state;
    }
  }

export default userReducer;