import { TEACHER_LOGIN_ERROR, TEACHER_LOGIN_LOADING, TEACHER_LOGIN_SUCCESS } from "../constants/AuthActionType";

const initialState = {
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEACHER_LOGIN_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case TEACHER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
      };

    case TEACHER_LOGIN_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};
