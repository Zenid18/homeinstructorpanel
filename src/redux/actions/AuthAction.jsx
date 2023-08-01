import {
  TEACHER_LOGIN_ERROR,
  TEACHER_LOGIN_LOADING,
  TEACHER_LOGIN_SUCCESS,
} from "../constants/AuthActionType";

export const teacherLoginLoading = (isLoading) => {
  return {
    type: TEACHER_LOGIN_LOADING,
    isLoading: isLoading,
  };
};
export const teacherLoginSuccess = (isLoading) => {
  return {
    type: TEACHER_LOGIN_SUCCESS,
    isLoading: isLoading,
  };
};
export const teacherLoginError = (isLoading) => {
  return {
    type: TEACHER_LOGIN_ERROR,
    isLoading: isLoading,
  };
};
