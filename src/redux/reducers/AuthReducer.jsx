import { CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_LOADING, CHANGE_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR, RESET_PASSWORD_LOADING, RESET_PASSWORD_SUCESS, TEACHER_FORGOT_ERROR, TEACHER_FORGOT_LOADING, TEACHER_FORGOT_SUCCESS, TEACHER_LOGIN_ERROR, TEACHER_LOGIN_LOADING, TEACHER_LOGIN_SUCCESS, TEACHER_OTP_ERROR, TEACHER_OTP_LOADING, TEACHER_OTP_SUCCESS, TEACHER_PROFILE_ERROR, TEACHER_PROFILE_LOADING, TEACHER_PROFILE_SUCCESS, UPDATE_PROFILE_ERROR, UPDATE_PROFILE_LOADING, UPDATE_PROFILE_SUCCESS } from "../constants/AuthActionType";

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

    case TEACHER_FORGOT_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case TEACHER_FORGOT_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
      };

    case TEACHER_FORGOT_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case TEACHER_OTP_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case TEACHER_OTP_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
      };

    case TEACHER_OTP_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case TEACHER_PROFILE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case TEACHER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
      };

    case TEACHER_PROFILE_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case UPDATE_PROFILE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
      };

    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case CHANGE_PASSWORD_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
      };

    case CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };


    case RESET_PASSWORD_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case RESET_PASSWORD_SUCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
      };

    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};
